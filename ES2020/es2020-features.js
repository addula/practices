"use strict";
/*
    ES2020 introduces below features
    - BigInt
    - Dynamic Import
    - Nullish Coalescing
    - Optional Chaining
    - Promise.allSettled
    - String matchAll
    - globalThis
    - for-in order
    - namespace exports
    - meta import
*/

//#region BigInt
{
    let maxSupportedInteger = Number.MAX_SAFE_INTEGER;
    console.log(maxSupportedInteger);   //logs 9007199254740991
    console.log(++maxSupportedInteger); //logs 9007199254740992
    console.log(++maxSupportedInteger); //logs 9007199254740992 - same as above
    console.log(++maxSupportedInteger); //logs 9007199254740992 - same as above

    //What if to store higher values than 9007199254740992? - BigInt
    let bigIntNotation = 9007199254740992n; //It is NOT 9007199254740992+"n";
    console.log(bigIntNotation);   //logs 9007199254740992n
    console.log(++bigIntNotation); //logs 9007199254740993n
    console.log(++bigIntNotation); //logs 9007199254740994n
    console.log(++bigIntNotation); //logs 9007199254740995n
}
////#endregion