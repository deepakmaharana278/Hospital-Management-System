from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import *
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password, check_password


# Create your views here.
@api_view(['POST'])
def registration(request):
    role = request.data.get('role')
    full_name = request.data.get('full_name')
    email = request.data.get('email')
    mobile = request.data.get('mobile')
    password = request.data.get('password')

    # Doctor-specific fields (optional if patient)
    specialization = request.data.get('specialization')
    experience = request.data.get('experience')
    available_time = request.data.get('available_time')  # optional text field

    # Validation
    if User.objects.filter(email=email).exists() or User.objects.filter(mobile=mobile).exists():
        return Response({'message': 'Email or Mobile number already registered'}, status=400)

    # Create user
    user = User.objects.create(
        role=role,
        full_name=full_name,
        email=email,
        mobile=mobile,
        password=make_password(password)
    )

    # If doctor → create doctor profile with frontend data
    if role == 'doctor':
        Doctor.objects.create(
            user=user,
            specialization=specialization or "General",
            experience=experience or 0,
            available=True,  # or derive from available_time
        )

    return Response({'message': 'Your registration was successful!'})

    

@api_view(['POST'])
def login(request):
    role = request.data.get('role')
    email = request.data.get('email')
    password = request.data.get('password')

    try:
        user = User.objects.get(email=email, role=role)
        if check_password(password, user.password):
            return Response({"message": "Login Successfull","user": {
            "id": user.id,
            "full_name": user.full_name,
            "role": user.role,
            "email": user.email
        }
    }, status=200)

        return Response({"message": "Invalid Creadential"}, status=401)
    except User.DoesNotExist:
        return Response({"message": "User not found"}, status=404)


@api_view(['POST'])
def book_appointment(request):
    patient_id = request.data.get("patient_id")
    doctor_id = request.data.get("doctor_id")
    appointment_date = request.data.get("appointment_date")
    description = request.data.get("description")

    try:
        patient = User.objects.get(id=patient_id, role="patient")
        doctor = User.objects.get(id=doctor_id, role="doctor")

        Appointment.objects.create(
            patient=patient,
            doctor=doctor,
            appointment_date=appointment_date,
            description=description
        )
        return Response({"message": "Appointment booked successfully!"})
    except Exception as e:
        return Response({"message": str(e)}, status=400)


@api_view(['GET'])
def get_patient_appointments(request, patient_id):
    appointments = Appointment.objects.filter(patient_id=patient_id).select_related('doctor')
    data = [
        {
            "id": a.id,
            "doctor_name": a.doctor.full_name,
            "appointment_date": a.appointment_date,
            "status": a.status,
        }
        for a in appointments
    ]
    return Response(data)


@api_view(['GET'])
def get_doctors(request):
    doctors = Doctor.objects.filter(available=True).select_related('user')
    data = [
        {
            "id": d.user.id,  # use User ID for consistency
            "full_name": d.user.full_name,
            "email": d.user.email,
            "specialization": d.specialization,
            "experience": d.experience,
            "available": d.available,
        }
        for d in doctors
    ]
    return Response(data)

@api_view(['GET'])
def doctor_profile(request):
    email = request.query_params.get('email')  # sent from frontend
    
    try:
        user = User.objects.get(email=email, role='doctor')
        doctor = Doctor.objects.get(user=user)
        data = {
            'full_name': user.full_name,
            'email': user.email,
            'mobile': user.mobile,
            'specialization': doctor.specialization,
            'experience': doctor.experience,
            'available': doctor.available,
            'available_time': doctor.available_time,
        }
        return Response(data)
    except User.DoesNotExist:
        return Response({'message': 'Doctor not found'}, status=404)
    except Doctor.DoesNotExist:
        return Response({'message': 'Doctor profile not found'}, status=404)
    

@api_view(['GET'])
def get_doctor_appointments(request, doctor_id):
    """Return all appointments assigned to a particular doctor"""
    appointments = Appointment.objects.filter(doctor_id=doctor_id).select_related('patient')
    data = [
        {
            "id": a.id,
            "patient_name": a.patient.full_name,
            "appointment_date": a.appointment_date,
            "status": a.status,
            "description": a.description,
        }
        for a in appointments
    ]
    return Response(data)


@api_view(['PUT'])
def update_appointment_status(request, appointment_id):
    """Allow doctor to approve, reject, or complete an appointment"""
    try:
        appointment = Appointment.objects.get(id=appointment_id)
    except Appointment.DoesNotExist:
        return Response({'message': 'Appointment not found'}, status=404)

    status_value = request.data.get('status')
    if status_value not in ['approved', 'rejected', 'completed']:
        return Response({'message': 'Invalid status'}, status=400)

    appointment.status = status_value
    appointment.save()

    return Response({'message': f'Appointment marked as {status_value}'})

