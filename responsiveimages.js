/*
Author: Steven Masala
Licence: MIT https://tldrlegal.com/license/mit-license
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
$(document).ready(function(){

	if(typeof window.matchMedia == "undefined"){
		console.error("mediaMatch is required to run ResponsiveImagesJS")
		return;
	}

	var defaultSizes = {
		xs:"only screen and (max-width : 480px)",
		s:"only screen and (min-width : 768px)",
		m:"only screen and (min-width : 1224px)",
		l:"only screen and (min-width : 1824px)",
		xl:"only screen and (min-width : 1921px)"
	}

	var responsive = function(){
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
	}
	
	//init start
	responsive();
	
	//on window resize
	$(window).resize(responsive);

});
