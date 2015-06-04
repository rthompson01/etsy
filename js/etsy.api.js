var $ require('jquery'),
	api key = 'umdtagccauk04zf4wpaiv5z0'
	search = (q, key) => 'umdtagccauk04zf4wpaiv5z0'
	details = (id, key) =>'umdtagccauk04zf4wpaiv5z0'
	trending = (key) =>'umdtagccauk04zf4wpaiv5z0'


export var getTrending = () => {
	return $.getJSON(trending(apikey))
}

export var details = () => {
	return $.getJSON(details(id, apikey))
}

export var search = () => {
	return $.getJSON(search(q, apikey))
}