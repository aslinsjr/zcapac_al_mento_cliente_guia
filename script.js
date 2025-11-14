// Accordion functionality
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const isActive = header.classList.contains('active');

        // Close all accordions
        document.querySelectorAll('.accordion-header').forEach(h => {
            h.classList.remove('active');
            h.nextElementSibling.classList.remove('active');
        });

        // Open clicked accordion if it wasn't active
        if (!isActive) {
            header.classList.add('active');
            content.classList.add('active');
        }
    });
});

// Smooth scroll for menu links
document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Remove active class from all links
        document.querySelectorAll('.menu-link').forEach(l => l.classList.remove('active'));

        // Add active class to clicked link
        link.classList.add('active');

        // Get target section
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // Open accordion in target section
        const accordionHeader = targetSection.querySelector('.accordion-header');
        const accordionContent = targetSection.querySelector('.accordion-content');

        // Close all accordions first
        document.querySelectorAll('.accordion-header').forEach(h => {
            h.classList.remove('active');
            h.nextElementSibling.classList.remove('active');
        });

        // Open target accordion
        accordionHeader.classList.add('active');
        accordionContent.classList.add('active');

        // Scroll to section
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Set first accordion as active on load
window.addEventListener('load', () => {
    const firstAccordion = document.querySelector('.accordion-header');
    const firstContent = document.querySelector('.accordion-content');
    if (firstAccordion && firstContent) {
        firstAccordion.classList.add('active');
        firstContent.classList.add('active');
    }
});