$(document).ready(function(){

$.get('/games.json', function(data, status){
    var source = $('#game-sections-template').html();
    var template = Handlebars.compile(source);
    var html = template(data);
    $('#game-sections').html(html);
});

});

