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

window.ResponsiveImagesJS=new function(e,t,n){var r=this;if(typeof e.matchMedia=="undefined"){console.error("matchMedia is required to run ResponsiveImagesJS");return}r.version="0.3";r.update=function(){var t=$("img[data-sizes][data-srcset]");var r,i,s,o,u;for(var a=0,f=t.length;a<f;a++){s=$(t[a]);o=s.attr("data-srcset").split(",");r=s.attr("data-sizes").split(",");for(var l=0,c=r.length;l<c;l++){u=r[l].trim();i=n[u]||u;if(e.matchMedia(i).matches){s.attr("src",o[l].trim())}}}};$(t).ready(function(){r.update()});$(e).resize(r.update)}(this,this.document,{xs:"only screen and (max-width : 480px)",s:"only screen and (min-width : 481px)",m:"only screen and (min-width : 768px)",l:"only screen and (min-width : 1280px)",xl:"only screen and (min-width : 1921px)"})
