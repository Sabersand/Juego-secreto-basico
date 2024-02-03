//Puedes descargar el plugin "Live Server" para poder siempre usar la versión actual del programa
//Variables, LET se usa para definir variables, PROMPT pide al usuario ingresar datos
//Puedes usar la página de MDN para buscar variables de JavaScript
let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = "vez";
let maximosIntentos = 3;


/*el while es para crear bucles, == es comparación exacta != es diferente de*/
while (numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt("Me indicas un número entre 1 y 10 por favor:"));
    /*el console.log ayuda a verificar que el codigo este ejecutandose correctamente
    desde la consola del navegador, pero una vez el codigo esté compliando bien
    se deben borrar los console.log de las funciones para que no cause errores
    */
    //La funcion parseint nos permite transformar la información ingresada en números, para que JavaScript no vaya a generar errores, por ello siempre se debe transformar el prompt al tipo de variable que es (String, Numbers, etc)
    console.log(numeroUsuario);
    /*
    Este codigo realiza la comparación
    */
    if (numeroUsuario == numeroSecreto) {
        /*Acertamos, fue verdadera la condición
        Usar comilla invertida (ALTgr + tecla }) es para decir que va a haber texto y codigo en el mismo alert
        Y para mostrarle a Java cual es el codigo, se debe encerrar en corchetes y poner de inicio el $
        Puedes usar || para agregar mas condicionantes al IF
        */
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ?"vez" : "veces" }`); 
        //Si usamos el ? en un string templates es una forma de verificar si se cumple alguna condicion y ejecutar una opción (Como un IF) y usamos : para un else
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert("El número secreto es menor");
        } else {
            alert("El número secreto es mayor");
        }
        //Incrementamos el contador cuando no se acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;
        palabraVeces = "veces";
        if (intentos > maximosIntentos){
            alert(`llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        //break es un condicionante para romper un loop o while bajo ciertas condiciones especificdas en el IF
        }
        // puedes redefinir las variables dentro de un "IF" que serán validas solo dentro de ese IF
        //La condición no se cumplió
        //alert("Lo siento, no acertaste el número")
    }
}