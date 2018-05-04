$(document).ready(function () {
    
  var queryString;

  $("#searchBtn").on("click", function (){
      // event.preventDefault();
      queryString = $("#search").val();
      console.log(queryString);
      

      var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
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
        var data=result.response.docs;
        
        var limit = $("#number").val();

        for (var i=0; i<limit;i++) {
          var articleDiv=$("<div>");
          var titleDiv=$("<h3>");
          var sectionDiv=$("<p>");
          var dateDiv=$("<p>");
          var linkDiv=$("<p>"); //add <a> if dont work

          titleDiv.html(data[i].headline.main);
          sectionDiv.html(data[i].section);
          dateDiv.html(data[i].pub_date);
          
          articleDiv.append(titleDiv);
          articleDiv.append(sectionDiv);
          articleDiv.append(dateDiv);
          articleDiv.append(linkDiv);

          $("#articleShow").prepend(articleDiv);
        }


      });
  });     
});





