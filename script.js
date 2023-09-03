const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});
const wlcm= document.querySelector('.wlcm');

parallax.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    wlcm.style.transform = `translate(-${x * 50}px, -${y * 50}px)`; // Adjust the values for the desired effect
});
