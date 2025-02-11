Here's a **repository description** for your **Chill Spots API** project:

---

### **Chill Spots API**
A RESTful API built with **Express.js** and **MySQL** for managing favorite chill spots in Kenya. It includes **authentication, authorization, rate limiting, and Swagger documentation**.

#### **Features**
- 🔐 **JWT Authentication & Authorization**
- 📌 **CRUD operations for chill spots**
- 📊 **Rate Limiting** (Prevents excessive API calls)
- 📜 **Swagger API Documentation**
- 🛠️ **Secure Password Hashing with bcrypt.js**
- 📡 **MySQL Database Integration**

#### **Tech Stack**
- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **Security:** JWT, bcrypt.js
- **Docs:** Swagger (OpenAPI 3.0)
- **Middleware:** Express-rate-limit

#### **API Endpoints**
| Method | Endpoint        | Description                     |
|--------|----------------|---------------------------------|
| POST   | /register      | Register a new user            |
| POST   | /login         | Authenticate user & get JWT    |
| GET    | /chill-spots   | Fetch all chill spots (auth)   |
| POST   | /chill-spots   | Add a new chill spot (auth)    |

#### **Setup & Installation**
1. Clone the repository:  
   ```sh
   git clone https://github.com/your-username/chill-spots-api.git
   cd chill-spots-api
   ```
2. Install dependencies:  
   ```sh
   npm install
   ```
3. Configure environment variables:  
   ```sh
   cp .env.example .env
   ```
   Fill in the `.env` file with your **database credentials** and **JWT secret**.

4. Set up the database:  
   ```sh
   mysql -u your_user -p < db/schema.sql
   mysql -u your_user -p < db/seed.sql
   ```

5. Start the server:  
   ```sh
   npm start
   ```
   The API runs on `http://localhost:3000`.

#### **Swagger API Docs**
Access the **API Documentation** at:  
[http://localhost:3000/api-docs](http://localhost:3000/api-docs)

---

Let me know if you need any tweaks! 🚀
