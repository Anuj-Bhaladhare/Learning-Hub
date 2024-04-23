
const userLogin = async () => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        const data = {
            email: username, // Make sure the API expects 'email' not 'username'
            password: password
        };

        fetch('http://localhost:4000/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json()) // Parse JSON from the response
        .then(data => {
            if (data) {
                localStorage.setItem('name', data?.userDetails?.fullName);
                localStorage.setItem('token', data?.token);
                window.location.href = 'dashBoard.html';
            } else {
                console.error('Token not received:', data);
            }
        })
        .catch(error => {
            console.error('Login Error:', error);
        });
    } else {
        console.log("Username or password is missing.");
    }
};
