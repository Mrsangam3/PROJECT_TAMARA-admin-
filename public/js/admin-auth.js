document.addEventListener('DOMContentLoaded', () => {
    // 1. Password Visibility Toggle Logic
    const passwordInput = document.getElementById('password');
    const togglePasswordBtn = document.getElementById('togglePassword');

    togglePasswordBtn.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
    });

    // 2. Simple Redirect Logic (Bypassing Backend for UI Testing)
    const loginForm = document.getElementById('adminLoginForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent standard HTML form submission

        // Change button text to show a quick loading state
        const submitBtn = loginForm.querySelector('button[type="submit"]');
        submitBtn.innerHTML = 'Authenticating...';
        
        // Simulate a tiny delay (500ms) to make it feel real, then redirect
        setTimeout(() => {
            window.location.href = '/admin/dashboard';
        }, 500);
    });
});