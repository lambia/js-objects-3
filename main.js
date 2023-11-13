// const students = ['Paolo', 'Giulia', 'Marco'];
 
// for (let i = 0; i < students.length; i++) {
//     console.log(students[i], i);
// }

// students.forEach(function(element, index, array){
//     console.log(element, index);
// });

// students.forEach((element, index, array) => {
//     console.log(index, element);
// });

/***************************************************** */
const students = [
    {name: "Luca", eta: 33},
    {name: "Francesco", eta: 25},
    {name: "Bambino", eta: 9}
];

// const maggiorenni = [];

// for (let i = 0; i < students.length; i++) {
    
//     if(students[i].eta >= 18) {
//         maggiorenni.push( students[i] )
//     }
    
// }

// console.log(maggiorenni);

// const nuovo = students.map((studente) => {
//     return studente.name;
// });
// console.log(nuovo);

const maggiorenni = students.filter((studente) => {
    if(studente.eta >= 18) {
        return true;
    } else {
        return false;
    }
    
    // return (studente.eta >= 18);
});
console.log(maggiorenni);

/***************************************************** */
	
// let numeri = [1, 2, 3, 4, 5];
// let quadrati = [];

// for (let i = 0; i < numeri.length; i++) {
//     const quadrato = numeri[i] * numeri[i];

//     numeri[i] = quadrato;
//     quadrati.push( quadrato );
// }
// console.log("for:numeri", numeri);
// console.log("for:quadrati", quadrati);


// numeri = [1, 2, 3, 4, 5];
// quadrati = [];

// numeri.forEach((element,index,array)=>{
//     const quadrato = element*element;

//     array[index] = quadrato;
//     quadrati.push( quadrato );
// });
// console.log("foreach:numeri", numeri);
// console.log("foreach:quadrati", quadrati);


// numeri = [1, 2, 3, 4, 5];
// quadrati = [];
// numeri = numeri.map((numero) => {
//     return numero*numero;
// });
// quadrati = numeri;
// console.log("map:numeri", numeri);
// console.log("map:quadrati", quadrati);

/***************************************************** */
	
// const numeri = [1, 2, 3, 4, 5];

// const pari = numeri.filter((numero) => {
//   if(numero % 2 === 0) {
//     return true;
//   }
//   return false;
// });
// console.log(pari);