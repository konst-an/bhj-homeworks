function checkReveal() {
    const element = document.querySelector('.reveal');
    const position = element.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom > 0) {
        element.classList.add('reveal_active');
    }
}

window.addEventListener('scroll', checkReveal);
