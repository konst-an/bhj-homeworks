const elements = document.querySelectorAll('.font-size');
const book = document.getElementById('book');

elements.forEach(element => {
    element.addEventListener('click', function(event) {
        event.preventDefault();
        const activeElement = document.querySelector('.font-size_active');   
        if (activeElement !== this) {
            activeElement.classList.remove('font-size_active'); 
        }

        this.classList.add('font-size_active');
        book.classList.remove('book_fs-small', 'book_fs-big');

        const size = this.dataset.size;
        if (size === 'small') {
            book.classList.add('book_fs-small');
        } else if (size === 'big') {
            book.classList.add('book_fs-big');
        }
    });
});

const textsColors = document.querySelectorAll('.book__control_color .color');
textsColors.forEach(textColor => {
    textColor.addEventListener('click', function(event) {
        event.preventDefault();

        const activeColor = document.querySelector('.book__control_color .color_active');
        if (activeColor !== this) {
            activeColor.classList.remove('color_active'); 
        }

        this.classList.add('color_active'); 
        book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');

        const color = this.dataset.textColor;

        if (color === 'black') {
            book.classList.add('book_color-black');
        } else if (color === 'gray') {
            book.classList.add('book_color-gray');
        } else if (color === 'whitesmoke') {
            book.classList.add('book_color-whitesmoke');
        }
    });
});

const backgroundColors = document.querySelectorAll('.book__control_background .color');
backgroundColors.forEach(backgroundColor => {
    backgroundColor.addEventListener('click', function(event) {
        event.preventDefault();

        const activeColor = document.querySelector('.book__control_background .color_active');
        if (activeColor !== this) {
            activeColor.classList.remove('color_active'); 
        }

        this.classList.add('color_active');
        book.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');

        const color = this.dataset.bgColor;
        if (color === 'black') {
            book.classList.add('book_bg-black');
        } else if (color === 'gray') {
            book.classList.add('book_bg-gray');
        } else if (color === 'white') {
            book.classList.add('book_bg-white');
        }
    });
});