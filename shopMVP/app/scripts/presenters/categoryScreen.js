var Presenter = require('common/Presenter.js');
var categoryModel = require('model/categoryModel.js');
var templateCategory = require('templates/category.html');

var CategoryScreen = function() {
	Presenter.call(this, templateCategory);
};

CategoryScreen.prototype = Object.create(Presenter.prototype);

CategoryScreen.prototype.init = function(element) {
    var data = categoryModel.get();
    this.render(element, data);
}
    



module.exports = new CategoryScreen();