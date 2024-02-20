function saludo(){
    alert("Hola")
}

function numeracion(x){
    for(i=1;1<x;i++){
        alert(i)
    }
}

function fondo(){
    alert("click");
    parrafos=document.getElementsByTagName("h1");
    parrafos[0].innerHTML="remplazado";
    lista=document.getElementsByClassName("verde");
    lista[0].style="tect-aling:centrer; color:blue";
    document.getElementById("raro").innerHTML="Contenido actual";
}

function noEstilos(){
    nest=document.styleSheets.length;
    for(i=0;i<nest;i++){
        document.styleSheets[i].disabled=true;
    }
}

function activarEstilos(n){
    noEstilos()
    document.styleSheets[n].disabled=false;
}