(function($) {
    $('.params').click(function(e) {
        $('.dropdown-menu').fadeToggle(200);
    });
/*    $('#fa-th').click(function(e) {
        $('#appli').toggle();
    });*/
    function toggle_visibility(id) {
        var e = document.getElementById('appli');
        if(e.style.display == 'block')
            e.style.display = 'none';
        else
            e.style.display = 'block';
    }
})(jQuery);
