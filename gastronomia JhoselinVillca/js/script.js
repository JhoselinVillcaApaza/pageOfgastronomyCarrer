// jQuery(document).ready(function(){
//     jQuery(".boton-menu-movil").click(function(e){
//         e.preventeDefault();
//         jQuery("header .contenedor nav").toggleClass("abrir-menu");
//         jQuery(".boton-menu-movil i").toggleClass("fa-times");
//     });
// });

jQuery("header").ready(function(){
    jQuery(".boton-menu-movil").click(function(e){
        e.preventDefault();
        jQuery("header .contenedor nav").toggleClass("abrir-menu");
        jQuery(".boton-menu-movil i").toggleClass("fa-xmark");
    });
    jQuery("header .contenedor nav a").click(function(){
        
        jQuery("header .contenedor nav").removeClass("abrir-menu");
        jQuery(".boton-menu-movil i").removeClass("fa-xmark");
        var  enlace = jQuery(this).attr("href");
        jQuery("html, body").animate({
            "scrollTop": jQuery(dev).offset().top
        })
    });
});