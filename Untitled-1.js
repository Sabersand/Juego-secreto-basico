let numeroSecreto = Math.floor(Math.random()*(max-min+1)+min);
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 3;

alert("Para hacerlo más interesante, vas a indicarme un rango de números elegidos por tí para adivinar el número aleatorio");
var min = parseInt(prompt("Indicame el primer número en donde se iniciará el rango"));
var max = parseInt(prompt("Indicame el segundo número que será el número máximo que alcanzará el rango"));
console.log(min);
console.log(max);
console.log(numeroSecreto);
while (numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`Me indicas un número entre ${min} y ${max} por favor:`));
    
    console.log(numeroUsuario);
   
    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ?"vez" : "veces" }`); 

    } else {
        if (numeroUsuario > numeroSecreto) {
            alert("El número secreto es menor");
        } else {
            alert("El número secreto es mayor");
        }
                intentos++;
        palabraVeces = "veces";
        if (intentos > maximosIntentos){
            alert(`llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
    }
}