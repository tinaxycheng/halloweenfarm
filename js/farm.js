


$('.pumpkin-0').click(function() {
    $('.pumpkin-0').animate({'top':'600px'}, 100);
});
$('.pumpkin-1').click(function() {
    $('.pumpkin-1').animate({'top':'600px'}, 100);
});
$('.pumpkin-2').click(function() {
    $('.pumpkin-2').animate({'top':'600px'}, 100);
});
$('.pumpkin-3').click(function() {
    $('.pumpkin-3').animate({'top':'500px'}, 100);
});
$("#eyeglass").mouseenter(function() {
	$(this).animate({'opacity':'0.3'}, 100);
});
$("#tie").mouseenter(function() {
	$(this).animate({'opacity':'0.5'}, 100);
});

var open = false;
var home =  document.getElementById("home");

home.addEventListener( 'click', function( event ) {
				if( !open ) {
				$(".homefarmhours").show();
					open = true;
				} 
				else{
				$(".homefarmhours").hide();
					open = false;
				};
			}, false );


var pickyourown =  document.getElementById("pickyourown");

pickyourown.addEventListener( 'click', function( event ) {
				if( !open ) {
				$(".pickyourown").show();
					open = true;
				} 
				else{
				$(".pickyourown").hide();
					open = false;
				};
			}, false );


var festival =  document.getElementById("festival");

festival.addEventListener( 'click', function( event ) {
				if( !open ) {
				$(".festival").show();
					open = true;
				} 
				else{
				$(".festival").hide();
					open = false;
				};
			}, false );

var contact =  document.getElementById("contact");

contact.addEventListener( 'click', function( event ) {
				if( !open ) {
				$(".contact-info").show();
					open = true;
				} 
				else{
				$(".contact-info").hide();
					open = false;
				};
			}, false );




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
