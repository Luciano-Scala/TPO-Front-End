document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener('submit', Validacion); 
  });

function Validacion (A){
    A.preventDefault();
    var Nombre = document.querySelector('#Nombre').value;
    if (Nombre.length == 0) {
        alert("Por favor, escriba su nombre.");
        Nombre.focus();
        return false;
      }

    var Apellido = document.querySelector('#Ape').value;
    if (Apellido.length == 0) {
        alert("Por favor, escriba su apellido.");
        Ape.focus();
        return false;
      }

    var direcciónEmail = document.querySelector('#email').value;
    if (direcciónEmail.length == 0) {
        alert("Por favor, escriba su correo electrónico");
        email.focus();
        return false;
      }
    

    var password = document.querySelector('#pwd').value;
    if (password.length == 0) {
        alert("Por favor, escriba su contraseña");
        pwd.focus();
        return false;
      }
      if(password.length < 8) {
        alert("su contraseña es muy corta")
        pwd.focus();
        return false;
      }

     
    

    var Cpassword = document.querySelector('#cpwd').value;
    if (Cpassword.length == 0 || cpwd.value != pwd.value)  {
        alert("Sus contraseñas deben coincidir");
        cpwd.focus();
        return false;
      }
    



    if(dia)
    var Telefono = document.querySelector('#Tel').value;
    if (Telefono.length < 8 )  {
        alert("Introduzca un numero de telefono válido");
        Tel.focus();
        return false;
      }
    
    


      if(password === "AmoElEspacio") {
        alert("Excelente eleccion de contraseña Mi Rey")
        pwd.focus();
        
      }

   
    alert("Su inscripcion fue enviada con exito");
    return true;
    
  }
  
