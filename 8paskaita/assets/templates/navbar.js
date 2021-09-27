const navbar = document.getElementById('navbar');

if (localStorage.getItem('Auth') && localStorage.getItem('Auth') === 'true') {
    navbar.innerHTML = `
    <div class="container-fluid">
        <a class="navbar-brand" href="./index.html">E-commerce</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="./index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./add.html">Add product</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./products.html">Products</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./cart.html">Cart</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" onclick="logoutHandler()">Logout</a>
                </li>
            </ul>
        </div>
    </div>
    `
} else {
    navbar.innerHTML = `
    <div class="container-fluid">
        <a class="navbar-brand" href="./index.html">E-commerce</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="./index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./cart.html">Cart</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./login.html">Login</a>
                </li>
            </ul>
        </div>
    </div>
    `
}

function logoutHandler() {
    localStorage.removeItem('Auth');
    window.location.href = './login.html';
}