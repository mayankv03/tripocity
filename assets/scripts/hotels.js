// const urlParams = new URLSearchParams(window.location.search);
var locParam = urlParams.get('loc');

const settingsHotels = {
    "async": true,
    "crossDomain": true,
    "url": "https://hotels4.p.rapidapi.com/locations/v2/search?query=" + locParam + "&locale=en_US&currency=USD",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "hotels4.p.rapidapi.com",
        "x-rapidapi-key": "9485972bf8msh1e39f9634e531a2p138428jsn49b49a966508"
    }
};

// const error_message = "<link rel=\"stylesheet\" id=\"main-stylesheet\" data-version=\"1.1.0\" href=\"assets/css/shards-dashboards.1.1.0.min.css\"> <div class=\"error__content\" style=\"position:absolute;top:20%;left:15%;width:70%;\"> <h2>500</h2> <h3>Something went wrong!</h3> <p>Try searching for another close one.</p> <button type=\"button\" class=\"btn btn-accent btn-pill\" onClick=\"window.location.assign('/index.html')\">&larr; Go Back</button> </div>"

if (myParam.length <= 1) {
    $('.detailsHotels').html(error_message);
} else {
    $.ajax(settingsHotels).done(function(response) {
        console.log(response);
        if (response == undefined) {
            $('.detailsHotels').html(error_message);
        } else {
            var hotels = response.suggestions[1].entities
            console.log(hotels);

            for (let i = 0; i < hotels.length; i++) {
                // console.log(i);
                $('.detailsHotels').append('&nbsp;&nbsp;&nbsp;&nbsp;', hotels[i].name, '<hr>');
            }
        }
    });
}






// var cityName = prompt("Please enter City name", "<name goes here>");
function hotelDetails(cityName) {
    if (cityName != null) {
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://hotels4.p.rapidapi.com/locations/v2/search?query=" + cityName + "&locale=en_US&currency=INR",
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "hotels4.p.rapidapi.com",
                "x-rapidapi-key": "b0c2038476msh5eafbb3d1ee5b77p1accc4jsn6d571ee650a7"
            }
        };

        $.ajax(settings).done(function(response) {
            var hotels = response.suggestions[1].entities
            console.log(hotels);

            for (let i = 0; i < hotels.length; i++) {
                // console.log(i);
                $('#cityDetails').append(hotels[i].name, '<hr>');
            }
        });
    }
}

// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://hotels-com-provider.p.rapidapi.com/v1/hotels/search?checkin_date=2022-03-26&checkout_date=2022-03-27&sort_order=