const sendButton = document.getElementById("snd-nota");

sendButton.addEventListener("click",()=>{
    let result;
    let message;
    try{
        prevRes = parseInt(document.getElementById("nota").value); 
        if (isNaN(prevRes)) {
            throw "El dato ingresado es un String";
        }
        result = verifyApproval(8,4,prevRes);
        message = defMsg(result[1]);
    } catch(e) {
        console.log(e);
    }
    openModal(result[0],message);
})

const defMsg = (pr)=> {
    let result;
    switch (pr) {
        case 1: result = "No poder ser tan HDP";
                break;
        case 2: result = "Sos malisimo par ami materia";
                break;
        case 3: result = "No sabes casi nada";
                break;
        case 4: result = "Muy mal";
                break;
        case 5: result = "Mal";
                break;
        case 6: result = "Regular";
                break;
        case 7: result = "Bien, pero puede mejorar";
                break;
        case 8: result = "¡Muy bien!";
                break;
        case 9: result = "¡Excelente!";
                break;
        case 10: result = "¡Insuperable!";
                break;
        default: result = null;
            break;
    }
    return result;
}

const verifyApproval = (nota1,nota2,prevRes)=>{
    promedio = (nota1 + nota2 + prevRes)     / 3;
    if (promedio >= 7) {
        return [`<span class="green">APROBADO!</span>`,Math.round(promedio)]
    } 
    return [`<span class="red">DESAPROBADO!</span>`,Math.round(promedio)]
}

const openModal = (res,msg)=> {
    document.querySelector(".resultado").innerHTML = res;
    document.querySelector(".mensaje").innerHTML = "Tu prueba: " + msg;
    let modal = document.querySelector(".modal-container");
    modal.style.display = "flex";
    modal.style.animation = "aparecer 1s forwards";
}