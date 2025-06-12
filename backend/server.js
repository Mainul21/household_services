// server.js
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./db");
// const serviceRoutes = require("./routes/serviceRoutes");
const userRoutes = require("./Routes/users.js"); // Adjust the path as necessary
const requestRoutes = require("./Routes/request.js"); // Adjust the path as necessary

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// app.use("/api/services", serviceRoutes);
app.use("/api/users", userRoutes);
app.use("/api/requests", requestRoutes);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
  });
});
