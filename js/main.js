$("#menu, nav").click(function () {
	console.log("test");
	$("#mobileNavCover").show();
	$("#mobileNav").animate({
		right: "0"
	}, 200);
});

$("#menu").click(function(){
	console.log("test");
}

);

$("#mobileNavCover, #mobileNav a, #merchthing").click(function () {
	$("#mobileNavCover").hide();
	$("#mobileNav").animate({
		right: "-50vw"
	}, 100);
	$("#merchthing").css("display", "none");
    $("#merchthing").css("background-color", "none");
    $("#popoutbio").css("display", "none");
    $("#popoutbio").css("background-color", "none");
});
$("body").on("click", ".merch", function () {

	$("#mobileNavCover").show();
	$("#merchthing").css("display", "inline-block");

});

$("body").on("click", ".bio", function () {

	$("#mobileNavCover").show();
	$("#popoutbio").css("display", "inline-block");

});

