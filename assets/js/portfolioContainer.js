document.addEventListener("DOMContentLoaded", function () {
    const grid = document.querySelector('.portfolio-items');
    const iso = new Isotope(grid, {
        itemSelector: '.portfolio-item',
        layoutMode: 'masonry', // Możesz zmienić na 'masonry', 'vertical', itd.
    });
    const buttons = document.querySelectorAll('.portfolio-filtry button');
    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const filterValue = event.target.getAttribute('data-filter');
            iso.arrange({ filter: filterValue });
        });
    });

});
