document.getElementById('contactForm').addEventListener('submit', function(event){
    event.preventDefault(); // Prevenir el envío por defecto

    // Obtener los valores del formulario
    const formData = new FormData(this);
    const fullName = formData.get('fullName');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    // Aquí puedes agregar lo que quieras hacer con los datos, por ejemplo, imprimirlos en consola
    console.log(`Nombre: ${fullName}, Email: ${email}, Asunto: ${subject}, Mensaje: ${message}`);

    // Muestra un mensaje de agradecimiento o realiza alguna acción, como enviar los datos a un servidor
    alert('Gracias por contactarnos, te responderemos a la brevedad.');

    // Opcionalmente, limpia el formulario después del envío
    this.reset();
});
