console.log('Hailstone script starting...')

$('#btnCreate').click(() => {
    let number = Number($('#numStart').val())
    let result = number

    while (number > 1) {

        if (number % 2 == 0) {
            result = result + ' , ' + (number / 2)
            number = number / 2

        } else {
            result = result + ' , ' + ((number * 3) + 1)
            number = (number * 3) + 1
        }

    }

    $('#txtSequence').text(result)

})