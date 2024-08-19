var output = document.querySelector(".output");
var divison = document.querySelector(".division");
var multiplication = document.querySelector(".multiplication");
var percentage = document.querySelector(".percentage");
var equalto = document.querySelector(".equalto");

var firstValInput = document.querySelector(".firstval");
var secondValInput = document.querySelector(".secondval");

var newValue = "";

function updateOutput(newValue) {
    output.innerText = newValue;
    firstValInput.value = "";
    secondValInput.value = "";
}

function divisionfunction(){
    newValue = Number(firstValInput.value) / Number(secondValInput.value);

    updateOutput(newValue);
}

function multiplicationfunction(){
    newValue = Number(firstValInput.value) * Number(secondValInput.value);

    updateOutput(newValue);
}

function percentagefunction(){
    newValue = Number(firstValInput.value) % Number(secondValInput.value);

    updateOutput(newValue);
}

function equaltofunction(){
    newValue = Number(firstValInput.value) == Number(secondValInput.value);

    updateOutput(newValue);
}

