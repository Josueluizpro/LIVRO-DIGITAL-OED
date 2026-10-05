document.addEventListener("DOMContentLoaded", function () {

    fetch("capitulos/capitulo-01.html")
        .then(response => response.text())
        .then(conteudo => {

            const livro = document.getElementById("livro-conteudo");

            if (livro) {
                livro.innerHTML = conteudo;
            }

        })
        .catch(erro => {
            console.error("Erro ao carregar o capítulo:", erro);
        });

});
