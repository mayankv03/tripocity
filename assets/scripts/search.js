const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('q');
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://bing-entity-search.p.rapidapi.com/entities?q="+myParam+"%20City&mkt=en-us",
	"method": "GET",
	"headers": {
		"x-bingapis-sdk": "true",
		"x-rapidapi-host": "bing-entity-search.p.rapidapi.com",
		"x-rapidapi-key": "1d82552864msh6a14411ff94c93fp13610bjsnd4f6846c004c"
	}
};

$.ajax(settings).done(function (response) {
	var details = response.entities.value[0]
	console.log(details);
	newPageTitle = details.name + ' - Tripocity';
	document.title = newPageTitle;

	$('.des').append(details.description);
	$('.title').append(details.name+" - "+ details.entityPresentationInfo.entityTypeHints[0]);
	$('.seemore').html('<a href='+ details.webSearchUrl +' target="_blank" >See more...</a>');
	var image = document.createElement("IMG");
	image.alt = details.image.name;
	image.setAttribute('class', 'photo');
	image.src=  details.image.hostPageUrl;
	$('.image').html(image);
});