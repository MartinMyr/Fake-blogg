
$( document ).ready(function() {

  var posts;
  
      fetch("http://blogg.adventurehero.se/wp-json/wp/v2/posts")
      .then(function(response)
      {
          return response.json();
      })
      .then(function(postsCollection)
      {
        posts = postsCollection;

      

console.log(posts)
    
    for (i = 0; i < 6; i++) { 
      var card = " <div class='col-6-sm text-center'>"
      card += "<div class='card' style='width: 20rem;'>"
      card += "<img class='card-img-top' src='" + posts[i].better_featured_image.source_url + "' alt='Card image cap'>"
      card += "<div class='card-body'>"
      card +="<h4 class='card-title'>"+posts[i].title.rendered +"</h4>"
      card += "<p class='card-text'>"+posts[i].excerpt.rendered.substring(0,155) +"</p>"
      card += "<a href='"+posts[i].link+"' class='btn btn-primary'>Go somewhere</a></div></div></div>";
       $(".row").append(card);
       
      }
    
});

});