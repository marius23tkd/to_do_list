var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function sizeOfList() {
	return document.getElementsByTagName("li").length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + " "));
	ul.appendChild(li);
	var delBtn = document.createElement("button");
	delBtn.appendChild(document.createTextNode("Delete"));
	li.appendChild(delBtn);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

//incercari:

// sizeOfList = document.getElementsByTagName("li").length;

function strikeThrough(){
for (i = 0; i < sizeOfList(); i++) {
	var liClick = document.getElementsByTagName("li")[i];
	liClick.addEventListener("click", function() {
		this.classList.toggle("done");
	})
}
}

function deleteElement(){
for (i = 0; i < sizeOfList(); i++) {
	var delBtnClick = document.querySelectorAll(".deleteListElement")[i];
	delBtnClick.addEventListener("click", function(){
		this.parentElement.remove(document.getElementsByTagName("li")[i]);
	})
}
}

ul.onclick = function(event){
	var target = getEventTarget(event);
	target.strikeThrough();
}