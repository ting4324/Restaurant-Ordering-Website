var Menu = (function() {
	
	//declare variable
	var $container = $( '#rm-container' ),						
		$cover = $container.find( 'div.rm-cover' ),
		$right = $container.find( 'div.rm-right' ),
		$open = $cover.find('a.rm-button-open'),
		$close = $right.find('span.rm-close'),


		init = function() {

			initEvents();

		},
		initEvents = function() { //Function to open the menu if click on top right close button

			$open.on( 'click', function( event ) {

				openMenu();
				return false;

			} );

			$close.on( 'click', function( event ) { //Function to close the menu if click on top right close button

				closeMenu();
				return false;

			} );
			
		},
		openMenu = function() {

			$container.addClass( 'rm-open' ); //open menu

		},
		closeMenu = function() { //close menu

			$container.removeClass( 'rm-open rm-nodelay rm-in' );

		}


	return { init : init };

})();