from django.urls import path
from .views import *

urlpatterns = [
    path('register/', registration),
    path('login/', login),
    path('doctors/', get_doctors),
    path('book-appointment/', book_appointment),
    path('appointments/patient/<int:patient_id>/', get_patient_appointments),
    path('doctor-profile/', doctor_profile),
    path('appointments/doctor/<int:doctor_id>/', get_doctor_appointments),
    path('appointments/update-status/<int:appointment_id>/', update_appointment_status),

]