//calculator
console.log('Calculator script starting...')

$('#btnCalculate').click( () => {

    let numA = $('#numInput1').val()
    let numB = $('#numInput2').val()
    numA = Number(numA)
    numB = Number(numB)

    if ($('#radAdd').prop('checked')) {
        result = numA + numB
    } else if ($('#radSubtract').prop('checked')) {
        result = numA - numB
    } else if ($('#radMultiply').prop('checked')) {
        result = numA * numB 
    } else if ($('#radDivide').prop('checked')) {
        result = numA / numB }

    $('#txtAnswer').text(result)

})