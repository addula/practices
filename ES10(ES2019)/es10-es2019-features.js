"use strict";
/*
    ES10 (or) ES2019 introduces below features
    - flat, flatMap
    - Object.fromEntries, String -> trimStart, trimEnd
    - Unescaped line character acceptance
    - some other enhancements to sort,json,function toString etc..
*/

//#region flat, flatMap
{
    let numbers1 = [1, 2, [3,4,5], 6, 7, 8];
    console.log(numbers1.flat(1));               //[1,2,3,4,5,6,7,8]
    let numbers2 = [1, 2, [3,[4,5]], 6, 7, 8];
    console.log(numbers2.flat(1));              //[ 1, 2, 3, [ 4, 5 ], 6, 7, 8 ]
    console.log(numbers2.flat(2));              //[1,2,3,4,5,6,7,8]
    console.log(numbers2.flat(Infinity));       //[1,2,3,4,5,6,7,8]
    let nums = [1, 2, 3, 4, 5];
    let words = ["one", "two", "three", "four", "five"];
    let flatMappedNums = nums.flatMap((num, index) => [num, words[index]]);
    console.log(flatMappedNums);                //[1, 'one', 2, 'two', 3, 'three', 4, 'four', 5, 'five']
}
//#endregion

//#region fromEntries
{
    let fruit = {
        name: 'Apple',
        color: 'Red',
        weightInGms: 200
    }
    let entry = Object.entries(fruit);
    console.log(entry); //[ [ 'name', 'Apple' ], [ 'color', 'Red' ], [ 'weightInGms', 200 ] ]
    /* Above logs as below (Iterates over each property and constructs array)
    [ [ 'name', 'Apple' ],
      [ 'color', 'Red' ],
      [ 'weightInGms', 200 ] ]
    */
    let whatIsInEntry = Object.fromEntries(entry);
    console.log(whatIsInEntry); //{ name: 'Apple', color: 'Red', weightInGms: 200 }
}
//#endregion

//#region trimStart, trimEnd, Unescaped line character acceptance
{
    let emptyStringWithSpace = " ";
    console.log(emptyStringWithSpace.length); // 1 (empty strings with spaces allowed now)
    let fruit = "   Orange ";
    console.log(fruit); //  Orange (logs with space)
    console.log(fruit.trimStart()); //Orange  (removes starting spaces but preserves last)
    console.log(fruit.trimEnd()); //  Orange(removes last spaces but preserves starting ones)
}
//#endregion