var c = 0
var o = 0
var s = 0

$(document).ready(function(){

	$("#choc").on("click", function(){
		c = c+1 ;
		Cookies.set("chocolate", c);
		$("#choc_count").text(Cookies.get("chocolate"));
	});

	$("#oreo").on("click", function(){
		o = o+1 ;
		Cookies.set("oreo", o);
		$("#oreo_count").text(Cookies.get("oreo"));
	});

	$("#samoa").on("click", function(){
		s = s+1 ;
		Cookies.set("samoa", s);
		$("#samoa_count").text(Cookies.get("samoa"));
	});


	$("#guilty").on("click", function(){
		Cookies.set("chocolate", 0)
		Cookies.set("oreo", 0)
		Cookies.set("samoa", 0)
		$("#choc_count").text(Cookies.get("chocolate"))
		$("#oreo_count").text(Cookies.get("oreo"))
		$("#samoa_count").text(Cookies.get("samoa"))
		console.log("Cookies cleared!")

	});
		
});