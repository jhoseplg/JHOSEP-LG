//variables
const carrito = document. getElementById("carrito"),
   ListaCursos = document .getElementById ("lista-cursos"),
   contenedorCarrito = document .querySelector(".buy-card .lista_de_cursos");
   vaciarCarritoBtn = document.querySelector("#vaciar_carrito");
   registrarEventsListeners()
function registrarEventsListeners(){
ListaCursos.addEventListener("click",agregarcurso);

}
function agregarcurso(e){
    if (e.target.classList.contains("agregar-carrito")){
        const cursoSelecionado = e.target.parantElement.parantElement;
        leerInfo(cursoSelecionado)
    }
}
function leerInfo(curso){
    //crear un obejto con el contenido del curso actual
   const infocurso={
    Image:curso.querySelector("img").src,
    titulo:curso.querySelector("h3").textcontent,
     precio:curso.querySelector(".descuento").textcontent,
    Id:curso.querySelector("Button").getAttribute("data-id"),
   cantidad:1
   } 
}
//,muestra del carrito html//




