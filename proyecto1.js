
function getCookies(){
    var cookieValor = document.cookie.replace(/(?:(?:^|.*;\s*)usuario\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if(cookieValor){
        document.getElementById("botonIngresar").innerHTML = cookieValor;
    }
    console.log(cookieValor);
}
getCookies();

document.getElementById("botonIngresar").onclick = abrirPopUp;

function abrirPopUp(){
    let modal = document.getElementById("modal");
    modal.style.display = "block";
    window.onscroll=function(){
        window.scrollTo(window.scrollX, window.scrollY);
    }
}

document.getElementById("cerrarPopUp1").onclick = cerrarPopUpf;
document.getElementById("cerrarPopUp2").onclick = cerrarPopUpf;
document.getElementById("cerrarPopUp3").onclick = cerrarPopUpf;

function cerrarPopUpf(){
    let modal = document.getElementById("modal");
    modal.style.display = "none";
}

document.getElementById("enviarFormulario").onclick = formularioEnviado;

function formularioEnviado(){
    let textoIngresado = document.getElementById("datoACompletar1");
    let emailIngresado = document.getElementById("datoACompletar2");
    let mensajeIngresado = document.getElementById("mensajeContacto2");

    if(!allLetter(textoIngresado.value)){
        alert("Porfavor ingrese solo letras en el primer campo del formulario");
    }

    if(!emailIngresado.value.includes('.')){
        alert('Ingrese un email correcto, no contiene .');
    }

    if(!emailIngresado.value.includes('@')){
        alert('Ingrese un email correcto, no contiene @');
    }
}

function allLetter(inputtxt){
    var letters = /^[A-Za-z]+$/;
    if(inputtxt.match(letters))
    {
        return true;
    }
    else
    {
        return false;
    }
}

document.getElementById("flechaEmpresa").onclick = EmpresaLogIn;

function EmpresaLogIn(){
    let modal = document.getElementById("modal");
    modal.style.display = "none";
    document.getElementById("botonIngresar").innerHTML = "Empresa";
    document.cookie = "usuario=Empresa";
}

document.getElementById("flechaOrg").onclick = OrgLogIn;

function OrgLogIn(){
    let modal = document.getElementById("modal");
    modal.style.display = "none";
    document.getElementById("botonIngresar").innerHTML = "Organizacion";
    document.cookie = "usuario=Organizacion";
}
