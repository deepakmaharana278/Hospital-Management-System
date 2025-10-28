from django.db import models
from django.utils.timezone import now

# Create your models here
class User(models.Model):
    ROLE_CHOICE = [
        ('patient', 'Patient'),
        ('doctor', 'Doctor'),
    ]
    role = models.CharField(max_length=50,choices=ROLE_CHOICE,default="patient")
    full_name = models.CharField(max_length=50,default='Unknown')
    email = models.EmailField(max_length=50,unique=True)
    mobile = models.CharField(max_length=50,default='0000000000')
    password = models.CharField(max_length=200)
    reg_date = models.DateTimeField(default=now)

    def __str__(self):
        return self.role
    
class Appointment(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('approved', 'Approved'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled'),
    ]

    patient = models.ForeignKey(User, on_delete=models.CASCADE, related_name="patient_appointments")
    doctor = models.ForeignKey(User, on_delete=models.CASCADE, related_name="doctor_appointments")
    appointment_date = models.DateTimeField()
    description = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(default=now)

    def __str__(self):
        return f"{self.patient.full_name} → {self.doctor.full_name} ({self.status})"
    

class Doctor(models.Model):
    user = models.OneToOneField('User', on_delete=models.CASCADE, related_name='doctor_profile')
    specialization = models.CharField(max_length=100)
    experience = models.IntegerField(default=0)
    available = models.BooleanField(default=True)
    available_time = models.CharField(max_length=100, default="10:00 AM - 5:00 PM")
    created_at = models.DateTimeField(default=now)

    def __str__(self):
        return f"{self.user.full_name} - {self.specialization}"
