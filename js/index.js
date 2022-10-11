function menu(x) {
    x.classList.toggle("change");
}


//biblioteca jquery para o menu hamburguer funcionar 
$(document).ready(function () {
    $('.hamburguerContainer').on('click', function () {
        $('.mainNavigation').toggle('slow');
    });
});
