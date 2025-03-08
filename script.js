document.addEventListener('DOMContentLoaded', () => {
    // Collapsible Sections
    const sections = document.querySelectorAll('.section h2');
    sections.forEach(h2 => {
        h2.addEventListener('click', () => {
            const section = h2.parentElement;
            const content = h2.nextElementSibling;
            section.classList.toggle('collapsed');
            
            if (section.classList.contains('collapsed')) {
                content.style.maxHeight = 0;
                content.style.opacity = 0;
            } else {
                content.style.maxHeight = `${content.scrollHeight}px`;
                content.style.opacity = 1;
            }
        });
    });

    // Set initial state (all sections expanded)
    const contents = document.querySelectorAll('.section-content');
    contents.forEach(content => {
        content.style.maxHeight = `${content.scrollHeight}px`;
        content.style.opacity = 1;
    });

    // Sidebar Link Logging
    const links = document.querySelectorAll('.sidebar a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            console.log('Resource link clicked:', link.href);
        });
    });

    // Dark Mode Toggle
    const toggleButton = document.getElementById('dark-mode-toggle');
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });

    // Load Dark Mode Preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // Existing collapsible sections, sidebar link logging, and dark mode code unchanged...

    // Tab switching
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            const tabId = tab.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
});