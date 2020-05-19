//Mad Libs
console.log('Mad Libs script starting...')

//when button MadLib is clicked...
$('#btnMadLib').click(() => {
    //get the input txtExcl and call it 'exclamation' for the rest of this code
    let exclamation = $('#txtExcl').val()
    //get the input txtAdv and call it 'adverb' for the rest of this code
    let adverb = $('#txtAdv').val()
    //get the input txtNoun and call it 'noun' for the rest of this code
    let noun = $('#txtNoun').val()
    //get the input txtAdj and call it 'adjective' for the rest of this code
    let adjective = $('#txtAdj').val()

    //In the paragraph 'txtOutput' the text displayed will be...
    $('#txtOutput').text('You say ' + exclamation + " " + adverb + ' as you jump into your ' + noun + ' and zoom away with your ' + adjective + ' sidekick.')
})