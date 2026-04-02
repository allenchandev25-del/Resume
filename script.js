document.addEventListener('DOMContentLoaded', () => {

    const wrapper = document.querySelector('.resume-wrapper');
    if (wrapper) {
        wrapper.style.opacity = '0';
        wrapper.style.transition = 'opacity 0.8s ease-in-out';

        setTimeout(() => {
            wrapper.style.opacity = '1';
        }, 100);
    }

    const links = document.querySelectorAll('a');
    links.forEach(link => {
        if (link.hostname !== window.location.hostname && !link.href.startsWith('mailto:')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });


    console.log("%cHello Recruiter!", "color: #007AFF; font-size: 20px; font-weight: bold;");
    console.log("Thanks for checking out my source code. I'm available for new opportunities!");
});
