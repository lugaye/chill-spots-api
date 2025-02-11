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


### **Repository Structure**
```
chill-spots-api/
│-- .env.example
│-- package.json
│-- server.js
│-- swagger.json
│-- db/
│   │-- schema.sql
│   │-- seed.sql
│-- routes/
│   │-- auth.js
│   │-- chillSpots.js
│-- middleware/
│   │-- authMiddleware.js
│   │-- rateLimit.js
│-- README.md
```

---

### **Descriptions of Files**
1. **`.env.example`** – Environment variables example file. Users should copy this to `.env` and fill in their credentials.
2. **`package.json`** – Contains project dependencies and scripts.
3. **`server.js`** – The main entry point for the Express server.
4. **`swagger.json`** – OpenAPI documentation for the API.
5. **`db/schema.sql`** – SQL script for setting up the database schema.
6. **`db/seed.sql`** – Sample data for Kenyan chill spots.
7. **`routes/auth.js`** – Handles authentication (registration & login).
8. **`routes/chillSpots.js`** – Handles chill spot-related operations.
9. **`middleware/authMiddleware.js`** – Middleware for JWT authentication.
10. **`middleware/rateLimit.js`** – Middleware for rate limiting.
11. **`README.md`** – Documentation on how to set up and run the API.

---

## API Documentation
Swagger docs available at: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## License
MIT License
```
