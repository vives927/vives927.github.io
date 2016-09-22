var request = new XMLHttpRequest();
var ajaxContent = document.getElementById('ajaxContent');
 
request.onreadystatechange = function() {
    var DONE = 4;
    var OK = 200;
    if (request.readyState === DONE) {
        if (request.status === OK) {
            var parsed = JSON.parse(request.responseText);
            ajaxContent.innerHTML = '<h1>' + parsed.title + '</h1>' +
                '<p class="link">' + parsed.url + '</p>' +
                '<div class="image">' + parsed.image + '</div>';
        } else {
            console.log('An error occurred during your request: ' +  request.status + ' ' + request.statusText);
        } 
    }
}
 
request.open('Get', '/json/vanilla-ajax.json');

request.send();