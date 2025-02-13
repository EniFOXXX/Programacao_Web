const colecao_signos = [
    {"nome": "Aquário", "DataInicio": "01-20", "DataFim":"02-18"},
    {"Nome": "Peixes", "DataInicio": "02-19", "DataFim":"03-20"},
    {"Nome": "Áries", "DataInicio": "03-21", "DataFim": "04-19"},
    {"Nome": "Touro", "DataInicio": "04-20", "DataFim": "05-20"},
    {"Nome": "Gêmeos", "DataInicio": "05-21", "DataFim": "06-21"},
    {"Nome": "Câncer", "DataInicio": "06-22", "DataFim": "07-23"},
    {"Nome": "Leão", "DataInicio": "07-24", "DataFim": "08-22"},
    {"Nome": "Virgem", "DataInicio": "08-23", "DataFim": "09-22"},
    {"Nome": "Libra", "DataInicio": "09-23", "DataFim": "10-22"},
    {"Nome": "Escorpião", "DataInicio": "10-23", "DataFim": "11-21"},
    {"Nome": "Sagitário", "DataInicio": "11-22", "DataFim": "12-21"},
    {"Nome": "Capricórnio", "DataInicio": "12-22", "DataFim": "01-19"}
]

const retorna_signo = (signos) => {
    let data = new Date("2024-02-07 00:00:00");
    let ano = data.getFullYear();
    

    let data_inicio_signo = new Date(ano + "-" + signos[0]["DataInicio"] + "00:00:00");
    let data_fim_signo = new Date(ano + "-" + signos[0]["DataFim"] + "23:59:59");
    console.log(data_inicio_signo);
    if(data >= data_inicio_signo && data <= data_fim_signo){
        return signos[0]["nome"];
    }
    
}
const nome_signo = retorna_signo(colecao_signos);
console.log("O signo do dia é:" + nome_signo);
