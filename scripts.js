//definir valor del  ticket
const ticket = 200;

//definicion descuentos
const descEstudiantes = 0.8;
const descTrainee = 0.5;
const descJunior = 0.15;

//tomar elementos
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const correo = document.getElementById('correo');
const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoria');
const totalpagar = document.getElementById('totalAPagar');
const btnResumen = document.getElementById('resumen');
const btnBorrar = document.getElementById('borrar');


console.log(cantidad);

function calcularPago() {

    let total = cantidad.value * ticket;

    //condicion x descuento
    switch (categoria.value) {
        case "estudiante":
            total = total - (total * descEstudiantes);
            break;
        case "trainee":
            total = total - (total * descTrainee);
            break;
        case "junior":
            total = total - (total * descJunior);
            break;
    }

    totalpagar.textContent = `TOTAL A PAGAR ${total}.`

}
btnResumen.addEventListener('click', (e) => {
    e.preventDefault();
    calcularPago();

});
btnBorrar.addEventListener('click', (f) => {
    f.preventDefault();
    borrarValoresCargados()

}
);
// Restablecer los valores  del formulario a su estado inicial
function borrarValoresCargados() {
    nombre.value = '';
    apellido.value = '';
    correo.value = '';
    cantidad.value = ''; // Vaciar el campo de cantidad
    categoria.value = '';
    totalpagar.textContent = 'TOTAL A PAGAR 0.';


}




