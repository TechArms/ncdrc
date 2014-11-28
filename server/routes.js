var home = require("./modules/home-controller");
var article = require("./modules/article-controller");

module.exports = function(app) {
	app.get("/homecarousels", home.getCarousels);

	app.get("/news", article.getNews);
}