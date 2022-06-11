const resposta = document.querySelector('#resposta')
const pergunta = document.querySelector('#pergunta')
const botao = document.querySelector('#botao')
const respostas = [
    "Certeza",
    "Não tenho tanta certeza",
    "É decididamente sim",
    "Não conte com isso",
    "Sem duvidas",
    "Pergunbte novamente mais tarde",
    "Sim, definitivamente",
    "minha resposta é não",
    "Você pode contar com isso",
    "Melhor não te dizer agora",
    "A meu ver, sim",
    "Minhas fontes dizem que não",
    "Provavelmente",
    "Não é possivel prever agora",
    "Perspectiva boa",
    "As perspectivas não são tão boas",
    "Sim",
    "Concentre-se e pergunte denovo",
    "Sinais apontam que sim"
]

function fazerPergunta(){

    if(pergunta.value == ""){
        alert("Digite sua pergunta")
        return
    }
    
    botao.setAttribute("disabled", true)

    const totalRespostas = respostas.length
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
    const perguntaValue = "<div>" + pergunta.value + "</div>"

    resposta.innerHTML = perguntaValue + respostas[numeroAleatorio]

    //Clear
    resposta.style.opacity = 1;

    setTimeout(function() {
        resposta.style.opacity = 0;

        botao.removeAttribute("disabled")
    }, 3000)
}