const menuMobileBtn = document.getElementById('menu-mobile-button-open');
const menuMobileOverlay = document.getElementById("menu-mobile-overlay");
const mobilePage = document.getElementById('media-mobile');

const menuMobileBtnClose = document.getElementById('menu-mobile-button-close')

menuMobileBtn = addEventListener('click', () => {
    mobilePage.style.display = 'none';
    menuMobileOverlay.style.display = 'block';
});

menuMobileBtnClose = addEventListener('click', () => {
   mobilePage.style.display = 'block';
   menuMobileOverlay.style.display = 'none'; 
});