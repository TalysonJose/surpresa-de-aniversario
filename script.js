const presente = document.getElementById("presente");
const carta = document.getElementById("carta");
const texto = document.getElementById("texto");

const fotoContainer =
    document.getElementById("foto-container");

const fundo =
    document.getElementById("particulas");

const assinatura =
    document.getElementById("assinatura");

const musica =
    document.getElementById("musica");

const botaoMusica =
    document.getElementById("botao-musica");

const botaoSurpresa =
    document.getElementById("botao-surpresa");

const surpresaFinal =
    document.getElementById("surpresa-final");

const fecharSurpresa =
    document.getElementById("fechar-surpresa");


const mensagem = `o texto

exemplo de texto 1

exemplo de texto 2

exemplo de texto 3
🤍`;


let presenteAberto = false;


/* Abrir presente */

presente.addEventListener("click", function () {

    if (presenteAberto) {
        return;
    }

    presenteAberto = true;

    presente.classList.add("treme");

    setTimeout(function () {

        presente.classList.remove("treme");
        presente.classList.add("abrir");

    }, 500);

    setTimeout(function () {

        presente.style.display = "none";

        carta.classList.remove("escondido");
        carta.classList.add("animar");

        escreverMensagem();

    }, 3000);

});


/* Escrever carta */

function escreverMensagem() {

    let indice = 0;

    texto.textContent = "";

    const intervalo = setInterval(function () {

        texto.textContent += mensagem.charAt(indice);

        indice++;

        if (indice >= mensagem.length) {

            clearInterval(intervalo);

            setTimeout(function () {

                fotoContainer.classList.add("foto-aparecer");

                assinatura.classList.add(
                    "assinatura-aparecer"
                );

            }, 700);

        }

    }, 25);

}


/* Corações ao clicar */

document.addEventListener("click", function (evento) {

    const coracao = document.createElement("div");

    coracao.className = "coracao";
    coracao.textContent = "❤️";

    coracao.style.left =
        evento.clientX + "px";

    coracao.style.top =
        evento.clientY + "px";

    fundo.appendChild(coracao);

    setTimeout(function () {
        coracao.remove();
    }, 4000);

});


/* Pétalas */

function criarPetala() {

    const petala = document.createElement("div");

    petala.className = "petala";
    petala.textContent = "🤎";

    petala.style.left =
        Math.random() * window.innerWidth + "px";

    petala.style.animationDuration =
        5 + Math.random() * 5 + "s";

    petala.style.fontSize =
        18 + Math.random() * 18 + "px";

    document.body.appendChild(petala);

    setTimeout(function () {
        petala.remove();
    }, 10000);

}

setInterval(criarPetala, 700);


/* Música */

botaoMusica.addEventListener("click", function () {

    if (musica.paused) {

        musica.play()
            .then(function () {

                botaoMusica.textContent =
                    "⏸️ Pausar nossa música";

            })
            .catch(function () {

                botaoMusica.textContent =
                    "Não foi possível tocar a música";

            });

    } else {

        musica.pause();

        botaoMusica.textContent =
            "▶️ Tocar nossa música";

    }

});


/* Abrir última surpresa */

botaoSurpresa.addEventListener("click", function () {

    surpresaFinal.classList.add("aberta");

});


/* Fechar no X */

fecharSurpresa.addEventListener("click", function () {

    surpresaFinal.classList.remove("aberta");

});


/* Fechar clicando no fundo */

surpresaFinal.addEventListener("click", function (evento) {

    if (evento.target === surpresaFinal) {

        surpresaFinal.classList.remove("aberta");

    }

});


/* Fechar apertando Escape */

document.addEventListener("keydown", function (evento) {

    if (evento.key === "Escape") {

        surpresaFinal.classList.remove("aberta");

    }

});