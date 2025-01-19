import { signIn,signUp } from '../components/auth.js';

document.addEventListener('DOMContentLoaded', () => {
    render();
});

function render() {
    signIn();
    signUp();
}