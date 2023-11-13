function prova() {
    console.log("funzione eseguita");
}

let altraProva = function() {
    console.log("funzione anonima salvata in una varabile");
}

let arrow = () => {
    console.log("Arrow function eseguita");
    //altra riga di codice
}

() => console.log("Arrow function one-liner eseguita");

console.log("THIS generale", this);

document.getElementById("btn1").addEventListener("click", function() {
    console.log("this function(){}", this);
});

document.getElementById("btn2").addEventListener("click", ()=> {
    console.log("this arrow function", this);
});

const due = () => { return 1+1; };
const dueBreve = () => 1+1;

