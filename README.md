Customer Management App (MEAN Stack)
This is a Full-Stack Customer Management Application built using the MEAN stack (MongoDB, Express.js, Angular, and Node.js). The app allows users to Create, Read, Update, and Delete (CRUD) customer records efficiently.

🚀 Tech Stack
Frontend: Angular
Backend: Node.js, Express.js
Database: MongoDB
Styling: Angular Material
Deployment: (You can mention once you deploy it)
📌 Features
✅ Add new customers
✅ View a list of customers
✅ Edit customer details
✅ Delete customers
✅ Responsive UI with Angular Material

🛠 Installation & Setup
Follow the steps below to run this project locally.

1️⃣ Clone the Repository
sh
Copy
Edit
git clone https://github.com/dhrupmaurya/Customer-App.git
cd Customer-App
2️⃣ Install Backend Dependencies
Navigate to the backend folder and install dependencies:

sh
Copy
Edit
cd backend
npm install
3️⃣ Set Up MongoDB
Ensure MongoDB is running on your system. You can use:

sh
Copy
Edit
mongod
or use MongoDB Atlas and update the database URL in .env or config.js.

4️⃣ Start the Backend Server
sh
Copy
Edit
npm start
By default, the backend runs on http://localhost:3000.

5️⃣ Install Frontend Dependencies
Navigate to the frontend folder and install dependencies:

sh
Copy
Edit
cd ../frontend
npm install
6️⃣ Start the Angular Application
sh
Copy
Edit
npm start
The frontend will be available at http://localhost:4200.

📂 Project Structure
bash
Copy
Edit
Customer-App/
│── backend/             # Node.js & Express Backend
│── frontend/            # Angular Frontend
│── models/              # MongoDB Schema Models
│── routes/              # API Routes
│── services/            # Angular Services
│── README.md            # Project Documentation
🛠 API Endpoints
HTTP Method	Endpoint	Description
GET	/api/customers	Fetch all customers
GET	/api/customers/:id	Get a specific customer
POST	/api/customers	Add a new customer
PUT	/api/customers/:id	Update customer details
DELETE	/api/customers/:id	Delete a customer
