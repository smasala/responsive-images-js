Responsive Images JS
====================

Simple jQuery powered function to enable responsive images

Tested with jQuery 2.x, however I don't see why it shouldn't work on earlier versions. Feel free to test and let me know.

Usage
-----

Couldn't be any easy to use (sizes from largest to smallest)

	<img 	data-sizes="xl, l, m, s, xs" 
			data-srcset="
					http://placehold.it/500x400&text=xl,
					http://placehold.it/400x300&text=l,
					http://placehold.it/300x200&text=m,
					http://placehold.it/200x150&text=s,
					http://placehold.it/150x100&text=xs
				"
	/>

	<img 	data-sizes="l, m" 
			data-srcset="
					http://placehold.it/400x300&text=l,
					http://placehold.it/300x200&text=m
				"
	/>
	

* data-sizes: allows predefined sizes or actual css media queries.
* data-srcset: comma separated urls that are to be used in the same order as data-sizes

Current predefined sizes:


		xs:"only screen and (max-width : 480px)",
		s:"only screen and (min-width : 481px)",
		m:"only screen and (min-width : 768px)",
		l:"only screen and (min-width : 1280px)",
		xl:"only screen and (min-width : 1921px)"


[Demo]
----


Contribution
------------

Feel free to contribute to this project and send me any pull request. Perhaps performance improvements, debate defaults screen sizes or even port a version that doesn't require jQuery!

Licence
-------

MIT

[Demo]:http://smasala.github.io/responsive-images-js/demo.html
