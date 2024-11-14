document.addEventListener("DOMContentLoaded", function () {
  const pages = document.querySelectorAll(".page");
  const paginationLinks = document.querySelectorAll(".page-link");
  let currentPage = 1;

  // Function to show the selected page and hide other pages
  function showPage(pageNumber) {
    pages.forEach((page) => {
      page.style.display =
        page.getAttribute("data-page") == pageNumber ? "flex" : "none";
    });
  }

  // Add event listeners to pagination links
  paginationLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const page = link.getAttribute("data-page");

      if (page === "prev" && currentPage > 1) {
        currentPage--;
      } else if (page === "next" && currentPage < pages.length) {
        currentPage++;
      } else if (!isNaN(page)) {
        currentPage = parseInt(page);
      }

      showPage(currentPage);

      // Update active link styling
      paginationLinks.forEach((lnk) => lnk.classList.remove("active"));
      document
        .querySelector(`.page-link[data-page="${currentPage}"]`)
        .classList.add("active");
    });
  });

  // Initialize to show the first page
  showPage(currentPage);
});
