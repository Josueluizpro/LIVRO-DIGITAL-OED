document.addEventListener("DOMContentLoaded", async function () {

    const livro = document.getElementById("livro-conteudo");

    const capitulos = [
        "capitulos/capitulo-01.html",
        "capitulos/capitulo-02.html",
        "capitulos/capitulo-03.html"
    ];

    for (const arquivo of capitulos) {

        try {

            const response = await fetch(arquivo);

            if (!response.ok) {
                throw new Error(
                    "Não foi possível carregar: " + arquivo
                );
            }

            const conteudo = await response.text();

            livro.insertAdjacentHTML(
                "beforeend",
                conteudo
            );

        } catch (erro) {

            console.error(erro);

        }

    }

});
