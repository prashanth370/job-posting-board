# Job Posting Board

## Description
This is a full-stack job posting board application where users can create accounts, post job listings, and search for jobs.

## Tech Stack
- **Frontend**: Next.js, TailwindCSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Deployment**: Vercel (Frontend), Render (Backend)

## Setup Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- MongoDB installed locally

### Running Locally

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/job-posting-board.git
   cd job-posting-board

2. **Install Dependencies**:
Navigate to the backend and frontend folders, and install dependencies:
    ```bash
    cd backend
    npm install
    cd ../frontend
    npm install

3. **Set Up Environment Variables**:Create a .env file in the backend folder with the following content:
   ```bash
   MONGODB_URI=mongodb://localhost:27017/jobpostingDB
   JWT_SECRET=your_jwt_secret
   EMAIL_USER=your_email
   EMAIL_PASS=your_email_password

   for backend:
   npm run dev

   for frontend:
   npm start


