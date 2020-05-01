'use strict';
//Rest notation is used in the function definition (rest arguments go last)
//Spread notation is used in the function invocation
//Syntactically both are same but differentiated with the place of use
{
    //Lets say we have an array of songs but a function takes multiple strings
    function ILoveMultipleParams (one, two, three) {
        console.log("ILoveMultipleParams: ", one, two, three); 
    }
    let songsList = ["One", "Two", "Three"];
    ILoveMultipleParams(...songsList); //spread

    //Lets say we have are passing multiple parameters
    function ILoveOnlyOneParam (...songs) { //rest
        console.log("ILoveOnlyOneParam: ", songs);
    }
    ILoveOnlyOneParam("One", "Two", "Three");

    ((songs) => {
        console.log("Playing ", songs); // Playing undefined
        for(let song in songs) {
            console.log("Playing ", song);
        }
    })();

    ((...songs) => {
        console.log("Playing ", songs); // Playing []
        for(let song in songs) {
            console.log("Playing ", song);
        }
    })();
}
//Objects Structuring and Destructuring
{
    let firstName = "John", middleName = "M", lastName = "Smith";
    let user = {firstName, middleName, lastName}; //Structuring
    console.log(user); //{ firstName: 'John', middleName: 'M', lastName: 'Smith' }
}
{
    function getUser () {
        let firstName = "Mike", middleName = "H", lastName = "Goldman";
        return {firstName, middleName, lastName};
    }
    let {firstName, middleName, lastName} = getUser(); //Destructuring
    console.log(firstName); //Mike
    console.log(middleName); //H
    console.log(lastName);//Goldman
}
{
    function getUser () {
        let firstName = "Mike", middleName = "H", lastName = "Goldman";
        return {firstName, middleName, lastName};
    }
    let {middleName} = getUser();
    console.log(middleName);//H
    let {firstName, lastName} = getUser();
    console.log(firstName);//Mike
    console.log(lastName);//Goldman
}

//Array Destructuring
{
    let names = ["Mike", "John", "Kate", "William"];
    let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names; //Destructuring
    let [pickFirst, , , pickLast] = names;
    console.log(firstPerson, secondPerson, thirdPerson, fourthPerson); //Mike John Kate William
    console.log(pickFirst, pickLast); //Mike William

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let [firstNum, secondNum, ...remainingNums] = numbers;
    console.log(firstNum, secondNum, remainingNums); //1 2 [3,4,5,6,7,8,9,10]

    function GetColors () {
        return ["Red", "Green", "Blue"];
    }
    let [red, green, blue] = GetColors();
    let [...colors] = GetColors();
    console.log(red, green, blue, colors); //Red Green Blue [ 'Red', 'Green', 'Blue' ]

    for(let color of colors) {
        console.log(color); //for..of loop only if (typeof colors[Symbol.iterator]) is function
    }
}