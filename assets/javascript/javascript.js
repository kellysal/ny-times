// This is our API key!
var APIKey = "A4bWaOPZD5ImgJGdWP0fiFgR4UMV4YUO";

// URL we need to query the database
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=" + APIKey;

var searchTerm = "";
var numRecords = 2;
var startYear = 2003;
var endYear = 4;

// Create an AJAX call
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {

    // Log the queryURL
    console.log(queryURL);
    console.log(response);
    console.log(numRecords);


});
