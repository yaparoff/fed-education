

function handleError(error) {
    if (error) {
        return console.log('error');
    }
    return console.log('File was saved');
}

function readFile(file) {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
}

var categories = readFile('categories.json');
var goods = readFile('goods.json');

_.each(categories, function(category) {
	var list = [];
	_.each(goods, function(good) {
		if( _.indexOf(good.category_id, category.id, 0) + 1) {
			list.push(good);
		}
	});
	category.list = list;
});

console.log(categories);
fs.writeFile('result.json', JSON.stringify(categories, ' ', 4), handleError);