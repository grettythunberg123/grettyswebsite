window.addEventListener("DOMContentLoaded", function () {
  // ✅ Detect if current page is the homepage
  const isHomePage =
    location.pathname === "/gretawebsite/" ||
    location.pathname === "/gretawebsite/index.html" ||
    location.pathname === "/" ||
    location.pathname.endsWith("/index.html");

  if (isHomePage) {
    alert("“Even the smallest person can change the course of the future.” – Galadriel");
  }

  // Optional: Responsive mobile navigation toggle
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
