// Selecionando pelo ID do título
const title = document.getElementById("titulo");

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
});

const mudarTextos = document.createElement('button');
mudarTextos.textContent = 'Modificar frases'
document.querySelector('.container').appendChild(mudarTextos)

var texto = document.getElementsByClassName("mensagem2");

mudarTextos.addEventListener("click", function () {
    for(var i = 1; i < texto.length; i++){
        texto[i].textContent = "A frase " + i + " foi alterada"; 

    }
});
