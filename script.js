document.addEventListener("DOMContentLoaded", function () {

    const livro = document.getElementById("livro-conteudo");

    const capitulos = [
        "capitulos/capitulo-01.html",
        "capitulos/capitulo-02.html"
        "capitulos/capitulo-03.html"
    ];

    capitulos.forEach(function (arquivo) {

        fetch(arquivo)
            .then(response => {

                if (!response.ok) {
                    throw new Error("Não foi possível carregar: " + arquivo);
                }

                return response.text();
            })

            .then(conteudo => {

                livro.insertAdjacentHTML("beforeend", conteudo);

            })

            .catch(erro => {

                console.error(erro);

            });

    });

});
