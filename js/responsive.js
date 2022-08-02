function openMenuMobile() {
    var topNav = document.getElementById("topnav");
    if (topNav.className === "topnav") {
        topNav.className += " responsive";
    } else {
        topNav.className = "topnav";
    }
  }