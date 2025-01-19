export function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (loginForm && registerForm) {
        loginForm.classList.toggle('is-hidden');
        registerForm.classList.toggle('is-hidden');
    }
}

// Hacer accesible la función globalmente
window.toggleForms = toggleForms;
