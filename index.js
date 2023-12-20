document.addEventListener('DOMContentLoaded', function () {
    // Aguarde o carregamento completo do DOM antes de interagir com os elementos

    // Selecione todos os elementos com a classe "duvida"
    var elementosDuvida = document.querySelectorAll(".duvida");

    // Adicione um ouvinte de eventos de clique a cada elemento
    elementosDuvida.forEach(function (duvida) {
        duvida.addEventListener('click', function (e) {
            e.stopPropagation();

            // Adicione ou remova a classe 'ativa' apenas no elemento clicado
            duvida.classList.toggle('ativa');

            // Remova a classe 'ativa' dos outros elementos
            elementosDuvida.forEach(function (outroDuvida) {
                if (outroDuvida !== duvida && outroDuvida.classList.contains('ativa')) {
                    outroDuvida.classList.remove('ativa');
                }
            });
        });
    });
});



