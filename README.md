# Job Management Admin Interface

A full-stack web application for administrators to create, manage, and filter job postings efficiently.  
Built using **ReactJS**, **Node.js**, **Express.js**, and **MongoDB**.

---

## 🚀 Features

### **Job List Page**
- Displays a paginated list of all job postings.
- Filter jobs by:
  - Job Title (Text Input)
  - Location (Dropdown)
  - Job Type (Dropdown: Full-time, Part-time, Contract, Internship)
  - Salary Range (Range Slider)

### **Job Creation Page**
- Secure admin-only page to create new job postings.
- Uses **React Hook Form** for form handling and validation.
- Fields include:
  - Job Title (Text Input)
  - Company Name (Text Input)
  - Location (Dropdown)
  - Job Type (Dropdown: Full-time, Part-time, Contract, Internship)
  - Salary Range (Text Input)
  - Job Description (Textarea)
  - Requirements (Textarea)
  - Responsibilities (Textarea)
  - Application Deadline (Date Picker)

---

## 🛠 Tech Stack

**Frontend**
- ReactJS
- React Hook Form
- Axios
- Material UI
**Backend**
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS enabled for frontend-backend communication

---
## 📂 Project Structure
job-management/
│
├── backend/
│ ├── server.js # Entry point for backend
│ ├── routes/ # API routes for jobs
│ ├── controllers/ # Job controllers
│ ├── models/ # Mongoose job schema
│ └── config/ # DB connection
│
├── frontend/
│ ├── src/
│ │ ├── components/ # UI components
│ │ ├── pages/ # Job List & Job Creation pages
│ │ ├── services/ # API calls
│ │ └── App.js # Main app entry


---

## ⚙️ Installation & Setup

### **1. Clone the Repository**
git clone [https://github.com/your-username/job-management-admin.git](https://github.com/Kalaisharma/Job-Postings-Platform)


### **2. Backend Setup**
cd joblistingbackend
npm install
Add MongoDB connection URI to .env file
npm run dev

### **3. Frontend Setup**
cd joblistingfrontend
npm install
npm start

 UI Highlights
Clean and responsive interface.

Easy-to-use filters for quick job searches.

Intuitive form with validation for job creation.

Live Demo Link:https://job-postings-platform.netlify.app

