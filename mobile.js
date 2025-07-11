window.addEventListener("load", function () {
  // Show alert only on the home page
  const path = window.location.pathname.toLowerCase();
  const isHomePage =
    path === "/" ||
    path.endsWith("/index.html") ||
    path.includes("/gretawebsite/") && (path.endsWith("/") || path.endsWith("index.html"));

  if (isHomePage) {
    alert("Even the smallest person can change the course of the future. – Galadriel");
  }

  // Optional mobile nav toggle (keep if you're using it)
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
