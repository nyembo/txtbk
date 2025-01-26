document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".content");
    const items = Array.from(container.children);
    const pageHeight = 800; // Adjust based on your design
    let currentPage, currentHeight = 0, pageNumber = 1;

    function createPage() {
        currentPage = document.createElement("div");
        currentPage.classList.add("page");
        currentPage.innerHTML = `<div class="page-number">Page ${pageNumber}</div>`;
        container.appendChild(currentPage);
        currentHeight = 0;
        pageNumber++;
    }

    createPage();

    items.forEach((item) => {
        container.removeChild(item);
        currentPage.appendChild(item);
        currentHeight += item.offsetHeight;

        if (currentHeight > pageHeight) {
            currentPage.removeChild(item);
            createPage();
            currentPage.appendChild(item);
            currentHeight = item.offsetHeight;
        }
    });
});
