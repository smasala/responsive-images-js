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

(function(e,t){if(typeof define!="function"||!define.amd)return t(e,e.document,e.jQuery);define(["jquery"],function(n){return t(e,e.document,n)})})(this,function(e,t,n){if(typeof e.matchMedia=="undefined"){console.error("matchMedia is required to run ResponsiveImagesJS");return}if(e.responsiveImages){console.error("responsive-images is already defined globally",e.responsiveImages);return}var r=new function(){var r=this,i={xs:"only screen and (max-width : 480px)",s:"only screen and (min-width : 481px)",m:"only screen and (min-width : 768px)",l:"only screen and (min-width : 1280px)",xl:"only screen and (min-width : 1921px)"};r.version="1.1.0",r.update=function(t){var t=typeof t=="string"?"#"+t:"",r=n("img"+t+"[data-sizes][data-srcset]"),s,o,u,a,f,l=!1;for(var c=0,h=r.length;c<h;c++){u=n(r[c]),a=u.attr("data-srcset").split(","),s=u.attr("data-sizes").split(",");for(var p=0,d=s.length;p<d;p++){f=s[p].trim(),o=i[f]||f;if(e.matchMedia(o).matches){l=!0,u.attr("src",a[p].trim());break}}l||u.attr("src",a[s.length-1].trim())}},n(t).ready(function(){r.update()}),n(e).resize(r.update)};e.responsiveImages=r});