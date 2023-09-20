// Obtener los elementos del formulario
const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const apellidoInput = document.getElementById('apellido');
const emailInput = document.getElementById('email');
const telefonoInput = document.getElementById('telefono');
const contrasenaInput = document.getElementById('contraseña');
const repiteContrasenaInput = document.getElementById('repitecontraseña');

// Función para validar el formato del correo electrónico
function validarEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Función para validar que la contraseña tenga al menos 6 caracteres
function validarContrasena(contrasena) {
  return contrasena.length >= 6;
}

// Función para validar que las contraseñas coincidan
function validarRepiteContrasena(contrasena, repiteContrasena) {
  return contrasena === repiteContrasena;
}

// Función para validar el formulario al momento de enviarlo
function validarFormulario(event) {
  event.preventDefault(); // Evitar que el formulario se envíe automáticamente

  // Obtener los valores de los campos
  const name = nameInput.value.trim();
  const apellido = apellidoInput.value.trim();
  const email = emailInput.value.trim();
  const telefono = telefonoInput.value.trim();
  const contrasena = contrasenaInput.value.trim();
  const repiteContrasena = repiteContrasenaInput.value.trim();

  // Validar que los campos no estén vacíos
  if (name === '' || apellido === '' || email === '' || telefono === '' || contrasena === '' || repiteContrasena === '') {
    alert('Por favor, complete todos los campos');
    return;
  }

  // Validar el formato del correo electrónico
  if (!validarEmail(email)) {
    alert('Por favor, ingrese un correo electrónico válido');
    return;
  }

  // Validar la longitud de la contraseña
  if (!validarContrasena(contrasena)) {
    alert('La contraseña debe tener al menos 6 caracteres');
    return;
  }

  // Validar que las contraseñas coincidan
  if (!validarRepiteContrasena(contrasena, repiteContrasena)) {
    alert('Las contraseñas no coinciden');
    return;
  }

  // Si todo está correcto, enviar el formulario
  alert('El formulario ha sido enviado correctamente');
  form.reset(); // Limpiar los campos del formulario
}

// Agregar el evento 'submit' al formulario
form.addEventListener('submit', validarFormulario);