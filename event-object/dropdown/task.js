let button = document.querySelector('.dropdown__value');
const list = document.querySelector('.dropdown__list');
const buttonList = document.getElementsByClassName('dropdown__item');

button.addEventListener('click', function() {
    list.classList.add('dropdown__list_active');
});

for (let item of buttonList) {
    item.addEventListener('click', function() {
        event.preventDefault();
        const value = this.querySelector('.dropdown__link').textContent;
        button.textContent = value;
        list.classList.remove('dropdown__list_active');
    });
}
    