const dataAcaoes = document.querySelectorAll("[data-acao]");

function setToLocalStorage(data){
    let dataString = JSON.stringify(data)
    localStorage.setItem("data", dataString);
}

function getForLocalStorage(){
    let data = JSON.parse(localStorage.getItem('data'));
    return data;
}

dataAcaoes.forEach(dataAcao =>{
    dataAcao.addEventListener("click", (e)=>{
        let acao = Number(e.target.dataset.acao);
        switch(acao){
            case 0:
                break;
            case 1:
                break;
            case 2:
                acoes[acao].save(e);
                break;
            case 3:
                break;
            default:
                alert("Ação impossível");
                break;
        }
    })
})
