var topics = ["football", "baseball", "soccer", "hockey"]

var queryUrl = "https://api.giphy.com/v1/gifs/trending?api_key=e8VuvuWDCwArUBIdlcHCID93dVh58Qnz";



$("button").on("click", function(){
    var sports = $(this).attr("data-sports");

    var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + sports + "&api_key=e8VuvuWDCwArUBIdlcHCID93dVh58Qnz&limit=10";






$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(queryUrl);
    
    console.log(response);

    var results = response.data;

    for (var i = 0; i < results.length; i++){

        var sportsDiv = $("<div>");

    }
  });

});