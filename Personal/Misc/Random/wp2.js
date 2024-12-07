function pushSite() {
  const allowedPaths = ["wp-admin", "servant-leadership-self-assessment"];
  if (allowedPaths.includes(window.location.pathname.split("/")[1])) return;
  else window.location.replace("https://theleadershipwise.com");
}

// on dom loaded

document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth < 768) {
        console.log("mobile")
        document.querySelector(".frm_description");
    }
})