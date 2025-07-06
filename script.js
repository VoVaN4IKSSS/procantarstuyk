
const toggleBtn = document.getElementById('menu-toggle');
const page = document.getElementById('page');
const hoverSound = document.getElementById('hover-sound');
const links = document.querySelectorAll('nav a');

let soundEnabled = false;

function enableSound() {
    soundEnabled = true;
    document.removeEventListener('click', enableSound);
}
document.addEventListener('click', enableSound);

toggleBtn.addEventListener('click', () => {
    page.classList.toggle('collapsed');
});

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        if (soundEnabled) {
            hoverSound.currentTime = 0;
            hoverSound.play().catch(() => { }); // на всяк випадок не зламає
        }
    });
});
const goose = document.getElementById('goose');
const sound = document.getElementById('gooseSound');

goose.addEventListener('click', () => {
    sound.currentTime = 0;
    sound.play();
});