/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        // On the home page, move the blog icon inside the header 
        // for better relative/absolute positioning.

        //$("#blog-logo").prependTo("#site-head-content");

        // Randomly rotate the posts to make them look like a human
        // put down post it notes.
        // https://stackoverflow.com/questions/19126432/rotate-a-div-using-javascript
        var elements = $("article.preview");

        for (var i = 0; i < elements.length; i++) 
        {
            var alternator = 0;

            if(i % 2 == 0)
            {
                alternator = -1;
            }

            var deg = (Math.random() + alternator) * 0.25; 
            var div = elements[i];
            div.style.webkitTransform = 'rotate('+deg+'deg)';
            div.style.mozTransform    = 'rotate('+deg+'deg)';
            div.style.msTransform     = 'rotate('+deg+'deg)';
            div.style.oTransform      = 'rotate('+deg+'deg)';
            div.style.transform       = 'rotate('+deg+'deg)';
        }

        // Randomlly horizontally position the pin
        var elements = $(".pin");

        for (var i = 0; i < elements.length; i++) 
        {
            var amount = (Math.random() * 10); 
            var div = elements[i];
            div.style.left = 45 + amount + "%";
        }

        // Randomlly vertically position the pin
        var elements = $(".pin");

        for (var i = 0; i < elements.length; i++) 
        {
            var amount = 0 - (Math.random() * 20); 
            var div = elements[i];
            div.style.top = amount + "px";
        }

        // Randomly rotate the pin.
        var elements = $(".pin");

        for (var i = 0; i < elements.length; i++) 
        {
            var alternator = 0;

            if(i % 2 == 0)
            {
                alternator = -1;
            }

            var deg = (Math.random() + alternator) * 10; 
            var div = elements[i];
            div.style.webkitTransform = 'rotate('+deg+'deg)';
            div.style.mozTransform    = 'rotate('+deg+'deg)';
            div.style.msTransform     = 'rotate('+deg+'deg)';
            div.style.oTransform      = 'rotate('+deg+'deg)';
            div.style.transform       = 'rotate('+deg+'deg)';
        }
    });

}(jQuery));