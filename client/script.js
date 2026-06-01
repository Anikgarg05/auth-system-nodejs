// SIGNUP FUNCTION
window.signup = function () {
    console.log("Signup clicked");

    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    console.log("Data:", email, password);

    fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })
    .then(res => {
        console.log("Fetch executed");
        return res.text();
    })
    .then(data => {
        console.log("Response:", data);
        alert(data);   // shows Signup successful
    })  
    .catch(err => {
        console.log("ERROR:", err);
    });
};


// LOGIN FUNCTION
window.login = function () {
    console.log("Login clicked");

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    console.log("Data:", email, password);

    fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })
    .then(res => {
        console.log("Fetch executed");
        return res.text();
    })
    .then(data => {
        console.log("Response:", data);
        alert(data);   // shows Login result
    })
    .catch(err => {
        console.log("ERROR:", err);
    });
};
