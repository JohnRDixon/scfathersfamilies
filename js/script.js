/* js file */

(function( window, undefined ){

$(document).ready(function() {
    
    $('.menu-link').bigSlide();
});

// $(document).ready(function() {
//         $('#third').collapsible();
//     });




// $(function() {
// $('#third').collapsible('accordion');
// });

$(document).ready(function() {

	var $hide = $( "#hide" ),
		$dropdown = $( "#dropdown_menu" );

    $hide.on( "click", function( e ){
        
        $dropdown.slideToggle( 300 );
    });

    $dropdown.hide();
});

$(document).ready(function() {

	var $hide = $( "#hide2" ),
		$dropdown = $( "#dropdown_menu2" );

    $hide.on( "click", function( e ){
        
        $dropdown.slideToggle( 300 );
    });

    $dropdown.hide();
});

$(document).ready(function() {

	var $hide = $( "#hide3" ),
		$dropdown = $( "#dropdown_menu3" );

    $hide.on( "click", function( e ){
        
        $dropdown.slideToggle( 300 );
    });

    $dropdown.hide();
});

$(document).ready(function() {

	var $hide = $( "#hide4" ),
		$dropdown = $( "#dropdown_menu4" );

    $hide.on( "click", function( e ){
        
        $dropdown.slideToggle( 300 );
    });

    $dropdown.hide();
});

$(document).ready(function() {

	var $hide = $( "#hide5" ),
		$dropdown = $( "#dropdown_menu5" );

    $hide.on( "click", function( e ){
        
        if( $( window ).width() < 900 ){
            $dropdown.slideToggle( 300 );
        }
    });

    $dropdown.hide();
});

$(document).ready(function() {

	var $hide = $( "#hide6" ),
		$dropdown = $( "#dropdown_menu6" );

    $hide.on( "click", function( e ){
        
        $dropdown.slideToggle( 300 );
    });

    $dropdown.hide();
});

$(document).ready( function(){

    $( window ).on( "resize load", function( e ){

        if( $( window ).width() >= 900 ){
             
            $( "#dropdown_menu" ).removeAttr( "style" );
            $( "#dropdown_menu2" ).removeAttr( "style" );
            $( "#dropdown_menu3" ).removeAttr( "style" );
            $( "#dropdown_menu4" ).removeAttr( "style" );
            $( "#dropdown_menu5" ).removeAttr( "style" );
            $( "#dropdown_menu6" ).removeAttr( "style" );
        }
        else{
             
            $( "#dropdown_menu" ).hide();
            $( "#dropdown_menu2" ).hide();
            $( "#dropdown_menu3" ).hide();
            $( "#dropdown_menu4" ).hide();
            $( "#dropdown_menu5" ).hide();
            $( "#dropdown_menu6" ).hide();
        }
    } );

    $( "#letter" ).on( "click", function( e ){

        if( $( this ).is( ":checked" ) ){

            $( "#behalf" ).slideDown();
        }
        else{
            $( "#behalf" ).slideUp();
        }
    } );
} );


})( window, undefined );