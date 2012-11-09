function calculateScore(currentGrade, weight, counterweight,  desiredGrade) {
    return (desiredGrade*(counterweight+weight) - (counterweight)*currentGrade) / weight;
}

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode != 46)
        return false;

    return true;
}

function updateScoreFinal() {
    var current = parseFloat(document.getElementById("final_current").value);
    var weight = parseFloat(document.getElementById("final_weight").value) / 100; //Reported as whole number
    var desired = parseFloat(document.getElementById("final_desired").value);
    var needed = calculateScore(current, weight, 1.0-weight, desired);

    needed = Math.round(needed * 100) / 100; 

    var response = document.getElementById("final_result");
    response.innerHTML = needed+"%";
}

function updateScoreMidterm() {
    var current = parseFloat(document.getElementById("midterm_current").value);
    var weight = parseFloat(document.getElementById("midterm_weight").value) / 100; //Reported as whole number
    var counterweight = parseFloat(document.getElementById("midterm_counterweight").value) / 100; //Reported as whole number
    var desired = parseFloat(document.getElementById("midterm_desired").value);
    var needed = calculateScore(current, weight, counterweight,desired);

    needed = Math.round(needed * 100) / 100;

    var response = document.getElementById("midterm_result");
    response.innerHTML = needed+"%";
}

$(document).ready(function(){
	$('.btn').click(function(event){
		$('.calculator').hide(0);
		toShow = $(event.target).attr('id');
		toShow += "-calculator";
		$("#"+toShow).show(0);
	});
})