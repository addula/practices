"use strict";
/*
    ES8 (or) ES2017 introduces below features
    - Object.values & Object.entries & getOwnPropertyDescriptors
    - String extensions
    - Function arguments, calls 'trailing commas'
    - Async (Await) functions
*/

//#region Object.values
{
    let employee = {
        name: "Michael",
        age: 25,
        group: "OrangeCaps"
    }
    console.log(Object.keys(employee));     //[ 'name', 'age', 'group' ]
    console.log(Object.values(employee));   //[ 'Michael', 25, 'OrangeCaps' ]
    //Object.values return only enumerable property values.. i.e; see below
    Object.defineProperty(employee, "salary", {
        value: 1000000,
        writable: true,
        configurable: true,
        enumerable: false                   //enumerable false
    });
    console.log(Object.keys(employee));     //[ 'name', 'age', 'group' ]
    console.log(Object.values(employee));   //[ 'Michael', 25, 'OrangeCaps' ]
}
//#endregion

//#region Object.entries
{
    let fruit = {
        name: 'Apple',
        color: 'Red',
        weightInGms: 200
    }
    console.log(Object.entries(fruit));
    /* Above logs as below (Iterates over each property and constructs array)
    [ [ 'name', 'Apple' ],
      [ 'color', 'Red' ],
      [ 'weightInGms', 200 ] ]
    */

    //So, using Object.entries we can easily construct a Map directly from an object
    let fruitMap = new Map(Object.entries(fruit));
    console.log(fruitMap); //Map { 'name' => 'Apple', 'color' => 'Red', 'weightInGms' => 200 }
    console.log(fruitMap.has('color')); //true
    //Otherwise adding to Map would be like fruitMap.add()...
}
//#endregion

//#region String extensions
{
    let name = "Mike";
    console.log(name.padStart(10, 'wowo')); //wowowoMike (wowowo->6, Mike->4, 6+4=10)
    console.log(name.padEnd(10, 'wowo'));   //Mikewowowo
    console.log(name.padStart(12, 'wo wo')); //wo wowo Mike
    console.log(name.padEnd(12, 'wo wo'));   //Mikewo wowo 
    let cardNumber = "987612346789" //12 digit card number
    let last4Digits = cardNumber.slice(-4);
    console.log(last4Digits.padStart(12, '** **')); //** **** 6789
    console.log(last4Digits.padStart(14, '**** ')); //**** **** 6789
    let signature = "I am Mike";
    console.log(signature.padEnd(signature.length+10, '.')); //I am Mike..........
}
//#endregion

//#region Object.getOwnPropertyDescriptors
{
    let obj = {
        name: 'Tim',
        dept: 'EDT'
    }
    console.log(Object.getOwnPropertyDescriptors(obj)); //getOwnPropertyDescriptor(s)
    /* above outputs as below
    { name:
        { value: 'Tim',
            writable: true,
            enumerable: true,
            configurable: true },
        dept:
        { value: 'EDT',
            writable: true,
            enumerable: true,
            configurable: true } }
    */
   console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
   /*
   { value: 'Tim',
     writable: true,
     enumerable: true,
     configurable: true }
   */
}
//#endregion