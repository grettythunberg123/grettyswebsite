window.addEventListener("DOMContentLoaded", function () {
  const currentURL = window.location.href.toLowerCase();
  const path = window.location.pathname.toLowerCase();

  // Match home page URL
  const isHomePage =
    path === "/" ||
    path.endsWith("/index.html") ||
    currentURL.includes("gretawebsite") && (path.endsWith("/") || path.endsWith("index.html"));

  if (isHomePage) {
    // Prevent alert from showing again via back/forward navigation
    const alertShown = sessionStorage.getItem("welcomeAlertShown");

    if (!alertShown) {
      alert("Welcome to Middle-earth!");
      sessionStorage.setItem("welcomeAlertShown", "true");
    }
  }

  // Optional: Mobile nav menu toggle setup
  const getNavi = document.getElementById("navigation");
  if (getNavi) {
    const mobile = document.createElement("span");
    mobile.setAttribute("id", "mobile-navigation");
    getNavi.parentNode.insertBefore(mobile, getNavi);

    mobile.onclick = function () {
      const current = getNavi.style.display;
      if (current === "block") {
        getNavi.removeAttribute("style");
        mobile.style.backgroundImage = "url(images/mobile-menu.png)";
      } else {
        getNavi.style.display = "block";
        mobile.style.backgroundImage = "url(images/mobile-close.png)";
      }
    };
  }
});
