var news = require("./static-data/news");
var messages = require("./static-data/news");
var annoucements = require("./static-data/annoucements");
var messages = require("./static-data/messages");
var _ = require("underscore");

module.exports = {
	getNews: function(req, res) {
		res.send(news);
	},
	getNewsById: function(req, res) {
		getArticleById(news, req, res);
	},
	getAnnoucements: function(req, res) {
		res.send(annoucements);		
	},
	getAnnoucementById: function(req, res) {
		getArticleById(annoucements, req, res);
	},
	getMessages: function(req, res) {
		res.send(messages);		
	},
	getMessageById: function(req, res) {
		getArticleById(messages, req, res);
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