$(document).ready(function(){
    //Lors d'un clic sur le div...
    $("div").click(function(){
        //...On inverse les classes de p
        $("p").fadeToggle("afficher cacher");
        //Les éléments avec .afficher seront visibles
        $(".afficher1, .afficher2, .afficher3, .afficher4, .afficher5").show();
        //Les éléments avec .cacher seront cachés
        $(".cacher").fadeToggle(1000);
    });

    //Lors d'un double clic sur le div...
    $("div").dblclick(function(){
        //...On lui applique une couleur de fond bleu clair
        $(this).css("background-color", "lightBlue");
    });
});