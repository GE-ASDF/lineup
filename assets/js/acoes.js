let arrayData = [];
const acoes = [
    {},
    {},
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

            if(obj.nome === undefined && obj.camisa === undefined && obj.posicao === undefined){
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
