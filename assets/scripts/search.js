const urlParams = new URLSearchParams(window.location.search);
var myParam = urlParams.get('q');

const key1 = "1d82552864msh6a14411ff94c93fp13610bjsnd4f6846c004c";
const key2 = "71b0ecda23mshd3f1fc8ebcc7ce8p1d96aajsn3ea2dc905f77";

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://bing-entity-search.p.rapidapi.com/entities?q="+myParam+"%20City&mkt=en-us",
	"method": "GET",
	"headers": {
		"x-bingapis-sdk": "true",
		"x-rapidapi-host": "bing-entity-search.p.rapidapi.com",
		"x-rapidapi-key": key2
	}
};

const error_message = "<link rel=\"stylesheet\" id=\"main-stylesheet\" data-version=\"1.1.0\" href=\"assets/css/shards-dashboards.1.1.0.min.css\"> <div class=\"error__content\" style=\"position:absolute;top:20%;left:15%;width:70%;\"> <h2>500</h2> <h3>Something went wrong!</h3> <p>Try searching for another close one.</p> <button type=\"button\" class=\"btn btn-accent btn-pill\" onClick=\"window.location.assign('/index.html')\">&larr; Go Back</button> </div>"

if (myParam == null || myParam == '' || myParam.length == 1) {
	$('.details').html(error_message);
}
else{
	$.ajax(settings).done(function (response) {
		if (response.entities == undefined) {
			$('.details').html(error_message);
		}
		else{
			var details = response.entities.value[0];
			console.log(details);
			newPageTitle = details.name + ' - Tripocity';
			document.title = newPageTitle;
			$('.details').html("<link href=\"assets/css/sb-admin-2.min.css\" rel=\"stylesheet\"> <link rel=\"stylesheet\" href=\"assets/css/location.css\"> <div class=\"container mb-4\"><div class=\"card-header py-3\"><h3 class=\"m-0 font-weight-bold text-primary title\">"+details.name+" - "+ details.entityPresentationInfo.entityTypeHints[0]+"</h3> </div> <br> <img alt="+details.image.name+" class=\"photo\" src=\""+details.image.hostPageUrl+"\"></img> <h5>"+details.description+ " <a href="+ details.webSearchUrl +" target=\"_blank\" >See more...</a></h5></div>");
		}
	});
}