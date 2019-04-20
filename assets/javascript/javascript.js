// This is our API key!
var APIKey = "A4bWaOPZD5ImgJGdWP0fiFgR4UMV4YUO";

// URL we need to query the database
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + APIKey;

// Create an AJAX call
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {

    // Log the queryURL
    console.log(queryURL);
});
