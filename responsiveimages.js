/*
Author: Steven Masala
Twitter: @StevenMasala
Github: https://github.com/smasala/responsive-images-js
Licence: MIT https://tldrlegal.com/license/mit-license
Version: 0.3
Responsive Images JS
Browser compatibility: Modern browsers & IE10+. For IE9 please include matchMedia by Paul Irish.
usage:

	<img 	data-sizes="xs, s, m, l, xl" 
			data-srcset="
					http://placehold.it/100x100&text=xs,
					http://placehold.it/100x100&text=s,
					http://placehold.it/100x100&text=m,
					http://placehold.it/100x100&text=l,
					http://placehold.it/100x100&text=xl
				"
	/>

Note: data-sizes accepts predefined sizes or complete CSS media queries and the first match found wins.

	
*/

window.ResponsiveImagesJS = new (function(window, document, $, defaultSizes){
	
	var me = this;

	if(typeof window.matchMedia == "undefined"){
		console.error("matchMedia is required to run ResponsiveImagesJS");
		return;
	};

	me.version = "0.3";

	me.update = function(){
		var images = $("img[data-sizes][data-srcset]");	//find all images tags we can use
		var sizes, s, img, srcs, siz;
		for(var i = 0, l = images.length; i<l; i++){
			img = $(images[i]);
			srcs = img.attr("data-srcset").split(",");
			sizes = img.attr("data-sizes").split(",");	//get the value of the data-sizes attribute
			for(var ii = 0, ll = sizes.length; ii<ll; ii++){
				siz = sizes[ii].trim();
				s = defaultSizes[siz] || siz;	//either a predefined size is used a custom media query
				if(window.matchMedia(s).matches){
					img.attr("src", srcs[ii].trim());
				}
			}
		}
	};
	
	//init start
	$(document).ready(function(){
		me.update();
	});
	
	//on window resize
	$(window).resize(me.update);

})(this, this.document, jQuery, {
	xs:"only screen and (max-width : 480px)",
	s:"only screen and (min-width : 481px)",
	m:"only screen and (min-width : 768px)",
	l:"only screen and (min-width : 1280px)",
	xl:"only screen and (min-width : 1921px)"
});
