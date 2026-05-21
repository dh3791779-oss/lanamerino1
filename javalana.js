function navegar(id) {
    document.querySelectorAll('.page-container')
    .forEach(sec => sec.classList.add('hidden'));

    document.getElementById(id).classList.remove('hidden');
    window.scrollTo(0,0);
}

function volver() {
    document.querySelectorAll('.page-container')
    .forEach(sec => sec.classList.add('hidden'));

    document.getElementById('home').classList.remove('hidden');
}