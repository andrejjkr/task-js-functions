var gallery = {
		images: [
			{
				name: "cat",
				path: "images/cat.png",
				description: "The best cat ever",
				date: "2014-07-21T09:05:34.540Z",
			},
			{
				name: "dog",
				path: "images/dog.png",
				description: "The best dog ever",
				date: "2014-07-21T09:06:05.544Z",
			},
			{
				name: "giraffe",
				path: "images/giraffe.png",
				description: "",
				date: "2014-07-21T09:07:24.187Z",
			},
			{
				name: "dinosaur",
				path: "images/dinosaur.png",
				description: "The best dinosaur ever",
				date: "2014-07-21T09:07:47.683Z",
			}
		]
}

var show = function(){
	for (var i = 0; i <= gallery.images.length - 1; i++) {
		console.log(gallery.images[i]);
	};
};
show();
for (var i = 0; i <= gallery.images.length - 1; i++) {
		console.log(i+" (індекс картинки)  "+gallery.images[i].name);
};

console.log("");

console.log("Додати картинку: addImage('Назва картинки', 'Шлях до картинки', 'Описання', 'Дата'')") ;
console.log("Видалити картинку: removedImage('Індекс картинки з якої необхідно почати видалення елементів', 'Кількість картинок')") ;
console.log("Відсортувати картинки по зазначеному полю: sortImage('Назва поля')") ;
console.log("Відфільтрувати картинки по зазначеному полю: filtredImage('Назва поля')") ;
console.log("Перевести в JSON:  arrayToJson()") ;
console.log("функції першої галереї в контексті другої:  context()") ;
var addImage = function(name, path, description, date){
	this.name = name;
	this.path = path;
	this.description = description;
	this.date = date;
	gallery.images.push({
		name: name, path: path , description: description, date: date
	});
	console.log("Додано картинку "+this.name);
	show();
};

var removedImage = function(a, b){
	this.a = a;
	this.b = b;
	gallery.images.splice(a, b);
	show();
};

var sortImage = function(field){
	var sortImagesArray = new Array;
	for (var i = 0; i <= gallery.images.length - 1; i++) {
			sortImagesArray[i] = gallery.images[i];
		};

		var showSort = function(){
		for (var i = 0; i <= sortImagesArray.length - 1; i++) {
			console.log(sortImagesArray[i]);
		};
	};
	this.field = field;
	switch (field){
		case "name" :
			for (var i = 0; i <= sortImagesArray.length - 1; i++) {
				for (var j = 0; j <= sortImagesArray.length - 1-1; j++){
					if (sortImagesArray[j+1].name< sortImagesArray[j].name){
						var s = sortImagesArray[j+1]; sortImagesArray[j+1] = sortImagesArray[j]; sortImagesArray[j] = s
					}
				}
			} 
			show();
			console.log("Відсортовано по полю  "+this.field);
			showSort();
		break
		case "path" :
			for (var i = 0; i <= sortImagesArray.length - 1; i++) {
				for (var j = 0; j <= sortImagesArray.length - 1-1; j++){
					if (sortImagesArray[j+1].path< sortImagesArray[j].path){
						var s = sortImagesArray[j+1]; sortImagesArray[j+1] = sortImagesArray[j]; sortImagesArray[j] = s
					}
				}
			} 
			show();
			console.log("Відсортовано по полю  "+this.field);
			showSort();
		break
		case "description" :
			for (var i = 0; i <= sortImagesArray.length - 1; i++) {
				for (var j = 0; j <= sortImagesArray.length - 1-1; j++){
					if (sortImagesArray[j+1].description< sortImagesArray[j].description){
						var s = sortImagesArray[j+1]; sortImagesArray[j+1] = sortImagesArray[j]; sortImagesArray[j] = s
					}
				}
			} 
			show();
			console.log("Відсортовано по полю  "+this.field);
			showSort();
		break
		case "date" :
			for (var i = 0; i <= sortImagesArray.length - 1; i++) {
				for (var j = 0; j <= sortImagesArray.length - 1-1; j++){
					if (sortImagesArray[j+1].date< sortImagesArray[j].date){
						var s = sortImagesArray[j+1]; sortImagesArray[j+1] = sortImagesArray[j]; sortImagesArray[j] = s
					}
				}
			} 
			show();
			console.log("Відсортовано по полю  "+this.field);
			showSort();
		break
		default: console.log("Такого поля немає")
	}
};

var filtredImage = function(field){
	var filtredImagesArray = new Array;
	this.field = field;
	switch (field){
		case "name" :
			for (var i = 0; i <= gallery.images.length - 1; i++) {
				filtredImagesArray[i] = gallery.images[i].name; 
				}
			console.log("Відфільтровано по полю  "+this.field);
			console.log(filtredImagesArray);
		break
		case "path" :
			for (var i = 0; i <= gallery.images.length - 1; i++) {
				filtredImagesArray[i] = gallery.images[i].path; 
				}
			console.log("Відфільтровано по полю  "+this.field);
			console.log(filtredImagesArray);
		break
		case "description" :
			for (var i = 0; i <= gallery.images.length - 1; i++) {
				filtredImagesArray[i] = gallery.images[i].description; 
				}
			console.log("Відфільтровано по полю  "+this.field);
		console.log(filtredImagesArray);
		break
		case "date" :
			for (var i = 0; i <= gallery.images.length - 1; i++) {
				filtredImagesArray[i] = gallery.images[i].date; 
				}
			console.log("Відфільтровано по полю  "+this.field);
			console.log(filtredImagesArray);
		break
		default: console.log("Такого поля немає")
	};		
};

var arrayToJson = function(){
	var jsonText = JSON.stringify(gallery, null, 4);
	console.log(jsonText);
};
var serializedJson = function(){
	var jsonText = JSON.stringify(gallery, function(key, value){
		switch(key){
			case name: 
				return value.join("|");
			default:
				return value	
		}
	});
console.log(jsonText);
};

var context = function(){
	var newGallery = gallery;
	var argsAdd = ["pig", "images/pig.png", "The best pig ever", "2014-07-21T09:07:47.683Z"];
	var argsRemoved = [1, 1];
	var argsSort = ["name"];
	var argsFilter = ["path"]
	addImage.apply(addImage, argsAdd);
	removedImage.apply(removedImage, argsRemoved);
	sortImage.apply(sortImage, argsSort);
	filtredImage.apply(filtredImage, argsFilter);

};









