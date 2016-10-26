$(document).ready(function() {

var cities= ["NYC", "SF", "LA", "ATX", "SYD"];
var sel= document.getElementById("city-type");

for(var i=0; i <= 4; i++) {
$("#city-type").append($("<option>" + cities[i] + "</option>"))
}


$("#city-type").change(function () {
var city =$("#city-type").val()



if (city==="NYC") {
	$("body").css("background","url(nyc.jpg) no-repeat center center fixed");
}


else if (city==="SF") {
	$("body").css("background","url(sf.jpg) no-repeat center center fixed");

}

else if (city==="LA") {
	$("body").css("background","url(la.jpg) no-repeat center center fixed");

}

	
else if (city==="ATX") {
	$("body").css("background","url(austin.jpg) no-repeat center center fixed");

}

else if (city==="SYD") {
	$("body").css("background","url(sydney.jpg) no-repeat center center fixed");
}

});

});



//pseudocode for week 6:
//create an array with city names "NYC" "SF" "LA" "ATX" "SYD"
//set the variable to the cities array
//set the "for" loop to 4 and equal to for the 5 cities
//append the city type with the values in the array 
//when clicked have the images change in the background
//--the purpose is to enter the name of a location and have the background picture change 
//first have to set the initial value
//that value is the output
//if "nyc" then nyc.jpg
//if "SF" then sf.jpg
//if "la" then la.jpg
//if "atx" then austin.jpg
//if "syd" then sydney.jpg

