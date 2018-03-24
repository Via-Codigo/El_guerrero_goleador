 
var title =document.getElementById("pagetitle");

 title.innerHTML ="hola:B";
 

var txt1 =document.getElementById("texto1");

 txt1.innerHTML = 
 "<strong>Algo</strong> mas que solo texto";


var saludar =function(){
	alert("hola");
}
var sumar =function(){
	var n1 = document.getElementById("num1").value;
	var n2 =document.getElementById("nume2").value;

var resultado = parseInt(n1) +parseInt(n2);

alert(resultado);

}

var Restar=function (){
	var n1 =document.getElementById("num1").value;
	var n2 =document.getElementById("nume2").value;

var resultado =parseInt(n1) -parseInt(n2);

alert(resultado);

}

var multiplicar =function(){
	var  n1 =document.getElementById("num1").value;
	var  n2 =document.getElementById("nume2").value;

var resultado =parseInt(n1) *parseInt(n2);

alert (resultado);
}

var divición =function(){
	var n1 =document.getElementById("num1").value;
	var n2 =document.getElementById("nume2").value;

var resultado =parseInt(n1) /parseInt(n2);

alert (resultado);
}









