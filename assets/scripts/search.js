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
	$('.details').html("<div class=\"card shadow mb-4\"><div class=\"card-header py-3\"><h6 class=\"m-0 font-weight-bold text-primary title\">"+details.name+" - "+ details.entityPresentationInfo.entityTypeHints[0]+"</h6></div><div class=\"card image\"><img alt="+details.image.name+" class=\"photo\" src=\""+details.image.hostPageUrl+"\"></img></div><div class=\"card-body des right\">"+details.description+ " <a href="+ details.webSearchUrl +" target=\"_blank\" >See more...</a></div></div>");
});