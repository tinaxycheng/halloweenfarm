/**
 * ytmenu.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var YTMenu = (function() {
	

	function init() {
		
		[].slice.call( document.querySelectorAll( '.dr-menu' ) ).forEach( function( el, i ) {

			var trigger = el.querySelector( 'div.dr-trigger' ),
				icon = trigger.querySelector( 'span.dr-icon-menu' ),
				task = el.getElementsByTagName('li')[0]
				open = false;
				time = false;
			var diamond = document.querySelectorAll("div.icon");

			trigger.addEventListener( 'click', function( event ) {
				if( !open ) {
					el.className += ' dr-menu-open';
					diamond.className += ' dr-open';
					open = true;
				}
			}, false );

			task.addEventListener( 'click', function( event ) {
				if( !time ) {
					el.className += ' dr-time';
					time = true;
				}
			}, false );
			
			icon.addEventListener( 'click', function( event ) {
				if( open ) {
					event.stopPropagation();
					open = false;
					time = false;
					el.className = el.className.replace(/\bdr-menu-open\b/,'');
					return false;
				}
			}, false );




		} );

	}

	init();

})();


(function(){
 	var texttotal = ["Water the plant","Breakfast","PlaningBook","Get dressed"]

  	
  var handler = function(i) {

	var $ = function (selector) {
    return document.querySelector(selector);
  		};
	var li = document.createElement('li');
	var x = document.createElement("SPAN");
	var a = document.createElement("A");
	a.className = "dr-icon dr-icon-user";
	var time = document.createTextNode('20min');
	    var textnode = texttotal[i];
	    var text = document.createTextNode(textnode);
	    var shapegreyall = document.querySelectorAll('#color_grey');
	    var shapegrey = shapegreyall[i];


		function addlist(el, time) {
				x.append(time);
				li.append(a);
				li.appendChild(el);
				li.append(x);
				$('#links').appendChild(li);
		};

		shapegrey.onclick = function(){
				addlist(text, time);
			};
	};
handler(0);
handler(1);
handler(2);
handler(3);
})();


