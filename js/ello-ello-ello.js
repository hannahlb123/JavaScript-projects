//'ello 'ello 'ello
console.log('Ello script starting...')

$('#btnSay').click( () => {
    let reps = $('#numOut').val()
    let gfhg = Number(reps)
    let result = ''
    


    let i = 0
    while (i < reps) {
        result = result + "'ello "
        i = i + 1
    }

    $('#txtOutput').text(result)
})
