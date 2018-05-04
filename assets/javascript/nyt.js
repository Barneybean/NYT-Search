$(document).ready(function () {
    
    var queryString="obama";

    
    
    
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "0a6c9e486b8c4e0baefa99974e943acd",
      'q': queryString
    });

    $.ajax({
      url: url,
      method: 'GET'
    }).done(function(result) {
      console.log(result);
    });
});



