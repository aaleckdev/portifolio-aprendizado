/* 
Evento de clique do menu para fazer com que ele apareça 
ou não
*/
const menu = document.querySelector('.menu-opener');
menu.addEventListener('click', () => {
    const nav = document.querySelector('header nav');
    if (nav.classList.contains('opened')) {
        nav.classList.remove('opened');
    } else {
        nav.classList.add('opened')
    }

    // nav.classList.toggle('opened');
});