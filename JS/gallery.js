//external.js
//this function should hide and show images 

function showhide(){
	console.log("Function showhide called"); //the console.log function gives a more detailed message when there is an error in code while inspecting the console, i got it from W3schools
	var doc = document.getElementById("hidetask");
	if(doc.style.display ==="none"){ // doc.style.display checks the display style, and using three equal sign it strictly makes it none. 
		doc.style.display = "block"; // continue from comment above. doc.style.display would make it visible, but then the else tag below ensures it stays hidden on load
	}else{
		doc.style.display ="none";
	}
}

//this then continues for each of the functions as they all do the same thing

function showhide2(){
	var doc = document.getElementById("hidetask2");
	if(doc.style.display ==="none"){ 
		doc.style.display = "block"; 
	}else{
		doc.style.display ="none";
	}
}

function showhide3(){
	var doc = document.getElementById("hidetask3");
	if(doc.style.display ==="none"){ 
		doc.style.display = "block"; 
	}else{
		doc.style.display ="none";
	}
}

function showhide4(){
	var doc = document.getElementById("hidetask4");
	if(doc.style.display ==="none"){ 
		doc.style.display = "block"; 
	}else{
		doc.style.display ="none";
	}
}


