const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

const app = express();

// ✅ FIXED CORS (IMPORTANT)
app.use(cors());

app.use(express.json());

// ✅ Routes
app.use("/", authRoutes);

// ✅ Test route
app.get("/", (req, res) => {
    res.send("Server is running...");
});

// ✅ Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
