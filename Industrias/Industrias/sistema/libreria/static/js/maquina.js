const formulario = document.getElementById('formulario');
const mensajes = document.getElementById('mensajes');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const numeroMaquina = document.getElementById('numeroMaquina').value;
  const estado = document.getElementById('estado').value;
  const funcion = document.getElementById('funcion').value;
  const descripcion = document.getElementById('descripcion').value;

  if (numeroMaquina === '' || estado === '' || funcion === '' || descripcion === '') {
    mensajes.textContent = 'Todos los campos son obligatorios.';
    return;
  }

  // Simular envío de datos al servidor (reemplazar con AJAX o fetch)
  console.log('Registro enviado:');
  console.log('Número de Máquina:', numeroMaquina);
  console.log('Estado:', estado);
  console.log('Función:', funcion);
  console.log('Descripción:', descripcion);

  mensajes.textContent = 'Registro guardado correctamente.';

  // Limpiar formulario
  formulario.reset();
});