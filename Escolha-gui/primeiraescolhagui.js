

function escolhagui(escolha){
    var escolha = prompt('1 ou 2');
    if(escolha == 1){
        window.location.assign('./escolhacerta1.html');
    }else if(escolha == 2){
        window.location.assign('./gameovergui.html');
    }else {
        alert("Escolha uma opção valida !!!")
    }
}

function escolhagui2(escolha){
    var escolha = prompt('1 ou 2');
    if (escolha == 1 || escolha == 2){
        window.location.assign('./gameovergui.html');
    }else{
        alert("Escolha uma opção valida !!!")
    } 
}
