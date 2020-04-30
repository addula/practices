"use strict";
const GetMessageFromServer = (message, timeMs) => {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve(message);
        }, timeMs)
    });
};

let AsyncFuncWithoutAwait = () => {
    GetMessageFromServer("firstCall", 2000).then(function (response) {
        console.log("No Await 2000ms " + response);
    });
    GetMessageFromServer("secondCall", 500).then(function (response) {
        console.log("No Await 500ms " + response);
    });
}

let AsyncFuncWithAwait = async () => {
    let firstCall = await GetMessageFromServer("firstCall", 2000);
    console.log("Await 2000ms", firstCall);
    let secondCall = await GetMessageFromServer("secondCall", 500);
    console.log("Await 500ms", secondCall);
}

AsyncFuncWithoutAwait();
AsyncFuncWithAwait();