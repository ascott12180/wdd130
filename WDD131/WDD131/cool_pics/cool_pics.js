const gallery = document.querySelector('.pics');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close');
const menu = document.querySelector('.menu')
const nav = document.querySelector('nav')


gallery.addEventListener('click', openModal);

function openModal(e) {
    console.log(e.target);

    const img = e.target;
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt')
    const full = src.replace('sm', 'full');

    modalImage.src = full;
    modalImage.alt = alt;

    modal.showModal();

    
}

closeButton.addEventListener('click', () => {
    modal.close();
});


modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

menu.addEventListener('click', toggleMenu);

function toggleMenu() {
   
    nav.classList.toggle('show')
}