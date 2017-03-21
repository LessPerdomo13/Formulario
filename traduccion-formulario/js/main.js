var email = document.getElementById("inputEmail");
var password = document.getElementById("inputPassword");

function translate(){
  var title = document.getElementById("form-signin-heading");
  var remember = document.getElementsByTagName("span")[0];
  var button = document.getElementsByClassName("btn")[0];

  title.innerHTML = "Por favor inicia sesion";
  email.placeholder = "Correo Electronico";
  password.placeholder = "Contraseña";
  remember.innerHTML = "Recordar Datos";
  button.innerHTML = "Iniciar sesion";
  }

  translate();

function mostrarDatos(){
    var datos = document.getElementById("Datos");
    var resultado = document.getElementById("resultado");

    datos.innerHTML = "Datos formulario";
    resultado.innerHTML = "El correo indicado es: <br>"+ email.value + "<br>" + "la clave ingresada es: <br>" + password.value;
}
