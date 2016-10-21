$(document).ready(function() {

//pseudocode:
//--the purpose is to enter the name of a location and have the background picture change 
//first have to set the initial value
//that value is the output
//if "new york" "nyc" "new york city" then nyc.jpg
//if "san fransico" "SF" or "bay area" then sf.jpg
//if "austin" or "atx" then austin.jpg
//if "sydney" or "syd" then sydney.jpg



$("#submit-btn").on("click", function (event) {
	event.preventDefault();
	var city= $("#city-type").val();



if (city==="new york" || city==="nyc" || city==="new york city") {
	$("body").css("background","url(nyc.jpg) no-repeat center center fixed");
}


else if (city==="san fransico" || city==="sf" || city==="bay area") {
	$("body").css("background","url(sf.jpg) no-repeat center center fixed");

}

else if (city==="los angeles" || city==="la" || city==="lax") {
	$("body").css("background","url(la.jpg) no-repeat center center fixed");

}

	
else if (city==="austin" || city==="atx") {
	$("body").css("background","url(austin.jpg) no-repeat center center fixed");

}

else if (city==="sydney" || city==="syd") {
	$("body").css("background","url(sydney.jpg) no-repeat center center fixed");
}






});
});