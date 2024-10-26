const btn = document.getElementById('btn-close-banner');
const banner = document.querySelector(".banner");

btn.addEventListener('click', onClose);

function onClose() {
    banner.style.display = 'none'
}