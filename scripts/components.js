// components.js

// Define the AppNavbar custom element
class AppNavbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar">
                <div class="logo_item">
                    <i class="bx bx-menu" id="sidebarOpen"></i>
                    <img src="images/logo.png" alt=""> Alumni Association
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
        `;
    }
}

// Define the AppSidebar custom element
class AppSidebar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav class="sidebar">
                <div class="menu_content">
                    <ul class="menu_items">
                        <ul class="menu_items submenu">
                            <a href="index1.html" class="nav_link sublink">For College</a>
                            <a href="#" class="nav_link sublink">Project Sponsor</a>
                            <a href="#" class="nav_link sublink">Events</a>
                            <a href="#" class="nav_link sublink">Upgrading Infrastructure</a>
                        </ul>
                        <ul class="menu_items">
                            <li class="item">
                                <a href="domains.html" class="nav_link">
                                    <span class="navlink_icon"><i class="bx bxs-magic-wand"></i></span>
                                    <span class="navlink">Domains</span>
                                </a>
                            </li>
                            <li class="item">
                                <a href="#" class="nav_link">
                                    <span class="navlink_icon"><i class="bx bx-loader-circle"></i></span>
                                    <span class="navlink">Locations</span>
                                </a>
                            </li>
                            <li class="item">
                                <a href="#" class="nav_link">
                                    <span class="navlink_icon"><i class="bx bx-filter"></i></span>
                                    <span class="navlink">Mentorships</span>
                                </a>
                            </li>
                            <li class="item">
                                <a href="#" class="nav_link">
                                    <span class="navlink_icon"><i class="bx bx-cloud-upload"></i></span>
                                    <span class="navlink">Collaborations</span>
                                </a>
                            </li>
                        </ul>
                        <ul class="menu_items">
                            <li class="item">
                                <a href="#" class="nav_link">
                                    <span class="navlink_icon"><i class="bx bx-flag"></i></span>
                                    <span class="navlink">Track Alumni</span>
                                </a>
                            </li>
                            <li class="item">
                                <a href="#" class="nav_link">
                                    <span class="navlink_icon"><i class="bx bx-medal"></i></span>
                                    <span class="navlink">Success Stories</span>
                                </a>
                            </li>
                            <li class="item">
                                <a href="#" class="nav_link">
                                    <span class="navlink_icon"><i class="bx bx-cog"></i></span>
                                    <span class="navlink">Announcements</span>
                                </a>
                            </li>
                            <li class="item">
                                <a href="#" class="nav_link">
                                    <span class="navlink_icon"><i class="bx bx-layer"></i></span>
                                    <span class="navlink">Feedback</span>
                                </a>
                            </li>
                        </ul>
                    </ul>
                    <div class="bottom_content">
                        <div class="bottom expand_sidebar">
                            <span>Expand</span>
                            <i class='bx bx-log-in'></i>
                        </div>
                        <div class="bottom collapse_sidebar">
                            <span>Collapse</span>
                            <i class='bx bx-log-out'></i>
                        </div>
                    </div>
                </div>
            </nav>
        `;
    }
}

// Register the custom elements with hyphenated names
customElements.define('app-navbar', AppNavbar);
customElements.define('app-sidebar', AppSidebar);
