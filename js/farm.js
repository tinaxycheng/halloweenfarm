


$('.person').click(function() {
    $('.pumpkin').addClass('drop');
});


var audio = document.getElementById("brook");
var audio1 = document.getElementById("autumn_insect");
var audio2 = document.getElementById("iron_door");
var audio3 = document.getElementById("wind_bell");

$("#pumpkin-0").mouseenter(function() {
	audio.play();
});
$("#pumpkin-1").mouseenter(function() {
	audio1.play();
});
$("#pumpkin-2").mouseenter(function() {
	audio2.play();
});
$("#pumpkin-3").mouseenter(function() {
	audio3.play();
});
