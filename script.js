document.addEventListener('DOMContentLoaded', () => {
    const optionsBtn = document.getElementById('optionsBtn');
    const optionsMenu = document.getElementById('optionsMenu');

    optionsBtn.addEventListener('click', () => {
        optionsMenu.classList.remove('d-none');
        optionsMenu.classList.add('d-block');
    })
})