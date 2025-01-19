document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    burger.addEventListener('click', () => {
        if (sidebar.classList.contains('hidden')) {
            sidebar.classList.remove('hidden');
            setTimeout(() => {
                sidebar.style.transform = 'translateX(0)';
                sidebar.style.opacity = '1';
                sidebar.style.visibility = 'visible';
            }, 10); // Pequeño retraso para activar la animación
        } else {
            sidebar.style.transform = 'translateX(-100%)';
            sidebar.style.opacity = '0';
            sidebar.style.visibility = 'hidden';
            setTimeout(() => {
                sidebar.classList.add('hidden');
            }, 300); // Retraso igual a la duración de la transición
        }
        mainContent.classList.toggle('full-width');
    });
});

