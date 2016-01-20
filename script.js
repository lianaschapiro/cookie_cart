$(document).ready(function(){

	$("#choc_count").text(Cookies.get("chocolate"))
	$("#oreo_count").text(Cookies.get("oreo"))
	$("#samoa_count").text(Cookies.get("samoa"))

	if (Cookies.get("chocolate") == 0) {
		c = parseInt(0)
	} else {
		c = Cookies.get("chocolate")
	}	

	if (Cookies.get("oreo") == 0) {
		o = parseInt(0)
	} else {
		o = Cookies.get("oreo")
	}

	if (Cookies.get("samoa") == 0) {
		s = parseInt(0)
	} else {
		s = Cookies.get("samoa")
	}	

	$("#choc").on("click", function(){
		c = parseInt(c) + 1 ;
		Cookies.set("chocolate", c);
		$("#choc_count").text(Cookies.get("chocolate"));
	});


	$("#oreo").on("click", function(){
		o = parseInt(o) + 1 ;
		Cookies.set("oreo", o);
		$("#oreo_count").text(Cookies.get("oreo"));
	});

	$("#samoa").on("click", function(){
		s = parseInt(s) + 1 ;
		Cookies.set("samoa", s);
		$("#samoa_count").text(Cookies.get("samoa"));
	});


	$("#guilty").on("click", function(){
		Cookies.set("chocolate", 0)
		Cookies.set("oreo", 0)
		Cookies.set("samoa", 0)
		c = 0
		o = 0
		s = 0
		$("#choc_count").text(Cookies.get("chocolate"))
		$("#oreo_count").text(Cookies.get("oreo"))
		$("#samoa_count").text(Cookies.get("samoa"))
		console.log("Cookies cleared!")

	});
		
});