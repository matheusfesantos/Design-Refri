let list = document.querySelectorAll('.item')//ADD CLASSES QUE TEM INTEM NO NOME EM UMA LISTA
let next = document.getElementById('next')//ARMAZENA O ID NEXT NA VARIAVEL DE MSM NOME
let prev = document.getElementById('prev')//ARMAZENA O ID PREV NA VARIAVEL DE MSM NOME

let count = list.length //CONTA A QUANTIDADE DE ITEMS
let active = 0 //ITEM NA LISTA QUE ESTA ATIVO NO FRONT END

next.onclick = () => {
    let activeOld = document.querySelector('.active')//PROUCURA A CLASSE QUE TEM ACTIVE NO NOME
    activeOld.classList.remove('active')//REMOVE A CLASSE QUE POSSUI ACTIVE NO NOME

    if(active < 2){ //VERIFICA A POSIÇÃO QUE A LISTA ESTA
        active = active + 1
        list[active].classList.add('active')
    }
    else{ // SE A LISTA NÃO FOR MENOR QUE [2] ELA VOLTA AO VALOR [0] E VOLTA PARA O INICIO DA LISTA
        active = 0
        list[active].classList.add('active')
    }
}

prev.onclick = () =>{
    
    let activeOld = document.querySelector('.active')//PROUCURA A CLASSE QUE TEM ACTIVE NO NOME
    activeOld.classList.remove('active')//REMOVE A CLASSE QUE POSSUI ACTIVE NO NOME

    if(active > 0){
        active = active - 1
        list[active].classList.add('active')
    }
    else{
        active = 0
        list[active].classList.add('active')
    }
}