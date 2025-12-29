function showPage(id) {
  const pages = document.querySelectorAll(".page");
  pages.forEach(page => {
    page.style.display = "none";
  });

  const activePage = document.getElementById(id);
  if (activePage) {
    activePage.style.display = "block";
  }
}

/* page load pe home open ho */
window.onload = function () {
  showPage("home");
};
