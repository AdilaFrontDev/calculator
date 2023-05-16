//On pointe sur l'élément de résultat
const espaceMessage = document.getElementById("result");
//On pointe sur l'élément de bouton
const bouton = document.getElementById("bouton");
//On pointe sur l'élément de champ de saisie de l'opération
const anneeInput = document.getElementById("operation");


function calculator(number1,operator,number2){
    if(operator === "x" || operator === "*") {
        return number1 * number2;
    } else if(operator === "/"){
        return number1 / number2;
    } else if(operator === "+"){
        return number1 + number2;
    } else(operator === "-"){
        return number1 - number2;
    }
}