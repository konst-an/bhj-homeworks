const tabs = document.getElementsByClassName('tab');
const contents = document.getElementsByClassName('tab__content');

for (let i = 0; i < tabs.length; i++) {

    tabs[i].addEventListener('click', function() {

        const activeTab = document.querySelector('.tab.tab_active');
        const activeContent  = document.querySelector('.tab__content.tab__content_active');

        if (activeTab !== this) {
            activeTab.classList.remove('tab_active');
            activeContent.classList.remove('tab__content_active');
        }

        this.classList.add('tab_active');
        contents[i].classList.add('tab__content_active');
    });
}