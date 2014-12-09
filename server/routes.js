var home = require("./modules/home-controller");
var article = require("./modules/article-controller");
var gallery = require("./modules/gallery-controller");

module.exports = function(app) {
	app.get("/menu", home.getMenus);

	app.get("/homecarousels", home.getCarousels);

	app.get("/article/news", article.getNews);

	app.get("/article/news/:id", article.getNewsById);

	app.get("/article/annoucements", article.getAnnoucements);

	app.get("/article/annoucements/:id", article.getAnnoucementById);

	app.get("/article/messages", article.getMessages);

	app.get("/article/messages/:id", article.getMessageById);

	app.get("/galleries", gallery.getGalleries);

	app.get("/galleries/:id", gallery.getGalleriesById);
}	