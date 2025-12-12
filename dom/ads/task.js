const elements = document.querySelectorAll('.rotator__case');
const length = elements.length;

let index = 0;
function rotate() {
    setInterval(() => {
        const current = elements[index];
        current.classList.remove('rotator__case_active');

        index = (index + 1) % length;

        const next = elements[index];
        next.classList.add('rotator__case_active');
    }, 1000);
}

rotate();