var button = document.getElementById('cb');
var input = document.getElementById("listAdd");

function checkEmpty(inp){
    if(inp.value===""){
    	return false;
    }
    return true;
}

function addToList(addme){
   
	var l = document.getElementById('list');

	var li= document.createElement("li");
    
	li.appendChild(document.createTextNode(addme.value));

	l.appendChild(li);
	console.log("here")
	addme.value="";

}

button.addEventListener("click", function() {
	if(checkEmpty(input)){
		addToList(input);
	}
});

input.addEventListener("keypress", function(e) {
	if(checkEmpty && e.keyCode==13){
		addToList(input);
	}
})