var home = require("./modules/home-controller");
var article = require("./modules/article-controller");

module.exports = function(app) {
	app.get("/menu", home.getMenus);

	app.get("/homecarousels", home.getCarousels);

	app.get("/article/news", article.getNews);

	app.get("/article/news/:id", article.getNewsById);

	app.get("/article/annoucements", article.getAnnoucement);

	app.get("/article/annoucements/:id", article.getAnnoucementById);
}	