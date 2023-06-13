function resetForm() {
document.getElementById("conversion").reset();
document.getElementById("resultado").innerHTML = "";
}
document.getElementById("conversion").addEventListener("submit", function(event) {
event.preventDefault();

var monto1 = parseFloat(document.getElementById("monto").value);
var tipo1 = document.getElementById("tipo").value;
var cambio1 = parseFloat(document.getElementById("cambio").value);
var resultado1;

if (tipo1 === "pesos") {
resultado1 = monto1 / cambio1;
document.getElementById("resultado").innerHTML = monto1 + " pesos equivale a " + resultado1.toFixed(2) + " dólares.";
} else {
resultado1 = monto1 * cambio1;
document.getElementById("resultado").innerHTML = monto1 + " dólares equivale a " + resultado1.toFixed(2) + " pesos.";
}
});