var topics = ["football", "baseball", "soccer", "hockey"]




$("button").on("click", function() {

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

        var p = $("<p>").text("rating: " + results[i].rating);
        

        var sportsImage = $("<img>");

        sportsImage.attr("src", results[i].images.fixed_height.url);

        sportsDiv.append(p);
        sportsDiv.append(sportsImage);
        $("#sports-image-gifs").prepend(sportsDiv)

    }
  });

});