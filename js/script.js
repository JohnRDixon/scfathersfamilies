/* js file */

(function( window, undefined ){

})( window, undefined );

$(document).ready(function() {
        $('.menu-link').bigSlide();
    });

$(document).ready(function() {
        $('#third').collapsible();
    });


document.getElementById('letter').onchange = function() {
document.getElementById('behalf').style.display = this.checked ? 'block' : 'none';
};

$(function() {
$('#third').collapsible('accordion');
});