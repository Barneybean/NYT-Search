$(document).ready(function () {
    
    var queryString="obama";


    var url = "https://api.nytimes.com/svc/search/v2/articlesearch&limit=5.json";
    url += '?' + $.param({
      'api-key': "0a6c9e486b8c4e0baefa99974e943acd",
      'q': queryString,
      'begin_date': $("#start").val()+"0101",
      'end_date': $("#end").val()+"1231"
    });
    $.ajax({
      url: url,
      method: 'GET'
    }).done(function(result) {
      console.log(result);
    //   queryString = $("#search").val();




    });
});



