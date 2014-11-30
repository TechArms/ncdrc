var menu = require("./static-data/menu");
var carousel = require("./static-data/carousel");

module.exports = {
	getMenus: function(req, res) {
		res.send(menu);
	}, 
	getCarousels: function(req, res) {
		res.send(carousel);
	},
}