let menu = document.querySelector('nav');
let bar = document.querySelector('#bar');

bar.onclick = () => {
    menu.classList.toggle('menu');
    bar.classList.toggle('fa-x');
}

window.onscroll = function () {
    menu.classList.remove('menu');
    bar.classList.remove('fa-x');
}
