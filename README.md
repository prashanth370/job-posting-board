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
   
   cd backend
   npm install
   cd ../frontend
   npm install

   MONGODB_URI=mongodb://localhost:27017/jobpostingDB
   JWT_SECRET=your_jwt_secret
   EMAIL_USER=your_email
   EMAIL_PASS=your_email_password

   for backend:
   npm run dev

   for frontend:
   npm start
