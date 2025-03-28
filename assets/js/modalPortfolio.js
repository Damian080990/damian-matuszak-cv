document.addEventListener('DOMContentLoaded', function () {
    // Pobierz elementy
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modal = document.querySelector('.modal');
    const modalImage = document.querySelector('.modal-image');
    const modalTitle = document.querySelector('.modal-title');
    const modalDescription = document.querySelector('.modal-description');
    const modalButton = document.querySelector('.modal-button');
    const modalClose = document.querySelector('.modal-close');

    // Dane dla każdego portfolio item (możesz rozbudować według potrzeb)
    const portfolioData = [
        {
            image: 'assets/img/portfolio0.jpg',
            category: 'SoundCloud',
            title: 'SoundCloud Audio',
            description: 'This is a detailed description of my SoundCloud audio project. It includes information about the creative process, technologies used, and the final result.',
            demoUrl: '#'
        },
        {
            image: 'assets/img/portfolio1.jpg',
            category: 'Media',
            title: 'Media Project 1',
            description: 'Detailed description of Media Project 1. Explain what this project was about, the challenges faced, and the solutions implemented.',
            demoUrl: '#'
        },
        {
            image: 'assets/img/portfolio2.jpg',
            title: 'Vimeo Video 1',
            category: 'Vimeo Videos',
            description: 'Description of the Vimeo video project. Talk about the concept, production process, and any interesting facts about this video.',
            demoUrl: '#'
        },
        {
            image: 'assets/img/portfolio3.jpg',
            title: 'Media Project 2',
            category: 'Media',
            description: 'Detailed description of Media Project 2. Explain the goals of this project and how they were achieved.',
            demoUrl: '#'
        },
        {
            image: 'assets/img/portfolio4.jpg',
            title: 'Mockup Design',
            category: 'Mockups',
            description: 'Information about this mockup design. Describe the purpose, tools used, and the design process.',
            demoUrl: '#'
        },
        {
            image: 'assets/img/portfolio5.jpg',
            title: 'Youtube Video 1',
            category: 'Youtube Videos',
            description: 'Description of the YouTube video project. Include details about the content, production, and results.',
            demoUrl: '#'
        }
    ];

    // Dodaj event listener do każdego portfolio item
    portfolioItems.forEach((item, index) => {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            // Pobierz dane dla konkretnego itemu
            const data = portfolioData[index];

            // Ustaw zawartość modala
            modalImage.src = data.image;
            modalImage.alt = data.title;
            modalTitle.textContent = data.title;
            modalDescription.textContent = data.description;
            modalButton.href = data.demoUrl;

            // Pokaż modal
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Zablokuj scrollowanie strony
        });
    });

    // Zamknij modal po kliknięciu na overlay
    modalOverlay.addEventListener('click', function (e) {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Zamknij modal po kliknięciu na przycisk zamknięcia
    modalClose.addEventListener('click', closeModal);

    // Zamknij modal po naciśnięciu Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });

    // Funkcja do zamykania modala
    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';

        // Dodatkowe zabezpieczenie - wymuszenie ukrycia po 300ms
        setTimeout(() => {
            modalOverlay.style.display = 'none';
        }, 300);
    }

    // Dodajemy event listener do przycisku "View Demo" aby nie propagował kliknięcia
    modalButton.addEventListener('click', function (e) {
        e.stopPropagation();
    });
});