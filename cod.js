function saludo(){
    alert("Hola JS");
}

function numeracion(tope){
for(i=0; i<5; i++){
    alert(i);
}
}

function fondo(){
alert("click");
parrafos=document.getElementsByTagName("p");
parrafos[0].innerHTML="remplazado";
parrafos[1].style="color:red"
lista=document.getElementsByClassName("verde");
lista[0].style="text-align:center; color:blue";
document.getElementById("raro").innerHTML="contenido actual";

}

function NoEstilos(){
    nest=document.styleSheets.length;
    for(i=0;i<nest;i++){
        document.styleSheets[i].disabled=true;
    }


}

function ActivaEstilo(n){
    NoEstilos();
    document.styleSheets[n].disabled=false;

}

function redirigirYos() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}

function redirigirVik() {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
}

function redirigirFer() {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
}

function redirigirEu() {
    window.location.href = './Pagina web presentacion Eugen/indexEugen.html';
}
function redirigirForm() {
    window.location.href = 'file:///C:/Users/Evanb/OneDrive/Documentos/GitHub/VEFY/enviadatos.html';
}