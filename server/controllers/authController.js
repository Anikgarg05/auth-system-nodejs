    const db = require("../config/db");//core logic
    const bcrypt = require("bcrypt");

    // SIGNUP
    exports.signup = async (req, res) => {
        console.log("Signup API hit");

        const { email, password } = req.body;

        if (!email || !password) {
            return res.send("Please enter email and password");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const sql = "INSERT INTO users (email, password) VALUES (?, ?)";

        db.query(sql, [email, hashedPassword], (err) => {
            if (err) {
                console.log(err);
                return res.status(400).send("User already exists");
            }
            res.send("Signup successful");
        });
    };

    // LOGIN
    exports.login = (req, res) => {
        const { email, password } = req.body;

        const sql = "SELECT * FROM users WHERE email = ?";

        db.query(sql, [email], async (err, result) => {
            if (err || result.length === 0) {
                return res.status(400).send("User not found");
            }

            const user = result[0];

            const match = await bcrypt.compare(password, user.password);

            if (match) {
                res.send("Login successful");
            } else {
                res.status(400).send("Invalid password");
            }
        });
    };