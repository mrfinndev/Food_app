import "./styles/Header.css";

import Logo from "../assets/🍕.png";

const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg bg-white">
        <div class="container">
          <div>
            <img src={Logo} alt="" />
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse nav_container "
            id="navbarSupportedContent"
          >
            <div class="links_container">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="nav_links">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Restaurants
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Recipes
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Page
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <button>Login</button>
              <button class="auth_button">Sign Up</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
