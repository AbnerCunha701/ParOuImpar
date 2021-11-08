function _1(MD,ME){
    MD.src = "images/1.png";
    ME.src = "";
    ME.style.width = "0px";
}
function _2(MD,ME){
    MD.src = "images/2.png";
    ME.src = "";
    ME.style.width = "0px";
}
function _3(MD,ME){
    MD.src = "images/3.png";
    ME.src = "";
    ME.style.width = "0px";
}
function _4(MD,ME){
    MD.src = "images/4.png";
    ME.src = "";
    ME.style.width = "0px";
}
function _5(MD,ME){
    MD.src = "images/5.png";
    ME.src = "";
    ME.style.width = "0px";
}
function _6(MD,ME){
    MD.src = "images/5.png"
    ME.src = "images/1.png"
    ME.style.width = "120px";
}
function _7(MD,ME){
    MD.src = "images/5.png"
    ME.src = "images/2.png"
    ME.style.width = "120px";
}
function _8(MD,ME){
    MD.src = "images/5.png"
    ME.src = "images/3.png"
    ME.style.width = "120px";
}
function _9(MD,ME){
    MD.src = "images/5.png"
    ME.src = "images/4.png"
    ME.style.width = "120px";
}
function _10(MD,ME){
    MD.src = "images/5.png"
    ME.src = "images/5.png"
    ME.style.width = "120px";
}

function alertar(valido) {
    var alerta = document.querySelector("#alerta")
    alerta.textContent = "⚠️Dado invalido!"
    if (valido) {
        alerta.textContent += " Insira um número"
    }
}

function verificar(MD,ME,valor) {
    
    alerta.textContent = ""
    document.querySelector("#alerta").style.opacity = "0%"

    switch (valor) {
        case 1:
            _1(MD,ME)
            break;
        case 2:
            _2(MD,ME)
            break;    
        case 3:
            _3(MD,ME)
            break;    
        case 4:
            _4(MD,ME)
            break;    
        case 5:
            _5(MD,ME)
            break;     
        case 6:
            _6(MD,ME)
            break;     
        case 7:
            _7(MD,ME)
            break;     
        case 8:
            _8(MD,ME)
            break;     
        case 9:
            _9(MD,ME)
            break;     
        case 10:
            _10(MD,ME)
            break;       
            
        default:
            document.querySelector("#alerta").style.opacity = "100%"
            if (document.querySelector("#par").value == "") {
                alertar(true) 
            } else {
                alertar(false)
            }
               
            break;
    }

}
let vitoriasJogador = 0
let vitoriasComputador = 0
let quantPartidas = 0

function resultado(c,j){
    let resto = (c + j) % 2
    let result = document.querySelector("#alerta")
    let VJ = document.querySelector("#VJ")
    let VC = document.querySelector("#VC")
    let partidas = document.querySelector("#partidas")
    
    quantPartidas ++
    partidas.textContent = "Quantidade de partidas jogadas: "+quantPartidas
    
    result.style.opacity = "100%"

    if (resto == 0) {
        result.textContent = "🏆Você ganhou!!🎉"
        vitoriasJogador ++
        VJ.textContent = "Vitorias: "+vitoriasJogador
    }else{
        result.textContent = "😢Você perdeu. Mas tente novamente!😊"
        vitoriasComputador ++
        VC.textContent = "Vitorias: "+vitoriasComputador
    }

    

    setTimeout(() => { document.querySelector("#par").value = ""; document.querySelector("#impar").textContent = "--"; setTimeout(() => { result.style.opacity = "0%" }, 1500)}, 2500)

    
    

}

function computadorJoga(valorJogador) {
    let valorComputador = Math.round(Math.random() * (10 - 0))

    let campoComputador = document.querySelector("#impar")
    let CMD = document.querySelector("#CMD")
    let CME = document.querySelector("#CME")
    campoComputador.textContent = valorComputador

    verificar(CMD,CME,valorComputador)
    resultado(valorComputador,valorJogador)
}



function iniciar(confirmacao) {
    let texto = document.querySelector("#par")
    let JMD = document.querySelector("#JMD")
    let JME = document.querySelector("#JME")
    let valor = parseInt(texto.value);
    if(event.keyCode === 13 || confirmacao == true){
        if (document.querySelector("#par").value == "") {
            verificar(JMD,JME,valor)
        }else{
            computadorJoga(valor)
        }
    }else{
        verificar(JMD,JME,valor)
    }
}

