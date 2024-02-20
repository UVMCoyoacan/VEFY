function saludo(){
    alert("hola JS")
}
function numeracion(tope){
    for(i=1;i<tope;i++)
    {
        alert(i);
    }
}
function fondosParrafos(){
    parrafos=document.getElementsByTagName("p")
    parrafos[0].innerHTML="REMPLAZADO";
    parrafos[1].style="color:blue";
    lista=document.getElementsByClassName("verde");
    lista[0].style="text-align:center; color:green";
    document.getElementById("raro").innerHTML="CONTENIDO ACTUAL";
    

}
function noEstilos(){
    nest=document.styleSheets.length;
    for(i=0;i<nest;i++ ){
        document.styleSheets[i].disabled=true;
    }
}
function activaEstilo(n){
    noEstilos();
    document.stylesheets[n].disabled=false;
}