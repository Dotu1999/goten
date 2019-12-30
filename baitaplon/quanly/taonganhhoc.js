$(document).ready(function(){ 

$('.create_majorss').click(function(event) {
	$('#black').toggle();
	$('.create_majors').css('display','flex');
})

$('#cancel,#cancel2,#cancel1').click(function(event) {
	$('#black').toggle();
	$('.create_majors').css('display','none');
	$('.create_subject').css('display','none');
	$('.change_subject').css('display','none');
})

$('.create_subjects').click(function(event) {
	$('#black').toggle();
	$('.create_subject').css('display','flex');
});

$('.change').click(function(event) {
	$('#black').toggle();
	$('.change_subject').css('display','flex');
});

})//