const db = require("../config/db");
const bcrypt = require("bcrypt");

// SIGNUP
exports.signup = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.send("Please enter email and password");
    }

    // check if user exists
    const checkSql = "SELECT * FROM users WHERE email = ?";

    db.query(checkSql, [email], async (err, result) => {
        if (result.length > 0) {
            return res.send("User already exists");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const insertSql = "INSERT INTO users (email, password) VALUES (?, ?)";

        db.query(insertSql, [email, hashedPassword], (err) => {
            if (err) {
                console.log(err);
                return res.send("Error during signup");
            }

            res.send("Signup successful");
        });
    });
};

// LOGIN
exports.login = (req, res) => {
    const { email, password } = req.body;

    const sql = "SELECT * FROM users WHERE email = ?";

    db.query(sql, [email], async (err, result) => {
        if (err || result.length === 0) {
            return res.send("User not found");
        }

        const user = result[0];

        const match = await bcrypt.compare(password, user.password);

        if (match) {
            res.send("Login successful");
        } else {
            res.send("Invalid password");
        }
    });
};
