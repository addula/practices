//#region ServerCallWithoutPromise
/*
function ServerCallWithoutPromise (message, callBack) {
    return setTimeout(function () {
        callBack(message);
    }, 1000);
}

ServerCallWithoutPromise("1 call", function (message) {
    console.log(message);
    ServerCallWithoutPromise("2 call", function (message) {
        console.log(message);
        ServerCallWithoutPromise("3 call", function (message) {
            console.log(message);
            ServerCallWithoutPromise("4 call", function (message) {
                console.log(message);
                ServerCallWithoutPromise("5 call", function (message) {
                    console.log(message);
                    ServerCallWithoutPromise("6 call", function (message) {
                        console.log(message);
                    });
                });
            });
        });
    });
});
*/
//#endregion

//#region ServerCallWithPromise
/*
function ServerCallWithPromise (message) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(message);
        }, 1000)
    });
}

ServerCallWithPromise("1 call").then(function (message) {
    console.log(message);
    return ServerCallWithPromise("2 call");
}).then(function (message) {
    console.log(message);
    return ServerCallWithPromise("3 call");
}).then(function (message) {
    console.log(message);
    return ServerCallWithPromise("4 call");
}).then(function (message) {
    console.log(message);
    return ServerCallWithPromise("5 call");
}).then(function (message) {
    console.log(message);
});
*/
//#endregion

//#region ServerCallWithPromiseAsyncAwait
function ServerCallWithPromiseAsyncAwait (message) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, 1000)
    })
}

async function CallServer () {
    let message = await ServerCallWithPromiseAsyncAwait("1 call");
    console.log(message);
    message = await ServerCallWithPromiseAsyncAwait("2 call");
    console.log(message);
    message = await ServerCallWithPromiseAsyncAwait("3 call");
    console.log(message);
    message = await ServerCallWithPromiseAsyncAwait("4 call");
    console.log(message);
    message = await ServerCallWithPromiseAsyncAwait("5 call");
    console.log(message);
}

CallServer();
//#endregion