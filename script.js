const timelineItems = document.querySelectorAll('.timeline-item');
const contentDisplay = document.getElementById('content-display');

const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const modeToggle = document.getElementById('mode-toggle');

document.addEventListener('DOMContentLoaded', () => {
    if (document.body.classList.contains('dark-mode')) {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    } else {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    }
});

modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('dark-mode')) {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    } else {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    }
});




const animations = [
    'fadeInUp',
    'fadeInDown',
    'fadeInLeft',
    'fadeInRight'
];


function getRandomAnimation() {
    const randomIndex = Math.floor(Math.random() * animations.length);
    return animations[randomIndex];
}

timelineItems.forEach(item => {
    item.addEventListener('click', () => {
        timelineItems.forEach(el => el.classList.remove('active'));

        item.classList.add('active');

        const content = item.getAttribute('data-content');

        const animation = getRandomAnimation();
        console.log(animation)

        contentDisplay.style.opacity = '0';
        contentDisplay.style.transform = 'translateY(50px)';
        contentDisplay.classList.remove(...animations);

        contentDisplay.classList.add(animation);

        setTimeout(() => {
            contentDisplay.innerHTML = content;

            void contentDisplay.offsetWidth;

            contentDisplay.style.opacity = '1';
            contentDisplay.style.transform = 'translateY(0)';

        }, 500); 
    });
});
