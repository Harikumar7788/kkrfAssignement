function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('show');
}


const video = document.querySelector('.video-content');

    // Play video on hover
    document.querySelector('.intro-video-container').addEventListener('mouseenter', () => {
        video.play();
    });


    document.querySelector('.intro-video-container').addEventListener('mouseleave', () => {
        video.pause();
    });
    video.addEventListener('ended', () => {
        video.currentTime = 0; 
    });

    const videoWrappers = document.querySelectorAll('.video');

videoWrappers.forEach(videoWrapper => {
    const video = videoWrapper.querySelector('.video');

    videoWrapper.addEventListener('mouseenter', () => {
        video.play();
    });

    videoWrapper.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0; // Reset video to start
    });
});


const artVideos = document.querySelectorAll('.art-video');

artVideos.forEach((video) => {
    const container = video.parentElement; 

    container.addEventListener('mouseenter', () => {
        video.play(); 
    });

    container.addEventListener('mouseleave', () => {
        video.pause();
    });

    video.addEventListener('ended', () => {
        video.currentTime = 0; 
    });
});



const images = [
    './Assets/aquafresh.svg',
    './Assets/calem.svg',
    './Assets/cocacola.svg',
    './Assets/macdonalds.svg',
    './Assets/mpc.svg',
    './Assets/navigator.svg',
    './Assets/unilever.svg',
];

let currentIndex = 0;


function updateImages() {
    const imageBoxes = document.querySelectorAll('.image-box img');
    imageBoxes.forEach((img, index) => {
        img.src = images[(currentIndex + index) % images.length];
    });
    currentIndex += 2; 
}

updateImages();


setInterval(updateImages, 5000); 



