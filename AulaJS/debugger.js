//Espera carregar todo o conteúdo HTML
window.onload = function(){
     //alert("alo Ha!");
     console.log("Se quiser me ver, tem que pressionar F12! Console...");
     //Concatenação de strings com o símbolo +
     console.log("a = " + a + " b = " + b);
     console.log("a + b = " + parseInt(a+b) );

};

//Variavel Global
var a = 2;
var b = 2;


let entrada = document.querySelectorAll('input');
let resposta = document.querySelector('.resposta');
let botão = document.querySelector('#btnSomar');



pegaNúmero1 = function(){
    return entradas[0]. value;
}

pegaNúmero2 = function(){
    return entradas[1].value;
}

testarEntradasVazias = function(){
    //Se entrada1 ou entrada2 for vazio, retorna Verdadeiro
    if(pegaNúmero() === '' || pegaNúmero2() === '')
      return true;
    else
      return false;
}
somar = function(){
    if(testarEntradasVazias()){
        resposta.textcontent = "Erro: Preencha os dois campos numéricos";
        resposta.classList.remove('correta');
        resposta.classList.add('errada');
        return false;
    }else{
        atulizaResposta();
        resposta.classList.remove('errada');
        resposta.classList.add('correta');
    }
    
}
atulizaResposta = function(){
    let num1 = pegaNúmero();
    let num2 = pegaNúmero2();
    var soma = num1 + num2;
    resposta.textContent = num1 + ' + ' + num2 + ' = ' + soma;
}

//Monitoramento do click no botão
// Quando o botão for clicado, a função somar será chamada!
botão.addEventListener('click',somar);