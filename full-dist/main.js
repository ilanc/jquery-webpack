var $ = require('jquery/dist/jquery');
$('body').append('<p>Success</p>');
console.log($.fn.jquery);
console.log($('p').html());
window.jQuery = $;
window.$ = $;
