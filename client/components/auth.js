export function signIn() {
    const signInForm = `
        <div class="column is-half" id="login-form">
            <div class="box">
                <h2 class="title has-text-centered">Iniciar Sesión</h2>
                <form>
                    <div class="field">
                        <label class="label" for="login-email">Correo Electrónico</label>
                        <div class="control has-icons-left">
                            <input type="email" id="login-email" class="input" placeholder="Ingresa tu correo" required>
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label" for="login-password">Contraseña</label>
                        <div class="control has-icons-left">
                            <input type="password" id="login-password" class="input" placeholder="Ingresa tu contraseña" required>
                            <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                            </span>
                        </div>
                    </div>
                    <div class="field">
                        <button type="submit" class="button is-primary is-fullwidth">Iniciar Sesión</button>
                    </div>
                    <p class="has-text-centered">
                        ¿No tienes cuenta? <a href="#register-form" id="toggle-to-register">Regístrarse</a>
                    </p>
                </form>
            </div>
        </div>
    `;
    const container = document.querySelector('.container');
    if (container) {
        container.insertAdjacentHTML('beforeend', signInForm);

        // Asocia el evento al enlace
        const toggleLink = document.getElementById('toggle-to-register');
        if (toggleLink) {
            toggleLink.addEventListener('click', (event) => {
                event.preventDefault();
                toggleForms();
            });
        }
    }
}

export function signUp() {
    const signUpForm = `
        <div class="column is-half is-hidden" id="register-form">
            <div class="box">
                <h2 class="title has-text-centered">Registrarse</h2>
                <form>
                    <div class="field">
                        <label class="label" for="register-name">Nombre</label>
                        <div class="control has-icons-left">
                            <input type="text" id="register-name" class="input" placeholder="Ingresa tu nombre" required>
                            <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                            </span>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label" for="register-email">Correo Electrónico</label>
                        <div class="control has-icons-left">
                            <input type="email" id="register-email" class="input" placeholder="Ingresa tu correo" required>
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label" for="register-password">Contraseña</label>
                        <div class="control has-icons-left">
                            <input type="password" id="register-password" class="input" placeholder="Crea una contraseña" required>
                            <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                            </span>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label" for="register-password-confirm">Confirmar Contraseña</label>
                        <div class="control has-icons-left">
                            <input type="password" id="register-password-confirm" class="input" placeholder="Confirma tu contraseña" required>
                            <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                            </span>
                        </div>
                    </div>
                    <div class="field">
                        <button type="submit" class="button is-primary is-fullwidth">Registrarse</button>
                    </div>
                    <p class="has-text-centered">
                        ¿Ya tienes cuenta? <a href="#login-form" id="toggle-to-login">Inicia Sesión</a>
                    </p>
                </form>
            </div>
        </div>
    `;
    const container = document.querySelector('.container');
    if (container) {
        container.insertAdjacentHTML('beforeend', signUpForm);

        // Asocia el evento al enlace
        const toggleLink = document.getElementById('toggle-to-login');
        if (toggleLink) {
            toggleLink.addEventListener('click', (event) => {
                event.preventDefault();
                toggleForms();
            });
        }
    }
}
