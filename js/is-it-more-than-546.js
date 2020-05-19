//Is it more than 2
console.log('Is it more than 2 script starting...')

$('#btnCheck').click( () => {
    let input = $('#numNumber').val()
    let number = Number(input)

    let result = ''

    if (number > 546) {
        result = number + ' is more than 546.'
    } else if (number < 546) {
        result = number + ' is less than 546.'
    } else {
        result = number + ' is 546.'
    }

    $('#txtResult').text(result)
})