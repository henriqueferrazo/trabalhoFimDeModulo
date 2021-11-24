function escolhavic(escolha){
    var escolha = prompt('1 ou 2');
    if(escolha == 1){
        window.location.assign('./gameovervic.html');
    }else if(escolha == 2){
        window.location.assign('./escolhacerta1vic.html');
    }else {
        alert("Escolha uma opção valida !!!")
    }
}
function escolhavic2(escolha){
    var escolha = prompt('1 ou 2');
    if(escolha == 1){
        window.location.assign('./gameover2.html');
    }else if(escolha == 2){
        window.location.assign('./gameover3.html');
    }else {
        alert("Escolha uma opção valida !!!")
    }
}


// vic