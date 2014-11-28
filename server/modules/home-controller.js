var carousel = require("./static-data/carousel");

module.exports = {
	getCarousels: function(req, res) {
		res.send(carousel);
	}
}