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



