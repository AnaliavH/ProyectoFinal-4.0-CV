
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");
const form = document.getElementById("contacto-form");

const mensajeEnvio=document.getElementById("mensajeEnvio");

const expRegNombre= /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s[a-zA-ZÀ-ÿ\u00f1\u00d1]+)*\s[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
const expRegEmail=/^[a-zA-A0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/;

function validarCampos() {
  let error=false;
  let exito= false;
  let mensajeError="";
  mensajeEnvio.innerHTML="";
  // Validación Nombre
  if (nombre.value === "" ||
    /^\s+$/.test(nombre.value) ||
    !expRegNombre.test(nombre.value)) {
           mensajeError+='Nombre no válido (ingrese nombre y apellido).<br>';
           error=true;
  }
  // Validación Email
  if (email.value === "" || 
    /^\s+$/.test(email.value) || 
    !expRegEmail.test(email.value)){
           mensajeError+='Email no válido.<br>';
           error=true;
  }
  // Validación Mensaje
  if (mensaje.value === "" ||
    /^\s+$/.test(mensaje.value) ||
    mensaje.value.length == 0 ){
           mensajeError+='Por favor ingrese un mensaje.<br>';
           error=true;
  }
   // Muestro mensaje de error/éxito
  if (error){
    mensajeEnvio.innerHTML=mensajeError;
  } else{
    mensajeEnvio.innerHTML='El mensaje se envió correctamente.';
    exito=true
  }
  if (exito){
    nombre.value="";
    email.value="";
    mensaje.value="";
  }
    
}
  
form.addEventListener("submit", (e) => {
  e.preventDefault(); //para que no se envíe por defaul
  validarCampos();  
});

