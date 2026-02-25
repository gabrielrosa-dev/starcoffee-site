function abrirMenu() {
    let menu = document.getElementById("menu");

    if (menu.style.display == "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}

// Slider functionality
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('postsContainer');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    
    if (!container || !prevBtn || !nextBtn) return;
    
    let currentIndex = 0;
    const cardWidth = 320; // 300px + 20px gap
    const totalCards = container.children.length;
    const visibleCards = Math.floor(container.parentElement.offsetWidth / cardWidth) || 1;
    const maxIndex = totalCards - visibleCards;
    
    function updateSlider() {
        const translateX = -currentIndex * cardWidth;
        container.style.transform = `translateX(${translateX}px)`;
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= maxIndex;
    }
    
    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });
    
    nextBtn.addEventListener('click', function() {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateSlider();
        }
    });
    
    // Initial update
    updateSlider();
    
    // Update on window resize
    window.addEventListener('resize', function() {
        const newVisible = Math.floor(container.parentElement.offsetWidth / cardWidth) || 1;
        if (newVisible !== visibleCards) {
            location.reload(); // Simple way to recalculate
        }
    });
});