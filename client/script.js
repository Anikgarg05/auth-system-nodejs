const API_URL = "https://auth-system-nodejs-production-2a4a.up.railway.app";

// SIGNUP FUNCTION
window.signup = async function () {
    console.log("Signup clicked");

    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    try {
        const res = await fetch(`${API_URL}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        const data = await res.text();

        console.log("Response:", data);
        alert(data);

        // clear input after success
        if (data === "Signup successful") {
            document.getElementById("signupEmail").value = "";
            document.getElementById("signupPassword").value = "";
        }

    } catch (err) {
        console.log("ERROR:", err);
    }
};


// LOGIN FUNCTION
window.login = async function () {
    console.log("Login clicked");

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    try {
        const res = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        const data = await res.text();

        console.log("Response:", data);
        alert(data);

    } catch (err) {
        console.log("ERROR:", err);
    }
};
