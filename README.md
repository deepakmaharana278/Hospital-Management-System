# 🏥 Hospital Management System

This is a Django-based Hospital Management System backend that provides user management, appointment scheduling, and doctor profile functionalities.

## 🔗 Live Demo

Check out the site live here:  
[Deepak-MediConnect](https://hospital-management-system-1-fbpb.onrender.com/) 

## 🚀 Features

- User Roles: Patient and Doctor with role-based access control
- User Registration and Authentication (Login)
- Doctor Profiles with specialization, experience, availability, and timing
- Appointment Management:
  - Patients can book appointments with doctors
  - View appointments by patient or doctor
  - Update appointment status (pending, approved, completed, cancelled)
- Email, mobile, and password validations for users

## API Endpoints

- `POST /register/` - User registration
- `POST /login/` - User login
- `GET /doctors/` - Get list of all doctors
- `GET /doctor-profile/<doctor_id>/` - Get detailed doctor profile by doctor ID
- `POST /book-appointment/` - Book an appointment (patient and doctor info required)
- `GET /appointments/patient/<patient_id>/` - Get all appointments for a specific patient
- `GET /appointments/doctor/<doctor_id>/` - Get all appointments for a specific doctor
- `PATCH /appointments/update-status/<appointment_id>/` - Update status of an appointment

## Models Overview

- `User` model: Stores user information, roles (patient/doctor), email, mobile, password
- `Doctor` model: Extends user with doctor-specific fields like specialization and availability
- `Appointment` model: Links patients and doctors with date, description, and status

## Installation

1. Clone the repository: `git clone <repository_url>`
2. Navigate to the project directory.
3. Create and activate a virtual environment.
4. Install dependencies: `pip install -r requirements.txt`
5. Run migrations: `python manage.py migrate`
6. Start the development server: `python manage.py runserver`


## Usage

Use an API client like Postman to interact with the endpoints. Register users, log them in, browse doctors, book appointments, and manage appointments status through the provided API routes.

## License

This project is licensed under the MIT License.

## Author
**Deepak Maharana**
📧 deepakmaharana3500@gmail.com
🔗 [LinkedIn](https://www.linkedin.com/in/deepak-maharana-3a7728325)
🔗 [My_Website](https://my-portfolio-chi-nine-4vbjyr31n2.vercel.app/)



