//Dados
// Escriba un programa que calcule la probabilidad de sacar todos
//los dados 6 siendo que tiramos N dados (dato ingresado por el usuario)
let rotulo = document.getElementById("rotulo");
let dato = document.getElementById("dato");
let btnEnviar = document.getElementById("Enviar");

rotulo.innerHTML = "¿Cuántas veces va a tirar el dado?";

btnEnviar.addEventListener("click", () => {
  let n: number = Number(dato.value);
  let probCara: number = 1 / 6;
  let probFinal: number = 1;
  for (let contador: number = 1; contador <= n; contador++) {
    probFinal = probFinal * probCara;
  }
  console.log("La probabilidad es: " + probFinal);
});
