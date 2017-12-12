/*!
@author Steven Masala [me@smasala.com]
Github: https://github.com/smasala/responsive-images-js
@license: MIT https://tldrlegal.com/license/mit-license
@version: 1.1.0
Responsive Images JS
Browser compatibility: Modern browsers & IE10+. For IE9 please include matchMedia by Paul Irish.
usage (sizes biggest to smallest):

	<img 	data-sizes="xl, l, m, s, xs" 
			data-srcset="
					http://placehold.it/500x400&text=xl,
					http://placehold.it/400x300&text=l,
					http://placehold.it/300x200&text=m,
					http://placehold.it/200x150&text=s,
					http://placehold.it/150x100&text=xs
				"
	/>

	<img 	data-sizes="xl, l, m" 
			data-srcset="
					http://placehold.it/500x400&text=xl,
					http://placehold.it/400x300&text=l,
					http://placehold.it/300x200&text=m
				"
	/>

Note: data-sizes accepts predefined sizes or complete CSS media queries and the first match found wins.
*/

(function(root, factory) {
	
  "use strict";

  if (typeof define === "function" && define.amd) {
    define(["jquery"], function($) {
    	return factory(root, root.document, $);
    });
  } else {
	  return factory(root, root.document, root.jQuery);
  }

})(this, function(window, document, $) {
	
	if(typeof window.matchMedia == "undefined"){
		console.error("matchMedia is required to run ResponsiveImagesJS");
		return;
	}else if(window.responsiveImages){
		console.error("responsive-images is already defined globally", window.responsiveImages);
		return;
	};
	
	var responsiveImages = new function(){
		
		var me = this,
		defaultSizes =  {
				xs:"only screen and (max-width : 480px)",
				s:"only screen and (min-width : 481px)",
				m:"only screen and (min-width : 768px)",
				l:"only screen and (min-width : 1280px)",
				xl:"only screen and (min-width : 1921px)"
			};
		
		me.version = "1.1.0";

		/**
		 * @method update
		 * @param id {String} optional - to update image for a given id
		 */
		me.update = function(id){
			var id = typeof id == "string" ? "#" + id : "",
					images = $("img"+id+"[data-sizes][data-srcset]");	//find all images tags we can use
			var sizes, s, img, srcs, siz, matchFound = false;
			for(var i = 0, l = images.length; i<l; i++){
				img = $(images[i]);
				srcs = img.attr("data-srcset").split(",");
				sizes = img.attr("data-sizes").split(",");	//get the value of the data-sizes attribute
				for(var ii = 0, ll = sizes.length; ii<ll; ii++){
					siz = sizes[ii].trim();
					s = defaultSizes[siz] || siz;	//either a predefined size is used a custom media query
					if(window.matchMedia(s).matches){
						//first match wins 
						matchFound = true;
						img.attr("src", srcs[ii].trim());	
						break;
					}
				}
				if (!matchFound) {
					img.attr("src", srcs[sizes.length - 1].trim());
				}
			}
		};
		
		//init start
		$(document).ready(function(){
			me.update();
		});
		
		//on window resize
		$(window).resize(me.update);
	} 
	
	//define globally
	window.responsiveImages = responsiveImages;
	
});
