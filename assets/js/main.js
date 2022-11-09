const dataAcaoes = document.querySelectorAll("[data-acao]");

function setToLocalStorage(data){
    let dataString = JSON.stringify(data)
    localStorage.setItem("data", dataString);
}

function getForLocalStorage(nameKey){
    let data = JSON.parse(localStorage.getItem(nameKey));
    return data;
}

dataAcaoes.forEach(dataAcao =>{
    dataAcao.addEventListener("click", (e)=>{
        let acao = Number(e.target.dataset.acao);
        switch(acao){
            case 0:
                acoes[acao].escalar();
                break;
            case 1:
                acoes[acao].escalacao();
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
