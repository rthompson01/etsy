var $ require('jquery'),
	api key = 'etsy API key'
	search = (q, key) => 'search for key on etsy api page'
	details = (id, key) =>'search for key on etsy api page'
	trending = (key) =>'search for key on etsy api page'


export var getTrending = () => {
	return $.getJSON(trending(apikey))
}

export var details = () => {
	return $.getJSON(details(id, apikey))
}
export var search = () => {
	return $.getJSON(search(q, apikey))
}