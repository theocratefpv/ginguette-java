document.addEventListener('DOMContentLoaded', () => {
    const sliderFigure = document.querySelector('.slider figure');
    const sliderImages = document.querySelectorAll('.slider img');
    const imageCount = sliderImages.length;
    let currentImage = 0;
    
    // Fonction pour mettre à jour la position du slider
    function updateSlider() {
        sliderFigure.style.transform = `translateX(-${currentImage * (100 / imageCount)}%)`;
    }
    
    // Fonction pour passer à l'image suivante
    function nextImage() {
        currentImage = (currentImage + 1) % imageCount;
        updateSlider();
    }
    
    // Fonction pour passer à l'image précédente
    function prevImage() {
        currentImage = (currentImage - 1 + imageCount) % imageCount;
        updateSlider();
    }
    
    // Ajout des boutons de navigation
    const slider = document.querySelector('.slider');
    
    const prevBtn = document.createElement('button');
    prevBtn.classList.add('slider-btn', 'prev-btn');
    prevBtn.innerHTML = '&lt;';
    prevBtn.addEventListener('click', prevImage);
    
    const nextBtn = document.createElement('button');
    nextBtn.classList.add('slider-btn', 'next-btn');
    nextBtn.innerHTML = '&gt;';
    nextBtn.addEventListener('click', nextImage);
    
    slider.appendChild(prevBtn);
    slider.appendChild(nextBtn);
    
    // Défilement automatique toutes les 5 secondes
    setInterval(nextImage, 5000);
    
    // Gestion du swipe mobile (déplacée à l'intérieur de la portée principale)
    let touchStartX = 0;
    slider.addEventListener('touchstart', e => {
        touchStartX = e.touches[0].clientX;
    });
    
    slider.addEventListener('touchend', e => {
        const touchEndX = e.changedTouches[0].clientX;
        const diffX = touchStartX - touchEndX;
        
        if (Math.abs(diffX) > 50) {
            if (diffX > 0) {
                nextImage();
            } else {
                prevImage();
            }
        }
    });
});
