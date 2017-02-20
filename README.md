#Trunc

A jQuery plugin for truncating text by number of characters.

##How does it work
Plugin shortens text by number of characters, and then adds an ellipsis to the end. You can set max symbols for displaying. If you click on ellipsis, will be open full text.

##Usage
1. Install [jQuery](http://code.jquery.com/jquery-latest.min.js) on your page.
2. Incluse script `trunc.js` in footer.
3. Specify the elements that you would like to truncate as a jQuery selector, and then set the size parameter to the amount you would like to see.
```html
<script>
    $('.breaking-news').trunc(200);
</script>
```
If you don't set size for symbols, will be set default size 300 characters.

###Copyright
[MIT license](http://opensource.org/licenses/MIT) Copyright (c) 2017 Meline.
