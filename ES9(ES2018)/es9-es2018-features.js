"use strict";
/*
    ES9 (or) ES2018 introduces below features
    - Mostly on Regex, Template literal restriction removal, Rest..Spread
    - Promise.prototype.finally
    - Asynchronous iteration
*/

//#region Promise.finally & Async loop
{
    const GetMessageFromServer = (message, timeMs) => {
        return new Promise((resolve, reject) => {
            setTimeout(function() {
                resolve(message);
            }, timeMs)
        });
    };
    //finally executes after a Promise is completed its job (resolve or reject)
    //and we can chain "then" to it
    let PromiseFunc = () => {
        GetMessageFromServer("I am your response!", 100).then(function (response) {
            console.log(response);
        }, function (reject) {
            console.log(reject);
        })
        .finally(function() {
            console.log("Resolve/Reject is completed");
        })
        .then(function () {
            return GetMessageFromServer("I am your response!", 5000); //Promise resolves after 5 secs
        })
        .finally(function() {
            console.log("2 Resolve/Reject is completed"); //This message logs after 5 secs
        });
    }
    PromiseFunc();

    //using GetMessageFromServer function, lets log messages using for async loop
    let AsyncFunc = async () => {
        let promises = [
            GetMessageFromServer("Hellow1", 500),
            GetMessageFromServer("Hellow2", 1000)
        ]
        for(let promise of promises) {
            console.log(promise); //Promise { <pending> } -> 2 times
        }
        for await (let promise of promises) {
            console.log(promise); //Hellow1 and Hellow2 one after other
        }
    }
    AsyncFunc();
}
//#endregion
