// Define functions globally
function openNavbarModal() {
    console.log('navbar modal opened');
    const navbarModal = document.getElementById('navbar-modal');
    navbarModal.classList.remove('top-[-100vh]');
    navbarModal.classList.add('top-0');
}

function closeNavbarModal() {
    console.log('navbar modal closed');
    const navbarModal = document.getElementById('navbar-modal');
    navbarModal.classList.remove('top-0');
    navbarModal.classList.add('top-[-100vh]');
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded');
    // Get the web projects element and right section image container
    const webProjects = document.getElementById('web-projects');
    const rightSection = document.getElementById('web-projects-image');
    const aboutAgency = document.getElementById('about-agency');

    if (!webProjects) console.error('web-projects element not found!');
    if (!rightSection) console.error('web-projects-image element not found!');
    if (!aboutAgency) console.error('about-agency element not found!');

    let currentTranslateClass = '';

    function updateTranslateY() {
        if (!webProjects || !rightSection) return;

        // Remove previous translate class if it exists
        if (currentTranslateClass) {
            rightSection.classList.remove(currentTranslateClass);
        }

        // Calculate the height and create the new translate class
        const webProjectsHeight = webProjects.offsetHeight;
        currentTranslateClass = `-translate-y-[${webProjectsHeight}px]`;

        if (window.innerWidth > 1024) {

            // Apply the new translate class
            rightSection.classList.add('transition-transform', 'duration-300');
            rightSection.classList.add(currentTranslateClass);
            aboutAgency.classList.add('transition-transform', 'duration-300');
            aboutAgency.classList.add(currentTranslateClass);
        }

    }

    // Initial update
    updateTranslateY();

    // Update on window resize with debounce
    let resizeTimer;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(updateTranslateY, 250);
    });

    // navbar modal - add event listeners
    const navbarModalBtn = document.getElementById('navbar-modal-btn');
    const closeNavbarModalBtn = document.getElementById('close-navbar-modal-btn');

    if (navbarModalBtn) {
        navbarModalBtn.addEventListener('click', openNavbarModal);
    }

    if (closeNavbarModalBtn) {
        closeNavbarModalBtn.addEventListener('click', closeNavbarModal);
    }
});