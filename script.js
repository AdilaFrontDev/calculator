
//DOM Recupérer les touches de la calculatrice (étape importante)
const chiffres = document.querySelectorAll('.chiffre');
const operateurs = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear');
const equal = document.querySelector('.equal');
const virgule = document.querySelector('.virgule');
const parentheseOuvrante = document.querySelector('.openBracket');
const parentheseFermante = document.querySelector('.closeBarcket');
const ecran = document.querySelector('.calculatrice_ecran');
let number1 = "";
let number2 = "";
let operateurTouche = "";
let operateurChoix = false;
let comma1 = false;
let comma2 = false;
let result = "";

// on ecoute la cible

const touchesChiffresAutorisees = [48, 49, 50, 51, 51, 52, 53, 54, 55, 56, 57];
const touchesOperateursAutorisees = [40, 41, 106, 107, 109, 109, 111];

function chiffresEnregistrement(nb) {
    if(!operateurChoix) {
        number1 += nb;
    } else {
        number2 += nb;  
    }
    ecran.textContent = number1 + operateurTouche + number2;
};

function virgulesEnregistrement(event) {
    if (comma2) {
        event.preventDefault();
    }
    if (!operateurChoix && !comma1) {
        number1 += ".";
        comma1 = true;
    }  else if  (operateurChoix && !comma2) {
        number2 += ".";
        comma2 = true;
    } 
};

function operateurEnregistrement(event) {
    if (!operateurChoix) {
        operateurTouche = event.target.textContent;
        ecran.textContent += operateurTouche;
        operateurChoix = true;
    }
};

function reset() {
    number1 = "";
    number2 = "";
    operateurTouche = "";
    operateurChoix = false;
    comma1 = false;
    comma2 = false;
};

// ecran.addEventListener('keypress', (e) => {
//     console.log('coucou');
//     e.preventDefault();
//     console.log(e);
//     let nb = e.target.textContent;
//     if (touchesChiffresAutorisees.includes(e.charCode)) {
//         chiffresEnregistrement(nb);
//     } else {
//         console.log('it is not ok!')
//     }
    
// })

chiffres.forEach((chiffre) => { 
    chiffre.addEventListener('click', (e) => { 
        e.preventDefault();
        let nb = e.target.textContent;
        chiffresEnregistrement(nb);
    })
});

virgule.addEventListener("click", (e) => {
    virgulesEnregistrement(e);
});

operateurs.forEach((operateur) => { 
    operateur.addEventListener('click', (e) => { 
        operateurEnregistrement(e);
    })
});

clear.addEventListener("click", (e) => {
    document.getElementById("ecran").innerHTML = "";
    reset();
});

function doCalculation(number1, number2, operateurTouche) {
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    switch (operateurTouche) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
    }
    console.log(result);
    return result;
};

equal.addEventListener('click', (e) => {
    result = doCalculation(number1, number2, operateurTouche);
    ecran.textContent = result;
    reset();
    number1 = result;
});
