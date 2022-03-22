var btn=document.querySelector("#send");
var trim = document.getElementById('trim');
var upper = document.getElementById('upper');
var lower = document.getElementById('lower');
var concat = document.getElementById('concat');
var replace = document.getElementById('replace');

btn.addEventListener("click", function(e){
    
    e.preventDefault();

    var name=document.querySelector("#name");
    var lastName=document.querySelector("#lastname");

    var texto=name.value;
    var texto_2=lastName.value;

    
    // trim
    var semEspaco=texto.trim();
    trim.innerHTML = semEspaco;

    // upercase
    var letraMaiuscula=texto.toUpperCase();
    upper.innerHTML = letraMaiuscula;

    // lowercase
    var letraMinuscula=texto.toLowerCase();
    lower.innerHTML = letraMinuscula;

    // concat
    var nomeCompleto=texto.concat(' ',texto_2);
    concat.innerHTML = nomeCompleto;

    // replace
    var result = nomeCompleto.replace(/a/g,"@").replace(/e/g,"3");
    replace.innerHTML = result;
})