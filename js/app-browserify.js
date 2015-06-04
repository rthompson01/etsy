"use strict";

// es5 polyfills, powered by es5-shim
require("es5-shim")
// es6 polyfills, powered by babel
require("babel/register")

var Promise = require('es6-promise').Promise
var $ = require('jquery')
var backbone = require('backbone'
	)

import * as templates from "./templates.js"
import * as 

document.body.innerHTML = (templates.home)data)

// just Node?
// var fetch = require('node-fetch')
// Browserify?
// require('whatwg-fetch') //--> not a typo, don't store as a var
console.log
// other stuff that we don't really use in our own code
// var Pace = require("../bower_components/pace/pace.js")

// require your own libraries, too!
// var Router = require('./app.js')

// window.addEventListener('load', app)

// function app() {
    // start app
    // new Router
var EtsyRouter = backbone.Router.extend({

	routes: {
		'home': 'home'
		'details/id': 'details'
		'*default': 'home'

	},

	home: function(){
		api.get trending().then((json) => {
		document.body.innerHTML = templates.home([])
	})
	},

	details: function(id){
		api.get details().then((json) => {
		var		
		
		document.body.innerHTML = templates.details("", "")
	})	
	},

	initialize: funtion(){
		api.get search().then((json) => 
		backbone.history.start()
	},

})

var router = new EtsyRouter()






















