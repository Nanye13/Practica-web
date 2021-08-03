function validacion(){
    var nombre = document.getElementById("nombre").value;
    var codigo = document.getElementById("codigo").value;
    var existencia = document.getElementById("existencia").value;
    var precio = document.getElementById("precio").value;

    if(nombre == "" || codigo == "" || existencia == "" || precio ==""){
        alert("Debes llenar los campos");
    }else{
        alert("correcto");
    }
    
}
