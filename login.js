
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el comportamiento por defecto del formulario

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Verificación del usuario y contraseña
    if (username === 'admin' && password === '1234') {
        // Almacenar el nombre del usuario en localStorage
        localStorage.setItem('usuario', username);
        window.location.href = 'cartas.html';
    } else {
        // Mostrar el mensaje de error si las credenciales son incorrectas
        errorMessage.textContent = 'Usuario o clave incorrectos';
        errorMessage.style.display= 'block';
    }

    document.getElementById('username').value='';
    document.getElementById('password').value='';

});

