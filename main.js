$(document).ready(function(){
let expressaoAritmetica = prompt("Informe a expressão aritmética(+, -, *, /)")

    $("form").on("submit", function(e){
        e.preventDefault()

        const inputNumberA = parseFloat($("#numberA").val())
        const inputNumberB = parseFloat($("#numberB").val())
        
        const result = Calc(expressaoAritmetica,inputNumberA, inputNumberB)
        let mensagemResultado = `Resultado: ${result}` 

        const spanResultado = document.querySelector(".resultado")
        spanResultado.innerHTML = mensagemResultado
    })


    function Calc(expressaoAritmetica, inputNumberA, inputNumberB){
        let resultado

        if(expressaoAritmetica == "+"){
            resultado = inputNumberA + inputNumberB
            return resultado
        }
        else if(expressaoAritmetica == "-"){
            resultado = inputNumberA - inputNumberB
            return resultado
        }
        else if(expressaoAritmetica == "*"){
            resultado = inputNumberA * inputNumberB
            return resultado
        }
        else if(expressaoAritmetica == "/"){
            resultado = inputNumberA / inputNumberB
            return resultado
        }
    }
})