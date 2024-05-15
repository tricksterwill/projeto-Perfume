// OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
// passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles

const perfumes = document.querySelectorAll('.perfume');


// passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse


perfumes.forEach((perfume) => {
    perfume.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: 'smooth'})
        }

     
        // passo 3 - verificar se já existe um personagem selecionado, se sim, remover a seleção dele

        removerSelecaoDoPerfume();

        perfume.classList.add('selecionado');

        // OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição grande

        //passo 1 - pegar o elemento  grande pra adicionar as informações nele
        alterarImagemPerfumeSelecionado(perfume);

        // passo 3 - alterar grande
        alterarNomePersonagemSelecionado(perfume);

        // passo 4 - alterar a descrição do personagem grande
        
        alterarDescricaoPersonagem(perfume);
        








    })

})





function alterarDescricaoPersonagem(perfume) {
    const descricaoPerfume = document.getElementById('descricao-perfume');

    descricaoPerfume.innerText = perfume.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(perfume) {
    const nomePerfume = document.getElementById('nome-perfume');

    nomePerfume.innerText = perfume.getAttribute('data-name');
}

function alterarImagemPerfumeSelecionado(perfume) {
    const imagemPerfumeGrande = document.querySelector('.perfume-grande');

    //passo 2 - alterar a imagem grande
    const idPerfume = perfume.attributes.id.value;
    imagemPerfumeGrande.src = `./src/imagens/card-${idPerfume}.png`;
}

function removerSelecaoDoPerfume() {
    const perfumeSelecionado = document.querySelector(".selecionado");
    perfumeSelecionado.classList.remove('selecionado');
}
/*perfumes.forEach((perfume) => {
    perfume.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        

        removerSelecaoDoPerfume();

        perfume.classList.add('selecionado');

        
        
        
        alterarImagemPerfumeSelecionado(perfume);


         alterarNomePerfumeSelecionado(perfume);

         

    })
})

function alterarDescricaoPerfume(perfume){
    const descricaoPerfume = document.getElementById('descricao-perfume');
    descricaoPerfume.innerText = perfume.getAttribute('data-description');
}

function alterarNomePerfumeSelecionado(perfume){
    const nomePerfume = document.getElementById('nome-perfume');
    nomePerfume.innerText = perfume.getAttribute('data-name');
}

function alterarImagemPerfumeSelecionado(perfume){
    const imagemPerfumeGrande = document.querySelector('.perfume-grande');
    // passo 2 - alterar a imagem do personagem grande
    const idPersonagem = perfume.attribute.id.value;
    imagemPerfumeGrande.src = `./src/imagens/`

}*/