/*!
@author Steven Masala [me@smasala.com]
Github: https://github.com/smasala/responsive-images-js
@license: MIT https://tldrlegal.com/license/mit-license
@version: 1.0.1
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

window.ResponsiveImagesJS=new function(e,t,n,r){var i=this;if(typeof e.matchMedia=="undefined"){console.error("matchMedia is required to run ResponsiveImagesJS");return}i.version="1.0.1";i.update=function(t){var i=n("img"+(t?"#"+t:"")+"[data-sizes][data-srcset]");var s,o,u,a,f;for(var l=0,c=i.length;l<c;l++){u=n(i[l]);a=u.attr("data-srcset").split(",");s=u.attr("data-sizes").split(",");for(var h=0,p=s.length;h<p;h++){f=s[h].trim();o=r[f]||f;if(e.matchMedia(o).matches){u.attr("src",a[h].trim());break}}}};n(t).ready(function(){i.update()});n(e).resize(i.update)}(this,this.document,jQuery,{xs:"only screen and (max-width : 480px)",s:"only screen and (min-width : 481px)",m:"only screen and (min-width : 768px)",l:"only screen and (min-width : 1280px)",xl:"only screen and (min-width : 1921px)"})
