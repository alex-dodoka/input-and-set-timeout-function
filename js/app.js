setTimeout(getVariable, 5000);

function getVariable() {
    let inputData = $('#upperCase').val();
    getPrintRes(getUpperCase(inputData));
}


function getUpperCase(variable) {
    return variable.toUpperCase();
}
function getPrintRes(readyString) {
    $('#place-for-print').html(readyString);
}