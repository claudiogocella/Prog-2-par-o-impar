let btnEnviar = document.getElementById("enviar");

rotulo.innerHTML = "Introduzca un numero:";

btnEnviar.addEventListener("click", () => {
  let numero: number = dato.value;
  if (numero === 0) {
    console.log("El numero ingresado es " + numero 0 );
  } else if (numero % 2 === 0) {
    console.log("El numero " + numero + " es Par");
  } else {
    console.log("El numero " + numero + " es Impar");
  }
});
 