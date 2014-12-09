var galleries = require("./static-data/galleries");
var _ = require("underscore");

module.exports = {
    getGalleries: function(req, res) {
        var result = _.map(galleries, function(gallery) {
            return {
                id: gallery.id,
                name: gallery.name,
                desc: gallery.desc,
                face: gallery.face
            };
        });
        res.send(result);
    },
    getGalleriesById: function(req, res) {
        getGalleriesById(req, res);
    }

}

var getGalleriesById = function(req, res) {
    var id = req.params.id;

    if (isNaN(id)) {
        res.status(400).send("Bad input");
        return;
    }
    var foundGallery = _.find(galleries, function(n) {
        return n.id == id;
    });
    if (!foundGallery) {
        res.status(404).send("Not found");
        return;
    }

    res.send(foundGallery);
}
