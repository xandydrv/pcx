document.querySelector('.left-button').addEventListener('click', function () {
    moveSlide('prev');
});

document.querySelector('.right-button').addEventListener('click', function () {
    moveSlide('next');
});

function moveSlide(direction) {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const currentSlide = track.querySelector('.current-slide');
    let newIndex;

    if (direction === 'next') {
        newIndex = slides.indexOf(currentSlide) + 1;
        if (newIndex >= slides.length) newIndex = 0; // Se for o último slide, volta para o primeiro
    } else {
        newIndex = slides.indexOf(currentSlide) - 1;
        if (newIndex < 0) newIndex = slides.length - 1; // Se for o primeiro slide, vai para o último
    }

    const newSlide = slides[newIndex];
    const amountToMove = newSlide.offsetLeft;

    track.style.transform = `translateX(-${amountToMove}px)`;

    currentSlide.classList.remove('current-slide');
    newSlide.classList.add('current-slide');
}










document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    // Mudar o texto do botão
    if (document.body.classList.contains('dark-mode')) {
        this.textContent = 'Modo Claro';
    } else {
        this.textContent = 'Modo Escuro';
    }
});





// Mostrar ou esconder o botão
window.onscroll = function () {
    const button = document.getElementById('back-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = 'flex'; // Exibe como flexbox para centralizar conteúdo
    } else {
        button.style.display = 'none'; // Oculta o botão
    }
};

// Rolagem suave para o topo
document.getElementById('back-to-top').onclick = function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
};





