/*!
@author Steven Masala [me@smasala.com]
Github: https://github.com/smasala/responsive-images-js
@license: MIT https://tldrlegal.com/license/mit-license
@version: 0.3
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

Note: data-sizes accepts predefined sizes or complete CSS media queries and the first match found wins.

	
*/

window.ResponsiveImagesJS=new function(e,t,n,r){var i=this;if(typeof e.matchMedia=="undefined"){console.error("matchMedia is required to run ResponsiveImagesJS");return}i.version="0.3";i.update=function(){var t=n("img[data-sizes][data-srcset]");var i,s,o,u,a;for(var f=0,l=t.length;f<l;f++){o=n(t[f]);u=o.attr("data-srcset").split(",");i=o.attr("data-sizes").split(",");for(var c=0,h=i.length;c<h;c++){a=i[c].trim();s=r[a]||a;if(e.matchMedia(s).matches){o.attr("src",u[c].trim());break}}}};n(t).ready(function(){i.update()});n(e).resize(i.update)}(this,this.document,jQuery,{xs:"only screen and (max-width : 480px)",s:"only screen and (min-width : 481px)",m:"only screen and (min-width : 768px)",l:"only screen and (min-width : 1280px)",xl:"only screen and (min-width : 1921px)"})
