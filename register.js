
    const formRegister = document.querySelector(".form-register");
    const inputDoc = document.querySelector(".form-register input[type='number'][name='userDocumento']");
    const inputUser = document.querySelector(".form-register input[type='text'][name='userName']");
    const inputApellido = document.querySelector(".form-register input[type='text'][name='userApellido']");
    const inputEmail = document.querySelector(".form-register input[type='email']");
    const inputPass = document.querySelector(".form-register input[type='password'][name='userPassword']");
    const inputConfir = document.querySelector(".form-register input[type='password'][name='userPasswordConfirm']");
    const alertaError = document.querySelector(".form-register .alerta-Error");
    const alertaExito = document.querySelector(".form-register .alerta-Exito");

    

    const userApellidoRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    const documentNumberRegex = /^\d{8,12}$/;
    const userNameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/;
    const passwordRegex = /^.{4,12}$/;

    const estadoValidacionCampo = {
        userDocumento : false,
        userName :false,
        userApellido: false, 
        userEmail: false,
        userPassword: false,
    };

    document.addEventListener("DOMContentLoaded", () => {
        formRegister.addEventListener("submit", (e) => {
          e.preventDefault();
          enviarFormulario();
        });
        
    inputDoc.addEventListener("input", () => {
        validarCampo(documentNumberRegex, inputDoc, "El documento debe contener de 8 a 12 digitos")

    });
    inputUser.addEventListener("input", () => {
        validarCampo(userNameRegex, inputUser, "El usuario solo debe contener letras")
    });
    inputApellido.addEventListener("input", () => {
        validarCampo(userApellidoRegex, inputApellido, "El apellido solo debe contener letras")

    });

    inputEmail.addEventListener("input", () => {
        validarCampo(emailRegex, inputEmail,"El correo debe contener numeros y letras")

    });
    
    inputPass.addEventListener("input", () => {
        validarCampo(passwordRegex, inputPass,"La contraseña debe contenedor de 4 a 12 digitos")

    });
    
    function validarCampo(regularExpresion, campo, mensaje) {    
         const validarCampo = regularExpresion.test(campo.value);
        if (validarCampo){
            eliminarAlerta(campo.parentElement.parentElement);
            estadoValidacionCampo[campo.name] = true;
            campo.parentElement.classList.remove("error");
        }else{
            estadoValidacionCampo[campo.name] = false;
            campo.parentElement.classList.add("error");
            mostrarAlerta(campo.parentElement.parentElement, mensaje);
        }
        
    }

    function mostrarAlerta(referencia, mensaje){
        eliminarAlerta(referencia)
        const alertaDiv = document.createElement("div");
        alertaDiv.classList.add("alerta");
        alertaDiv.textContent = mensaje;
        referencia.appendChild(alertaDiv);

    }
    function eliminarAlerta(referencia){
        const alerta = referencia.querySelector(".alerta")
        if (alerta){
            alerta.remove()
        }
    }

    function enviarFormulario() {
        // Implementar validación y enviar formulario
        if (estadoValidacionCampo.userDocumento && estadoValidacionCampo.userName && estadoValidacionCampo.userApellido && estadoValidacionCampo.userEmail && estadoValidacionCampo.userPassword){
            alertaExito.classList.add("alertaExito");
            alertaError.classList.remove("alertaError");
            formRegister.reset();
            alertaExito.classList.add("alertaExito");
            alertaError.classList.remove("alertaError");
            setTimeout(() => {
              alertaExito.classList.remove("alertaExito");
            }, 3000); 
            return;
          }
          
          alertaExito.classList.remove("alertaExito");
          alertaError.classList.add("alertaError");
          setTimeout(() => {
            alertaError.classList.remove("alertaError");
          }, 3000);
        }})