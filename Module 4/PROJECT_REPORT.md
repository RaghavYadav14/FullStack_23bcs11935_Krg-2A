# Project Report: Student Management System

## 1. Project Overview

**Project Name:** Student Management System  
**Type:** Full-Stack Web Application  
**Architecture:** MERN Stack (MongoDB, Express.js, React, Node.js)  
**Purpose:** A comprehensive academic management system for managing students, classes, timetables, results, and announcements with role-based access control.

---

## 2. Technology Stack

### Backend Technologies
- **Runtime:** Node.js
- **Framework:** Express.js v5.1.0
- **Database:** MongoDB (using Mongoose v8.19.0)
- **Email Service:** Nodemailer v7.0.9
- **Security:** CORS, dotenv
- **Development Tool:** Nodemon

### Frontend Technologies
- **Framework:** React v19.1.0
- **Build Tool:** Vite v7.0.4
- **Routing:** React Router DOM v7.8.0
- **State Management:** Redux Toolkit v2.8.2, React Redux v9.2.0
- **Styling:** Tailwind CSS v4.1.11
- **Form Handling:** React Hook Form v7.62.0
- **HTTP Client:** Axios v1.12.2
- **Icons:** React Icons v5.5.0, Lucide React v0.548.0
- **Linting:** ESLint v9.30.1

---

## 3. System Architecture

### 3.1 Backend Structure
```
Backend/
├── config/
│   └── db.js              # MongoDB connection configuration
├── controllers/
│   ├── user.controller.js      # User authentication & management
│   ├── class.controller.js     # Class & timetable management
│   ├── result.controller.js    # Result management
│   ├── announcement.controller.js  # Announcement management
│   └── otp.controller.js      # OTP generation & verification
├── models/
│   ├── user.model.js           # User schema
│   ├── class.model.js          # Class & subject schema
│   ├── result.model.js         # Result schema
│   ├── announcement.model.js   # Announcement schema
│   ├── timetable.schema.js     # Timetable schema
│   ├── otp.model.js           # OTP schema
│   └── waitinguser.model.js   # Pending user approval schema
├── routes/
│   ├── user.routes.js         # User API endpoints
│   ├── class.routes.js        # Class API endpoints
│   ├── result.routes.js       # Result API endpoints
│   └── announcement.routes.js # Announcement API endpoints
├── util/
│   ├── otpservice.js          # OTP generation service
│   └── sendEmail.js           # Email sending utility
└── server.js                  # Main server file
```

### 3.2 Frontend Structure
```
Frontend/
├── src/
│   ├── components/
│   │   ├── adminComponents/   # Admin-specific components
│   │   │   ├── adminNavbar.jsx
│   │   │   ├── createclass.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Result.jsx
│   │   │   └── Timetable.jsx
│   │   ├── userComponents/    # User-specific components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── Result.jsx
│   │   │   └── Timetable.jsx
│   │   └── ProtectedRoute.jsx # Route protection component
│   ├── pages/
│   │   ├── auth/              # Authentication pages
│   │   │   ├── auth.jsx
│   │   │   ├── loginform.jsx
│   │   │   ├── RegisterForm.jsx
│   │   │   ├── OtpVerify.jsx
│   │   │   └── SlidingPanel.jsx
│   │   └── Layout/            # Layout components
│   │       ├── adminLayout.jsx
│   │       └── userLayout.jsx
│   ├── feature/
│   │   └── auth/
│   │       └── authSlice.js   # Redux auth slice
│   ├── redux/
│   │   └── store.js           # Redux store configuration
│   ├── assets/                # Images and icons
│   ├── App.jsx                # Main app component
│   └── main.jsx               # Entry point
```

---

## 4. Core Features

### 4.1 Authentication & Authorization
- **User Registration:**
  - Email-based OTP verification
  - Unique UID (User ID) validation
  - Phone number validation
  - Password requirements (minimum 6 characters)
  - Waiting list system for pending approvals

- **User Login:**
  - UID and password-based authentication
  - Role-based access control (Admin/User)
  - Automatic redirection based on user role

- **OTP System:**
  - Email OTP generation
  - OTP verification
  - OTP resend functionality
  - Time-based OTP expiration

### 4.2 User Management
- **User Roles:**
  - **Admin:** Full system access
  - **User:** Limited access to personal data

- **User Profile:**
  - Name, Email, UID, Phone
  - Class assignment
  - Profile viewing and management

- **Waiting User Approval:**
  - Admin can view pending registrations
  - Approve or reject waiting users
  - Automatic class assignment upon approval

### 4.3 Class Management
- **Class Creation:**
  - Unique class name
  - Subject configuration with:
    - Subject name
    - Type (Graded/Non-Graded)
    - Credits (for graded subjects)
    - Internal and External marks distribution
    - Activity-based assessment structure
  - Automatic timetable creation upon class creation

- **Student Management:**
  - Add students to classes
  - Student UID and name tracking
  - Class-student relationship management

### 4.4 Timetable Management
- **Timetable Structure:**
  - 6 days: Monday through Saturday
  - 9 time slots per day:
    - 9:30 AM - 10:20 AM
    - 10:20 AM - 11:10 AM
    - 11:10 AM - 12:00 PM
    - 12:00 PM - 12:30 PM (Break)
    - 12:30 PM - 1:20 PM
    - 1:20 PM - 2:10 PM
    - 2:10 PM - 3:00 PM
    - 3:10 PM - 4:00 PM
    - 4:00 PM - 4:20 PM

- **Slot Information:**
  - Subject name
  - Teacher name
  - Room number

- **Features:**
  - Admin can create and update timetables
  - Users can view their class timetable
  - Automatic timetable initialization for new classes

### 4.5 Result Management
- **Result Types:**
  - **Regular Results:** Activity-based marks
  - **Semester Results:** Comprehensive semester marks

- **Result Structure:**
  - Class-based result organization
  - Subject-wise result tracking
  - Activity-wise marks (for regular results)
  - Student UID-based mark storage
  - Timestamp tracking (created/updated)

- **Features:**
  - Admin can create and manage results
  - Users can view their personal results
  - Result history tracking

### 4.6 Announcement System
- **Announcement Features:**
  - Subject and body content
  - Author information
  - Date and time tracking
  - Creation timestamp
  - Admin can create announcements
  - Users can view announcements

### 4.7 Dashboard Features
- **Admin Dashboard:**
  - Class creation and management
  - Timetable management
  - Result management
  - User approval system
  - Announcement creation

- **User Dashboard:**
  - View personal timetable
  - View personal results
  - View announcements
  - Profile management

---

## 5. Database Schema

### 5.1 User Model
```javascript
{
  name: String (required),
  email: String (required, unique, lowercase),
  uid: String (required, unique, lowercase),
  role: String (enum: ['user', 'admin'], default: 'user'),
  phone: Number (required, unique),
  password: String (required, minlength: 6),
  className: String (optional),
  createdAt: Date
}
```

### 5.2 Class Model
```javascript
{
  className: String (required, unique),
  subjects: [{
    name: String,
    type: String (enum: ["Graded", "Non-Graded"]),
    credits: Number (required if Graded),
    internal: Number,
    external: Number,
    activities: [{
      name: String,
      total: Number
    }]
  }],
  students: [{
    uid: String,
    name: String
  }],
  createdAt: Date
}
```

### 5.3 Result Model
```javascript
{
  classId: ObjectId (ref: Class),
  subjectName: String,
  type: String (enum: ["Regular", "Semester"]),
  activityName: String (for Regular type),
  marks: Mixed ({ uid: marks } object),
  createdAt: Date,
  updatedAt: Date
}
```

### 5.4 Timetable Model
```javascript
{
  classRef: ObjectId (ref: Class, unique),
  className: String,
  days: [{
    name: String (enum: ["Monday"..."Saturday"]),
    slots: [{
      time: String,
      subject: String (default: "---"),
      teacher: String (default: "---"),
      room: String (default: "---")
    }]
  }],
  createdAt: Date
}
```

### 5.5 Announcement Model
```javascript
{
  subject: String (required),
  body: String (required, minlength: 10),
  by: String (required),
  date: String,
  time: String,
  createdAt: Date
}
```

---

## 6. API Endpoints

### 6.1 User Routes (`/api/user`)
- `POST /sendotp` - Send OTP to email
- `POST /verifyotp` - Verify OTP
- `POST /resendotp` - Resend OTP
- `POST /verifyuser` - Check if user exists
- `POST /createwaitinguser` - Create waiting user
- `GET /waitingusers` - Get all waiting users (Admin)
- `POST /approveuser/:id` - Approve waiting user (Admin)
- `POST /login` - User login
- `GET /deletewaitinguser/:id` - Delete waiting user (Admin)

### 6.2 Class Routes (`/api/class`)
- `POST /createclass` - Create new class
- `GET /classes` - Get all classes
- `GET /class/:classId` - Get specific class details
- `GET /timetable/:classname` - Get timetable for class
- `POST /createtimetable` - Create timetable manually
- `PUT /updatetimetable` - Update timetable

### 6.3 Result Routes (`/api/result`)
- (Endpoints for result management)

### 6.4 Announcement Routes (`/api/announcements`)
- (Endpoints for announcement management)

---

## 7. Security Features

1. **Password Validation:** Minimum 6 characters
2. **Email Verification:** OTP-based email verification
3. **Unique Constraints:** Email, UID, and Phone number uniqueness
4. **Role-Based Access Control:** Admin and User role separation
5. **Protected Routes:** Frontend route protection based on authentication
6. **CORS Configuration:** Cross-origin resource sharing setup
7. **Environment Variables:** Sensitive data stored in .env files

---

## 8. User Interface Features

### 8.1 Design Elements
- Modern UI using Tailwind CSS
- Responsive design
- Icon-based navigation (React Icons, Lucide React)
- Sliding panel for authentication
- Role-specific layouts

### 8.2 Navigation
- **Admin Navigation:** Home, Timetable, Results, Create Class
- **User Navigation:** Home, Timetable, Results, Profile

### 8.3 Assets
- Calendar icon
- Create icon
- Home icon
- Logout icon
- Pencil icon
- Profile icon
- Results icon
- Refresh icon

---

## 9. State Management

- **Redux Toolkit:** Centralized state management
- **Auth Slice:** Manages authentication state (role, isAuthenticated, user data)
- **React Redux:** Connects React components to Redux store

---

## 10. Development Workflow

### Backend
- Development server: `npm run dev` (uses nodemon)
- Production server: `node server.js`
- Port: 5000 (default) or from environment variable

### Frontend
- Development server: `npm run dev` (Vite)
- Build: `npm run build`
- Preview: `npm run preview`
- Linting: `npm run lint`

---

## 11. Key Functionalities Summary

1. ✅ User registration with OTP verification
2. ✅ User login with role-based access
3. ✅ Admin approval system for new users
4. ✅ Class creation and management
5. ✅ Subject configuration (Graded/Non-Graded)
6. ✅ Student enrollment in classes
7. ✅ Timetable creation and management
8. ✅ Result entry and viewing
9. ✅ Announcement system
10. ✅ Profile management
11. ✅ Protected routes based on authentication
12. ✅ Email notifications via Nodemailer

---

## 12. Project Highlights

- **Full-Stack MERN Application:** Complete end-to-end solution
- **Role-Based Access Control:** Separate interfaces for Admin and Users
- **Email Integration:** OTP verification via email
- **Comprehensive Academic Management:** Classes, Timetables, Results, Announcements
- **Modern UI/UX:** Tailwind CSS with responsive design
- **State Management:** Redux Toolkit for efficient state handling
- **RESTful API:** Well-structured backend API
- **Database Design:** MongoDB with proper schema relationships

---

## 13. Future Enhancements (Potential)

- Password hashing (bcrypt)
- JWT token-based authentication
- File upload for results/announcements
- Email notifications for results/announcements
- Attendance management
- Grade calculation automation
- Report generation (PDF)
- Mobile responsive optimization
- Real-time notifications
- Search and filter functionality

---

## 14. Project Statistics

- **Backend Files:** ~15+ files
- **Frontend Components:** ~20+ components
- **Database Models:** 7 schemas
- **API Routes:** 4 main route groups
- **User Roles:** 2 (Admin, User)
- **Technologies Used:** 15+ major libraries/frameworks

---

**Report Generated:** Based on codebase analysis  
**Project Type:** Academic Management System  
**Status:** Functional Full-Stack Application

