const db = require("../config/db");
const bcrypt = require("bcrypt");

// SIGNUP
exports.signup = (req, res) => {
    console.log("🔥 Signup API hit");

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send("Please enter email and password");
    }

    const checkSql = "SELECT * FROM users WHERE email = ?";

    db.query(checkSql, [email], async (err, result) => {

        // ❌ Handle DB error
        if (err) {
            console.log("DB Error:", err);
            return res.status(500).send("Database error");
        }

        if (result.length > 0) {
            return res.status(400).send("User already exists");
        }

        try {
            const hashedPassword = await bcrypt.hash(password, 10);

            const insertSql = "INSERT INTO users (email, password) VALUES (?, ?)";

            db.query(insertSql, [email, hashedPassword], (err) => {

                if (err) {
                    console.log("Insert Error:", err);
                    return res.status(500).send("Error during signup");
                }

                res.status(200).send("Signup successful");
            });

        } catch (error) {
            console.log("Hash Error:", error);
            res.status(500).send("Server error");
        }
    });
};


// LOGIN
exports.login = (req, res) => {
    console.log("🔥 Login API hit");

    const { email, password } = req.body;

    const sql = "SELECT * FROM users WHERE email = ?";

    db.query(sql, [email], async (err, result) => {

        if (err) {
            console.log("DB Error:", err);
            return res.status(500).send("Database error");
        }

        if (result.length === 0) {
            return res.status(400).send("User not found");
        }

        const user = result[0];

        try {
            const match = await bcrypt.compare(password, user.password);

            if (match) {
                res.status(200).send("Login successful");
            } else {
                res.status(400).send("Invalid password");
            }

        } catch (error) {
            console.log("Compare Error:", error);
            res.status(500).send("Server error");
        }
    });
};
