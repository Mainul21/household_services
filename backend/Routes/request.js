// routes/requests.js
const express = require("express");
const router = express.Router();
const { getDB } = require("../db");

// POST /api/requests - Save a new service request
router.post("/", async (req, res) => {
  try {
    const db = getDB();
    const requestsCollection = db.collection("serviceRequests");

    // Add default status = "pending"
    const newRequest = {
      ...req.body,
      status: "pending", // default status
      createdAt: new Date(), // optional timestamp
    };

    const result = await requestsCollection.insertOne(newRequest);

    res.status(201).json({
      success: true,
      message: "Service request submitted successfully",
      insertedId: result.insertedId,
    });
  } catch (error) {
    console.error("Error saving service request:", error);
    res.status(500).json({ success: false, error: "Failed to submit service request" });
  }
});

router.get("/", async (req, res) => {
  try {
    const db = getDB();
    const requestsCollection = db.collection("serviceRequests");

    const requests = await requestsCollection.find({}).toArray();

    res.status(200).json({
      success: true,
      requests,
    });
  } catch (error) {
    console.error("Error fetching service requests:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch service requests",
    });
  }
});

// GET /api/requests/:email
router.get("/:email", async (req, res) => {
  try {
    const db = getDB();
    const requestsCollection = db.collection("serviceRequests");

    const userEmail = req.params.email;
    const requests = await requestsCollection.find({ email: userEmail }).toArray();

    res.status(200).json({
      success: true,
      requests,
    });
  } catch (error) {
    console.error("Error fetching customer requests:", error);
    res.status(500).json({ success: false, error: "Failed to fetch requests" });
  }
});


module.exports = router;
