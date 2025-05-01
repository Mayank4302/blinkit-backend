🛒 Blinkit-Backend-Project
The Blinkit Backend Application is a full-featured Node.js and Express.js server designed to replicate the core functionalities of an online grocery delivery platform like Blinkit. It supports Google OAuth login, secure payments via Razorpay, and real-time session handling, with robust backend components built for scalability and production-level deployment.
Blinkit Backend Project is a fully functional backend system developed for an online grocery delivery platform, inspired by the real-world Blinkit application. It is built using Node.js, Express, and MongoDB, and integrates features such as user authentication (Google OAuth), product management, cart operations, secure payment processing via Razorpay, and session management.

This project is designed to simulate an admin-managed e-commerce backend system, enabling CRUD operations for products, secure login/signup, real-time payment gateway integration, and scalable database management using Mongoose.

🚀 Key Features
🔐 User Authentication using Google OAuth (via Passport.js)

📦 Product & Category Management with Mongoose + MongoDB

💳 Secure Payments via Razorpay Gateway Integration

🖼️ Image Upload Support using Multer (for product images)

🛡️ JWT-Based Session Handling for user session management

✅ Robust Form Validation using Joi

🌐 Easily integrable with any frontend (React, HTML/CSS, etc.)

🔐 Admin Login Info
This platform is managed by a single admin (Blinkit Owner). Hence, admin registration is disabled.

Admin Login URL: http://localhost:3000/admin/login

Email: admin@blink.com

Password: admin

📌 Note: Admin credentials are hardcoded for demonstration and testing purposes only.

⚙️ Environment Variables Setup
Before running the application, create a .env file in the root directory with the following variables:

env
Copy
Edit
PORT=3000
MONGODB_URI=your_mongodb_uri
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
SESSION_SECRET=your_session_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
🛠️ Getting Started

🔧 Tech Stack & Dependencies
Node.js

Express.js

MongoDB + Mongoose

Passport.js (Google OAuth2.0)

Razorpay API

JWT Authentication

Session and Cookie Management

Multer (File uploads)

EJS (for views, if applicable)

✅ Step 1: Clone the Repository
bash
Copy
Edit
git clone https://github.com/Shashank6903/Blinkit-Backend-Project.git
cd Blinkit-Backend-Project

✅ Step 2: Install Dependencies
bash
Copy
Edit
npm install
Installs all dependencies: express, mongoose, passport, razorpay, etc.

✅ Step 3: Add Environment Variables
Create a .env file as described.
env
Copy
Edit
PORT=3000
MONGODB_URI=your_mongodb_uri
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
SESSION_SECRET=your_session_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret


✅ Step 4: Start MongoDB Server
If using local MongoDB, run:

bash
Copy
Edit
mongod
If using MongoDB Atlas, ensure your MONGODB_URI is correct.

✅ Step 5: Start the Application
bash
Copy
Edit
npm start
Application will run on: http://localhost:3000

✅ Step 6: Test the Endpoints
Login via Google:
Visit → http://localhost:3000/auth/google

Admin login:
Visit → http://localhost:3000/admin/login

![image2](https://github.com/user-attachments/assets/3097cd44-0ba7-47c0-9adb-891369e5c170)

![image3](https://github.com/user-attachments/assets/ce1fd267-770e-411a-9778-6597c590a3d4)

![image4](https://github.com/user-attachments/assets/3375ad12-e3bc-4f68-955c-d1ce2ef31004)
![Screenshot 2025-04-30 233513](https://github.com/user-attachments/assets/0a001de7-f10f-409b-a3a4-4d2ad4fa543a)

![Screenshot 2025-04-30 233454](https://github.com/user-attachments/assets/fa2724cc-ae23-44cd-a8a1-71252fc01398)
![Screenshot 2025-04-30 233354](https://github.com/user-attachments/assets/0d00c65e-f0e6-4c4b-ac23-7360b4cdc4d7)
