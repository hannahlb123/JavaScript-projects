console.log('Fibonacci sequence script starting...')

$('#btnReveal').click( () => {
    console.log('Button clicked')
    let max = Number($('#numInput').val()) 
    let numA = 1
    let numB = 1
    let numC = numA + numB
    let result = 0
    let numD = 1
    
    while (numD < max) {
        result = result + ', ' + numA
        numC = numB + numC
        numB = numA + numB
        numA = numC - numB
        numD = numD + 1
    }
    
    $('#txtOutput').text(result)

})