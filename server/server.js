const express = require("express");//entry point of backend
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ VERY IMPORTANT (this was missing)
app.use("/", authRoutes);

// ✅ Test route//API
app.get("/", (req, res) => {
    res.send("Server is running...");
});

// ✅ Start server
app.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});
