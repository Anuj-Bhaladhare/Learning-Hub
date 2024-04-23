// http://localhost:4000/api/v1/signup

const handalCreateUser = async () => {
    event.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (fullName && username && password) {
        const data = {
            fullName: fullName,
            email: username,
            password: password
        };

        fetch('http://localhost:4000/api/v1/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then( (res) => {
            console.log(res);
            window.location.href = 'login-page.html';
        }).catch( (err) => {
            console.log(err)
        })
    }
};