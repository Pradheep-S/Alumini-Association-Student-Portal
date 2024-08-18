const body = document.querySelector("body");
const darkLight = document.querySelector("#darkLight");
const sidebar = document.querySelector(".sidebar");
const submenuItems = document.querySelectorAll(".submenu_item");
const sidebarOpen = document.querySelector("#sidebarOpen");
const sidebarClose = document.querySelector(".collapse_sidebar");
const sidebarExpand = document.querySelector(".expand_sidebar");
sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));

sidebarClose.addEventListener("click", () => {
    sidebar.classList.add("close", "hoverable");
});
sidebarExpand.addEventListener("click", () => {
    sidebar.classList.remove("close", "hoverable");
});

sidebar.addEventListener("mouseenter", () => {
    if (sidebar.classList.contains("hoverable")) {
        sidebar.classList.remove("close");
    }
});
sidebar.addEventListener("mouseleave", () => {
    if (sidebar.classList.contains("hoverable")) {
        sidebar.classList.add("close");
    }
});

darkLight.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        document.setI;
        darkLight.classList.replace("bx-sun", "bx-moon");
    } else {
        darkLight.classList.replace("bx-moon", "bx-sun");
    }
});

submenuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        item.classList.toggle("show_submenu");
        submenuItems.forEach((item2, index2) => {
            if (index !== index2) {
                item2.classList.remove("show_submenu");
            }
        });
    });
});

if (window.innerWidth < 768) {
    sidebar.classList.add("close");
} else {
    sidebar.classList.remove("close");
}












class AppNavbar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // HTML content for the navbar
        const template = document.createElement('template');
        template.innerHTML = `
             <nav class="navbar">
        <div class="logo_item">
            <i class="bx bx-menu" id="sidebarOpen"></i>
            <img src="images/logo.png" alt=""></i>Alumni Association
        </div>

        <div class="search_bar">
            <input type="text" placeholder="Search" />
        </div>

        <div class="navbar_content">
            <i class="bi bi-grid"></i>
            <i class='bx bx-sun' id="darkLight"></i>
            <i class='bx bx-bell'></i>
            <img src="images/profile.jpg" alt="" class="profile" />
        </div>
    </nav>



    <!-- sidebar -->
    <nav class="sidebar">
        <div class="menu_content">
            <ul class="menu_items">
                <div class="menu_title menu_dahsboard"></div>
                <!-- duplicate or remove this li tag if you want to add or remove navlink with submenu -->
                <!-- start -->
                <li class="item">
                    <div href="#" class="nav_link submenu_item">
                        <span class="navlink_icon">
                  <i class="bx bx-home-alt"></i>
                </span>
                        <span class="navlink">Donate now</span>
                        <i class="bx bx-chevron-right arrow-left"></i>
                    </div>

                    <ul class="menu_items submenu">
                        <a href="index1.html" class="nav_link sublink">For College</a>
                        <a href="#" class="nav_link sublink">Project Sponsor</a>
                        <a href="#" class="nav_link sublink">Events</a>
                        <a href="#" class="nav_link sublink">Uprading Infrasturcture</a>
                    </ul>
                </li>
                <!-- end -->

                <!-- duplicate this li tag if you want to add or remove  navlink with submenu -->
                <!-- start -->


                <ul class="menu_items">
                    <div class="menu_title menu_editor"></div>
                    <!-- duplicate these li tag if you want to add or remove navlink only -->
                    <!-- Start -->
                    <li class="item">
                        <a href="#" class="nav_link">
                            <span class="navlink_icon">
                  <i class="bx bxs-magic-wand"></i>
                </span>
                            <span class="navlink">Domains</span>
                        </a>
                    </li>
                    <!-- End -->

                    <li class="item">
                        <a href="#" class="nav_link">
                            <span class="navlink_icon">
                  <i class="bx bx-loader-circle"></i>
                </span>
                            <span class="navlink">Locations</span>
                        </a>
                    </li>
                    <li class="item">
                        <a href="#" class="nav_link">
                            <span class="navlink_icon">
                  <i class="bx bx-filter"></i>
                </span>
                            <span class="navlink">Mentorhips</span>
                        </a>
                    </li>
                    <li class="item">
                        <a href="#" class="nav_link">
                            <span class="navlink_icon">
                  <i class="bx bx-cloud-upload"></i>
                </span>
                            <span class="navlink">Collaborations</span>
                        </a>
                    </li>
                </ul>
                <ul class="menu_items">
                    <div class="menu_title menu_setting"></div>
                    <li class="item">
                        <a href="#" class="nav_link">
                            <span class="navlink_icon">
                  <i class="bx bx-flag"></i>
                </span>
                            <span class="navlink">Track Alumni</span>
                        </a>
                    </li>
                    <li class="item">
                        <a href="#" class="nav_link">
                            <span class="navlink_icon">
                  <i class="bx bx-medal"></i>
                </span>
                            <span class="navlink">Success Stories</span>
                        </a>
                    </li>
                    <li class="item">
                        <a href="#" class="nav_link">
                            <span class="navlink_icon">
                  <i class="bx bx-cog"></i>
                </span>
                            <span class="navlink">Announcements</span>
                        </a>
                    </li>
                    <li class="item">
                        <a href="#" class="nav_link">
                            <span class="navlink_icon">
                  <i class="bx bx-layer"></i>
                </span>
                            <span class="navlink">Feedback</span>
                        </a>
                    </li>
                </ul>

                <!-- Sidebar Open / Close -->
                <div class="bottom_content">
                    <div class="bottom expand_sidebar">
                        <span> Expand</span>
                        <i class='bx bx-log-in'></i>
                    </div>
                    <div class="bottom collapse_sidebar">
                        <span> Collapse</span>
                        <i class='bx bx-log-out'></i>
                    </div>
                </div>
        </div>
    </nav>
        `;

        // Attach the template to the shadow DOM
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

// Define the custom element
customElements.define('app-navbar', AppNavbar);