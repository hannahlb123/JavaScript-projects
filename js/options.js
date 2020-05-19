//options

console.log('Options script starting...')

$('#btnCheck').click( () => { 
        let result = ''
    if ($('#radChocolate').prop('checked')) {
        result = 'You chose chocolate. Good choice.'
    }  else if ($('#radVanilla').prop('checked')) {
        result = "You're WRONG! Chocolate is better..... unless it's ice cream."
    }  else {
        result = 'You did not choose anything. Stop trying to make this website fail.'
    }

    $('#txtResult').text(result)

})