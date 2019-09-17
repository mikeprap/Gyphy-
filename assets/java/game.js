var topics = ["football", "baseball", "soccer", "hockey"]




function displaySportsGif() {

    var sports = $(this).attr("data-sports");

    var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + sports + "&api_key=e8VuvuWDCwArUBIdlcHCID93dVh58Qnz&limit=10";






$.ajax({
    url: queryUrl,
    method: "GET"
  }).then(function(response) {
    console.log(queryUrl);
    
    console.log(response);

    var results = response.data;

    for (var i = 0; i < results.length; i++){

        var sportsDiv = $("<div>");

        
        

        var sportsImage = $("<img>");
        var p = $("<p>").text("rating: " + results[i].rating);

        sportsImage.attr("src", results[i].images.fixed_height.url);

        sportsDiv.append(p);
        sportsDiv.append(sportsImage);
        $("#sports-image-gifs").prepend(sportsDiv)

    }
  });

}
function renderButtons() {

    
    $("#buttons-view").empty();

    
    for (var i = 0; i < topics.length; i++) {

      
      var a = $("<button>");
      
      a.addClass("sports");
      
      a.attr("data-sports", topics[i]);
      
      a.text(topics[i]);
      
      $("#buttons-view").append(a);
    }
  }
$("#add-sport").on("click", function(event) {
    event.preventDefault();
    
    var sport = $("#sports-input").val().trim();

    
    topics.push(sport);

    renderButtons();
    
  });
  $(document).on("click", ".sports", displaySportsGif);
  renderButtons();

