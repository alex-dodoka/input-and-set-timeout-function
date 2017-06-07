function getVariable() {
    let inputData = $('#upperCase').val();
    printRes(upperCase(inputData));
}


function upperCase(variable) {
    return variable.toUpperCase();
}
function printRes(readyString) {
    $('#place-for-print').html(readyString);
}
