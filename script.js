




function addCaracter(caracter) {
    const valorDisplay = document.querySelector('.display').value
    document.querySelector('.display').value = valorDisplay + caracter
}


//Limpar tela
function clearTela(){
    document.querySelector('.display').value = ""
}

// fazer calculos

function calcular(){
    const valorDisplay = document.querySelector('.display').value

    document.querySelector('.display').value = eval(valorDisplay)

}

function inverterNumber() {
    document.querySelector('.display').value = valorDisplay * -1

}