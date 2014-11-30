var news = require("./static-data/news");
var messages = require("./static-data/news");
var annoucement = require("./static-data/annoucement");
var _ = require("underscore");

module.exports = {
	getNews: function(req, res) {
		res.send(news);
	},
	getNewsById: function(req, res) {
		getArticleById(news, req, res);
	},
	getAnnoucement: function(req, res) {
		res.send(annoucement);		
	},
	getAnnoucementById: function(req, res) {
		getArticleById(annoucement, req, res);
	}
}

var getArticleById = function(article, req, res) {
	var id = req.params.id;

	if(isNaN(id)) {
		res.status(400).send("Bad input");
		return;
	}
	var foundArticle = _.find(article, function(n) {
		return n.id == id;
	});
	if(!foundArticle) {
		res.status(404).send("Not found");
		return;
	}

	res.send(foundArticle);
}