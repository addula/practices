"use strict";
/*
    ES7 (or) ES2016 introduces below features
    - Array.prototype.includes
    - Exponentiation operator (**)
*/
//#region Array.prototype.includes
{
    let numbers = [1,2,3,NaN,5];
    if(numbers.indexOf(NaN) > -1) {
        console.log("NaN is present");
    } else {
        console.log("NaN is not present"); //NaN is not present
        console.log("index returned as: ", numbers.indexOf(NaN)); //indexOf returned:  -1
    }
    //Array.includes
    if(numbers.includes(NaN)) {
        console.log("NaN is present"); //NaN is present
    }

    let alphabets = ["a", "b", "c", "d", "e"];

    console.log("LENGTH OF ARRAY alphabets is: ", alphabets.length);
    console.log("INDEX OF alphabet 'a' is: ", alphabets.indexOf("a"));
    console.log("INDEX OF alphabet 'e' is: ", alphabets.indexOf("e"));

    console.log(alphabets.includes("a", -1)); //false
    console.log(alphabets.includes("a", 0)); //true

    console.log(alphabets.includes("b", -1)); //false
    console.log(alphabets.includes("b", 0)); //true
    console.log(alphabets.includes("b", 1)); //true
    console.log(alphabets.includes("b", 2)); //false

    console.log(alphabets.includes("c", -1)); //false
    console.log(alphabets.includes("c", 0)); //true
    console.log(alphabets.includes("c", 1)); //true
    console.log(alphabets.includes("c", 2)); //true
    console.log(alphabets.includes("c", 3)); //false

    console.log(alphabets.includes("d", -1));//false
    console.log(alphabets.includes("d", 0)); //true
    console.log(alphabets.includes("d", 1)); //true
    console.log(alphabets.includes("d", 2)); //true
    console.log(alphabets.includes("d", 3)); //true
    console.log(alphabets.includes("d", 4)); //true

    console.log(alphabets.includes("e", -1));//true >>>>> THIS IS TRUE
    console.log(alphabets.includes("e", 0)); //true
    console.log(alphabets.includes("e", 1)); //true
    console.log(alphabets.includes("e", 2)); //true
    console.log(alphabets.includes("e", 3)); //true
    console.log(alphabets.includes("e", 4)); //true
    console.log(alphabets.includes("e", 5)); //false

    //Now see below
    //             0    1    2    3    4
    let alphas = ["a", "b", "c", "d", "e"];
    //            -5   -4   -3   -2   -1   

    console.log(alphas.includes("a", -4)); //false
    console.log(alphas.includes("a", -5)); //true (-5,-6,-7... will be true)

    console.log(alphas.includes("b", -3)); //false
    console.log(alphas.includes("b", -4)); //true (-4,-5,-6... will be true)

    console.log(alphas.includes("c", -2)); //false
    console.log(alphas.includes("c", -3)); //true (-3,-4,-5... will be true)

    console.log(alphas.includes("d", -1)); //false
    console.log(alphas.includes("d", -2)); //true (-2,-3,-4... will be true)

    console.log(alphas.includes("e", -1)); //true (-1,-2,-3....-1000 will be true)
}
//#endregion

//#region Math.pow ===> **
{
    let twoPower3 = Math.pow(2,3);  //this can be 2 ** 3
    let twoPower4 = 2 ** 4;         //this is nothing but Math.pow(2,4)
    console.log(twoPower3);         //8
    console.log(twoPower4);         //16
}
//#endregion
