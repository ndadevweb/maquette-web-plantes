// NAVIGATION MOBILE
const navigationElement = document.querySelector('nav.nav.mobile');
const burgerButtonElement = document.querySelector('.navigation-button-mobile');

window.addEventListener('resize', event => {
    navigationElement.classList.contains('active')
        ? toggleMobileNavigationActive()
        : null;
});

navigationElement.addEventListener('click', event => {
    event.target.tagName.toLowerCase() === 'a'
        ? toggleMobileNavigationActive()
        : null;
});

burgerButtonElement.addEventListener('click', toggleMobileNavigationActive);

function toggleMobileNavigationActive() {
    document.querySelector('.nav.mobile').classList.toggle('active');
}

// POPIN
const bestItemsElement = document.querySelector('#bests-items');
const allPlantsElement = document.querySelector('#all-plants');
const popin = document.querySelector('#popin');

[bestItemsElement, allPlantsElement].forEach(container => {
    container.addEventListener('click', event => {
        event.preventDefault();

        const buttonCTAClicked = event.target.tagName.toLowerCase() === 'a';

        if(buttonCTAClicked === true) {
            const plantBoxElement = event.target.closest('.plant-box');
            const [title, description] = plantBoxContent(plantBoxElement);
            openPopin(title, description);
        }
    })
});

popin.querySelector('.popin-close').addEventListener('click', closePopin);

function toggleBodyOverflow() {
    document.body.classList.toggle('popin-body-overflow-hide');
}

function plantBoxContent(element) {
    return [
        element.querySelector('.plant-name')?.textContent,
        element.querySelector('.plant-description')?.textContent
    ];
}

function openPopin(title, content) {
    toggleBodyOverflow();

    popin.classList.add('popin-show');
    popin.querySelector('.popin-header > h3').textContent = title;
    popin.querySelector('.popin-details').textContent = content;

}

function closePopin() {
    toggleBodyOverflow();

    popin.classList.remove('popin-show');
}