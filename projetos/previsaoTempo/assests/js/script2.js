// Chave da api
const key = 'df76991302551e2743f23d05555bf312';

const button = document.querySelector('.botao_buscar');
const nomeCidade = document.querySelector('.cidade');
const temperatura = document.querySelector('.tempo');
const previsao = document.querySelector('.descricao');
const umidade = document.querySelector('.umidade');
const imagem = document.querySelector('.icone');


// URL DA API OPEN WEATHER
// `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`

 function colocaDadosNatela (dados){
    nomeCidade.textContent = dados.name
    temperatura.innerHTML = Math.floor(dados.main.temp)+"°c"
    previsao.innerHTML = dados.weather[0].description
    umidade.innerHTML = "umidade: " + dados.main.humidi+y+"%";
    console.log(dados)
    imagem.src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
};

// BUSCAR CIDADE
async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json());
    
    colocaDadosNatela(dados);
}


// FUNÇÂO procurar
function cliqueBotao() {

    const cidade = document.querySelector('.input_cidade').value;

    buscarCidade(cidade);
}





button.addEventListener('click', cliqueBotao);

document.addEventListener('keypress',(event) => {
    if (event.key === "Enter") { 
        const cidade = document.querySelector('.input_cidade').value;

        buscarCidade(cidade);    
    }

});