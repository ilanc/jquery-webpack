var $ = require('jquery/src/core');
require('jquery/src/core/init');
require('jquery/src/manipulation');

$('body').append('<p>Success</p>');
console.log($.fn.jquery);
console.log($('p').html());

require('./other');
