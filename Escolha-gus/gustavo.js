function escolhagus(escolha){
    var escolha = prompt('1 ou 2');
    if(escolha == 1){
        window.location.assign('./gameover1gus.html');
    }else if(escolha == 2){
        window.location.assign('./escolhacertagus1.html');
    }else {
        alert("Escolha uma opção valida !!!")
    }
}
function escolhagus1(escolha){
    var escolha = prompt('1 ou 2');
    if(escolha == 1){
        window.location.assign('./gamerover2gus.html');
    }else if(escolha == 2){
        window.location.assign('./etapa2.html');
    }else {
        alert("Escolha uma opção valida !!!")
    }
}

function escolhagus2(escolha){
    var escolha = prompt('1 ou 2');
    if(escolha == 1){
        window.location.assign('./gameover1gus.html');
    }else if(escolha == 2){
        window.location.assign('./vitoria.html');
    }else {
        alert("Escolha uma opção valida !!!")
    }
}