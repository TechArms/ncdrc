var news = require("./static-data/news");
var messages = require("./static-data/news");
var annoucement = require("./static-data/news");

module.exports = {
	getNews: function(req, res) {
		res.send(news);
	}
}