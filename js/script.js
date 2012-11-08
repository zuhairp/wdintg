function calculateScore(currentGrade, finalWeight, desiredGrade) {
    return (desiredGrade - (1 - finalWeight)*currentGrade) / finalWeight;
}

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode != 46)
        return false;

    return true;
}

function updateScore() {
    var current = parseFloat(document.getElementById("current").value);
    var weight = parseFloat(document.getElementById("weight").value) / 100; //Reported as whole number
    var desired = parseFloat(document.getElementById("desired").value);
    var needed = calculateScore(current, weight, desired);

    needed = Math.round(needed * 100) / 100;

    var response = document.getElementById("result");
    response.innerHTML = needed+"%";
}