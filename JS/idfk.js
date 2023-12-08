//external.js
//this function should hide and show images but for some reason it doesnt seem to work

function showhide(){
	var doc = document.getElementById("hidetask");
	if(doc.style.display ==="none"){ 
		doc.style.display = "block"; 
	}else{
		doc.style.display ="none";
	}
}

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
		doc.style.display = "block"; //assign it to be inline
	}else{
		doc.style.display ="none";
	}
}


function showhide() {
  console.log("Function showhide called"); //the console.log function gives a more detailed message when there is an error in code while inspecting the console, i got it from W3schools
  var doc = document.getElementById("hidetask");
  console.log("Element:", doc);
  if (doc.style.display === "none") {
    doc.style.display = "block";
  } else {
    doc.style.display = "none";
  }
}
