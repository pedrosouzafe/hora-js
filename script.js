
function carregar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')


    const data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`



    //Parte de carregar as imagens

    if (hora >= 0 && hora < 6){
        //boa madrugada
        img.src = './imagens/noite.png'
        document.body.style.background = '#515154'
    }else if(hora >= 6 && hora < 12){
        //bom dia
        img.src = './imagens/manha.png'
        document.body.style.background = '#f2c9af'
    }else if(hora >= 12 && hora <= 18){
        //boa tarde
        img.src = './imagens/tarde.png'
        document.body.style.background = '#5c3138'
    }else if(hora > 18 && hora <= 23){
        //boa noite
        img.src = './imagens/noite.png'
        document.body.style.background = '#091c3b'
    }


}       


/* 
        #091c3b

if (hora >= 0 && hora < 12){
        //bom dia
        img.src = './imagens/manha.png'
        document.body.style.background = '#f2c9af'
    }else if(hora >= 12 && hora <= 18){
        //boa tarde
        img.src = './imagens/tarde.png'
        document.body.style.background = '#5c3138'
    }else{
        //boa noite
        img.src = './imagens/noite.png'
        document.body.style.background = '#515154'
    }
*/