let arrayData = [];
const acoes = [
    {
        escalar(){
            let containerEscalar= document.querySelector("#escalar")
            containerEscalar.classList.toggle("block")
        }
    },
    {
        escalacao(){
            let containerEscalacao = document.querySelector("#escalacao")
            containerEscalacao.innerHTML = ''
            containerEscalacao.classList.toggle("block")
            let data = getForLocalStorage('data');
            data.forEach((i)=>{
                containerEscalacao.innerText +=`
                Nome: ${i.nome}
                Nº camisa: ${i.camisa}
                Posição: ${i.posicao}
                `
            })
        }
    },
    {
        save(e){
            e.preventDefault();
            const inputs = Array.from(document.querySelectorAll(".input"));
            const obj = {};

            inputs.forEach(input=>{
                let dataValue = input.value;

                if(dataValue != ''){ 
                    let dataKey = input.name;
                    obj[dataKey] = dataValue;
                }
            })

            if(obj.nome === undefined || obj.camisa === undefined || obj.posicao === undefined){
                return alert("Preencha todos os dados para continuar.")
            }else{
                let confirmacao = confirm("Você deseja salvar os dados abaixo? \n"
                    + "Nome: " + obj.nome + "\n"
                    + "Camisa: " + obj.camisa + "\n"
                    + "Posição: " + obj.posicao + "\n"
            )

                if(confirmacao){
                    arrayData.push(obj)
                }
            }

            setToLocalStorage(arrayData)
        }
    }
]
