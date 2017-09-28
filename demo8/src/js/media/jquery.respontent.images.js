/*	
 * jQuery respontent images media
 */


(function( $ ) {

	var _PLUGIN_	= 'respontent',
		_MEDIA_		= 'images';

	var _c = {},
		_mediaInitiated = false;


	$[ _PLUGIN_ ].prototype[ 'fit_' + _MEDIA_ ] = function( $img, type )
	{
		var that = this;

		if ( !_mediaInitiated )
		{
			_initMedia();
		}


		//	Single image
		if ( $img )
		{
			//	Find type
			if ( typeof type == 'undefined' )
			{
				type = this.opts[ _MEDIA_ ];
			}
			if ( typeof type == 'function' )
			{
				type = type( $img );
			}

			//	Apply fix
			if ( type )
			{
				$img.addClass( _c[ 'image' ] );
			}
		}

		//	Find all images
		else
		{
			this.$wrapper
				.find( 'img' )
		    	.each(
			        function()
			        {
			        	that[ 'fit_' + _MEDIA_ ]( $(this) );
			        }
			    );
		}
	};


	//	Options
	$[ _PLUGIN_ ].defaults[ _MEDIA_ ] = true;


	//	Add to plugin
	$[ _PLUGIN_ ].media.push( _MEDIA_ );


	//	Private functions
	function _initMedia()
	{
		_mediaInitiated = true;
		_c = $[ _PLUGIN_ ]._c;
		_c.add( 'image' );
	}

})( jQuery );