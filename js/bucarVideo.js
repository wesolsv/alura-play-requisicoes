import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento){
    evento.preventDefault();
    const dadosDePesquisa = document.querySelector('[data-pesquisa]').value;
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);

    const lista = document.querySelector('[data-lista]');
    // while(lista.firstChild){
    //     lista.removeChild(lista.firstChild);
    // }

    lista.innerHTML = '';

    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));

    if(busca.length == 0){
        lista.innerHTML = `<h2 class="mensagem__titulo"> Vídeo não encontrado </h2>`
    }
    
}

const botaoPesquisa = document.querySelector('[data-botao-pesquisa]');
botaoPesquisa.addEventListener("click", evento => buscarVideo(evento));