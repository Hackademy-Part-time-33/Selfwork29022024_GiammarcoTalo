// ESERCIZIO 1

let totalcats = 30;
let catsinline = 8;

let numberlines = (Math.floor(totalcats/catsinline));
let lostcats= (totalcats%catsinline);
let requiredcats = (catsinline - lostcats);



console.log(numberlines); 
console.log(requiredcats);
console.log(lostcats);

console.log(`ci sono ${numberlines} file di gatti e ne mancano ${requiredcats} per una nuova fila, con un avanzo di ${lostcats}`);




// ESERCIZIO 2 CON IF (E AGGIUNTA DI PROMPT E ALERT)

// let v = prompt('dai un voto da 1 a 30');

// if (v < 18) {
//     console.log("insufficiente");
//     alert("insufficiente");
// }

// else if (v >= 18 && v < 21) {
//     console.log("sufficiente");
//     alert("sufficiente");
// }

// else if (v >= 21 && v < 24) {
//     console.log("buono");
//     alert("buono");
// }

// else if (v >= 24 && v < 27) {
//     console.log("distinto");
//     alert("distinto");
// }

// else if (v >= 27 && v <= 29) {
//     console.log("ottimo");
//     alert("ottimo");
// }

// else if (v == 30) {
//     console.log("eccellente");
//     alert("eccellente");
// }

// else {


//     console.log(`${v} non è valido, puoi inserire solo numeri da 0 a 30`);
//     alert(`${v} non è valido, puoi inserire solo numeri da 0 a 30`);
// }

// ESERCIZIO 2 CON SWITCH (E AGGIUNTA DI PROMPT E ALERT)

// let v = prompt("dai un v da 1 a 30");

// switch (true) {
//     case (v<= 18): 
//     console.log('insufficiente');
//     alert('insufficiente');
//         break;

//         case (v >= 18 && v <21): 
//     console.log('sufficiente');
//     alert('sufficiente');
//         break;

//         case (v >=21 && v <24): 
//     console.log('buono');
//     alert('buono');
//         break;

//         case (v >=24 && v <27): 
//     console.log('discreto');
//     alert('discreto');
//         break;

//         case (v >=27 && v <=29): 
//         console.log('ottimo');
//         alert('ottimo');
//             break;

//             case (v == 30): 
//         console.log('eccellente');
//         alert('eccellente');
//             break;


//     default:
//             console.log(`${v} non è valido, puoi inserire solo numeri da 0 a 30`);
//             alert(`${v} non è valido, puoi inserire solo numeri da 0 a 30`)
//         break;
// }


// ESERCIZIO 3

// let temperatura = parseInt(prompt('inserire temperatura'));

// if (temperatura >= 0 && temperatura < 20){
//     console.log('non ci sono piu le mezze stagioni');
// }

// else if (temperatura >= 30){
//     console.log('lu mare, lu sule, lu ientu');
// }

// else if (temperatura >= 20 && temperatura < 30){
//     console.log('mi dia una peroni sudata');
// }

// else if (temperatura < 0 && temperatura > -10){
//     console.log('non è tanto il freddo quanto l\'umidità');
// }

// else if (temperatura < -10){
//     console.log('copriti che ti raffreddi');
// }


// ESERCIZIO 3 CON SWITCH

let temperatura = parseInt(prompt('inserire temperatura'));

switch (true) {

    case (temperatura >= 0 && temperatura < 20): 
console.log('non ci sono piu le mezze stagioni');
    break;
    
    case (temperatura >= 30): 
    console.log('lu mare, lu sule, lu ientu');
    break;

    case (temperatura >= 20 && temperatura < 30): 
    console.log('mi dia una peroni sudata');
    break;

    case (temperatura < 0 && temperatura > -10): 
    console.log('non è tanto il freddo quanto l\'umidità');
    break;

    case (temperatura < -10): 
    console.log('copriti che ti raffreddi');
    break;
    
    default:
    console.log(`${temperatura} non è valido, puoi inserire solo numeri da 0 a 30`);
    break;
}
