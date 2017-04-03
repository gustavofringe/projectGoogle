// (function ($) {
//     $('.params').click(function (e) {
//         $('.dropdown-menu').fadeToggle(200);
//     });
//     $('#fa-th').click(function (e) {
//         $('#appli').toggle();
//     });
//
// })(jQuery);
window.onload = function() {
    var button = document.getElementById('fa-th');
    var nav = document.getElementById('appli');
    var html = document.getElementById('site');
    var button_b = document.getElementById('params');
    var nav_b = document.getElementById('dropdown-menu');

    button.onclick = function(e) {
        if (nav.style.display == "block") {
            nav.style.display = "none";
        } else {
            nav.style.display = "block";
        }
    };
    html.onclick = function(e){
        if ((nav.style.display == false)&&(nav_b.style.display == false)){
            (nav.style.display = "block")&&(nav_b.style.display = "block");
        } else{
            (nav.style.display = "block")&&(nav_b.style.display = "block");
        }
    };
    button_b.onclick = function(e) {
        if (nav_b.style.display == "block") {
            nav_b.style.display = "none";
        } else {
            nav_b.style.display = "block";
        }
    };
    html.onclick = function(e){
        if (nav_b.style.display == false){
            nav_b.style.display = "block";
        } else{
            nav_b.style.display = "none";
        }
    };
};
