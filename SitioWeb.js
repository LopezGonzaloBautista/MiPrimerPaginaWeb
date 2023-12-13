
alert("Hola este es mi Javascript");


//Creacion de variable//
let contenidoTitulo= "Aventurese a conocer:";
//Seleccionar Elementos://
let titulo= document.querySelector(".titulo h2");
//Modificar elemento//
titulo.innerHTML=contenidoTitulo;
/* let TextoTitulo= titulo.innerHTML;
console.log(TextoTitulo); */
//CONDICIONALES//
let Contactos= "Encuentranos en:"
let elemento= document.querySelector(".contactos p");
if(elemento.innerHTML=="Contactos"){
    elemento.innerHTML=Contactos;
}else{
    console.log("La condicion no se cumplio");
}

//FUNCIONES//
let pais= "Hawai";
let parrafoAtraccion1= document.querySelector(".probando1 p");

//crear Funcion//
function modificarAtraccion(pais){
    let contenido= `Descubre la magia de ${pais}: playas paradisíacas, selvas exuberantes y ciudades llenas de vida. Sumérgete en el encanto de Copacabana, explora el Amazonas, y disfruta del Carnaval y la hospitalidad única de su gente. ¡Vive experiencias inolvidables en un país lleno de ritmo, color y diversidad`;
    return(contenido);
}
//llamar a funcion//
parrafoAtraccion1.innerHTML=modificarAtraccion(pais);

/* Descubre la magia de Brasil: playas paradisíacas, selvas exuberantes y ciudades llenas de vida. Sumérgete en el encanto de Copacabana, explora el Amazonas, y disfruta del Carnaval y la hospitalidad única de su gente. ¡Vive experiencias inolvidables en un país lleno de ritmo, color y diversidad */


/* Menu Responsive */
const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if(navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar Menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir Menú");
    }
});