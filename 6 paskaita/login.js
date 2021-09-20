const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");

function loginHandler() {
    const username = usernameInput.value;
    const password = usernameInput.value;

    if (username === 'admin' && password === 'admin') {
        localStorage.setItem('Auth', 'true');
        window.location.href = './index.html';
    } else {
        alert("Wrong credentials");
    }
}

