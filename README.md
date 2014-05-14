Responsive Images JS
====================

Simple jQuery powered function to enable responsive images

Tested with jQuery 2.x, however I don't see why it shouldn't work on earlier versions. Feel free to test and let me know.

Usage
-----

Couldn't be any easy to use

	<img 	data-sizes="xs, s, m, l, xl" 
			data-srcset="
					http://placehold.it/100x100&text=xs,
					http://placehold.it/100x100&text=s,
					http://placehold.it/100x100&text=m,
					http://placehold.it/100x100&text=l,
					http://placehold.it/100x100&text=xl
				"
	/>
	

* data-sizes: allows predefined sizes or actual css media queries.
* data-srcset: comma separated urls that are to be used in the same order as data-sizes

Demo
----

[demo]



[demo]:demo.html
