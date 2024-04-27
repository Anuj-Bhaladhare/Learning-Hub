
const user_login_sing_details = document.querySelector('.navbar-nav-container');
const token = localStorage.getItem("token");
const userName = localStorage.getItem("name");


const userLogout = () => {
    localStorage.clear();
    window.location.reload();
}

if (token && userName) {
    user_login_sing_details.innerHTML = `
        <ul class="navbar-nav">
            <li>
                <img src="./../assest/new-index-image/dark-moon.png" class="img-fluid dark-light-btn mt-2" alt="">
            </li>
            <li class="flex-grow-1">
                <i class="fa fa-user" aria-hidden="true"></i>
                <span>${userName}</span>
            </li>
            <li>
                <button onclick="userLogout()" class="btn nav-button-2 fw-bold text-light" style="background-color: #ff4b66; border-color: #ff4e69">
                    Logout
                </button>
            </li>
        </ul>
    `;
} else {
    user_login_sing_details.innerHTML = `
        <ul class="navbar-nav">
            <li>
                <img src="./../assest/new-index-image/dark-moon.png" class="img-fluid dark-light-btn mt-2" alt="">
            </li>
            <li class="nav-item">
                <a class="nav-link" href="./Pages/login-page.html">
                    <button class="btn nav-button-1 fw-bold text-light" style="background-color: #7b4bff; border-color: #812dff">Login</button>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="./Pages/sign-up.html">
                    <button class="btn nav-button-2 fw-bold text-light" style="background-color: #ff4b66; border-color: #ff4e69">
                        SignUp
                    </button>
                </a>
            </li>
        </ul>
    `;
}


let mode_d_l = true;
const darkLightTheme_new = document.querySelector(".dark-light-mode-box");
const darkLightThemeSecond_new = document.querySelectorAll(".dark-light-mode-box-2");
const darkModebtn_new = document.querySelector(".dark-light-btn");

darkModebtn_new.addEventListener("click", () => {
  if (mode_d_l) {
    darkLightThemeSecond_new.forEach(key => {
      key.classList.add("dark-mode-2");
    });
    mode_d_l = false;
    darkLightTheme_new.classList.add("dark-mode");
    darkModebtn_new.src = "./../assest/new-index-image/light-moon.png";
  } else {
    darkLightThemeSecond_new.forEach(key => {
      key.classList.remove("dark-mode-2");
    });
    mode_d_l = true;
    darkLightTheme_new.classList.remove("dark-mode");
    darkModebtn_new.src = "./../assest/new-index-image/dark-moon.png";
  }
});