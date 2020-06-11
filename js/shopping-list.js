//Shopping list
console.log('Shopping list script starting...')

//create empty items variable
let items = []

//when the button 'add'is clicked
$('#btnAddItem').click( () => {
    console.log('Button add clicked')
    //get the inputted item
    let input = $('#txtAddItem').val()

    //put the input into the array
    items.push(input)

    //create empty list variable
    let list = ''

    //for each item
    items.forEach( (item) => {
        //empty listItem variable
        let listItem = ''

        //put each item into the html list
        listItem =
        '<li>' + item + '</li>'

        list += listItem
    })

    //output the list
    $('#lstShoppingList').html(list)
})

//when remove button is clicked
$('#btnRemove').click( () => {
    console.log('Button remove clicked')
    //take inputeed number
    let input = $('#numRemove').val()
    console.log('input ' + input)
    //make index the inputted number
    let index = Number(input)

    console.log('index ' + index)
    //cut out of the array the item with the number inputted
    items.splice((index - 1), 1)

    //create empty list variable
    let list = ''

    //for each item
    items.forEach( (item) => {
        //empty listItem variable
        let listItem = ''

        //listItem is now in the html list
        listItem =
        '<li>' + item + '</li>'

        //add to the list the new list item
        list += listItem
    })

    //output to the webpage
    $('#lstShoppingList').html(list)

})


