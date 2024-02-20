function saludo(){
    alert("Hola JS");
}

function numeracion(tope){
    for (i=0; i<5; i++){
        alert(i);
    }
}
function fond(){
    alert("click");
    parrafos=document.getElementsByTagName("p");
    parrafos[0].innerHTML="reemplazado";
    parrafos[0].style="color:red";
    lista=document.getElementsByClassName("verde");
    lista(0).style="text-align:center color:blue";
    document.getElementById("raro".innerHTML="contenido actual");
}
function noEstilos(){
    nest=document.styleSheets.length;
    for(i=0;i<nest;i++){
        document.styleSheets[i].disabled=true;
    }
}
function activaEstilos(n){
    noEstilos();
    document.styleSheets[n].disabled=false;
}