var topics = ["football", "baseball", "soccer", "hockey"]

var queryUrl = "https://api.giphy.com/v1/gifs/trending?api_key=e8VuvuWDCwArUBIdlcHCID93dVh58Qnz";


$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });