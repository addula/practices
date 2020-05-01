"use strict";

//A Proxy is nothing but a Handler object
//Its a trap/handler to the original object (Ex: Interceptors)
{
    class SecretAgency {
        constructor () {
            this.name = "SecretAgency";
            this.address = "This is a secret address which should not be revealed";
        }
    }

    let proxyAgency = new Proxy(new SecretAgency(), {
        get(target, property, receiver) {
            if(property === 'address') {
                return "Unauthorised property access";
            } else {
                return Reflect.get(target, property, receiver);
            }
        }
    });

    console.log(proxyAgency.name);      //SecretAgency
    console.log(proxyAgency.address);   //Unauthorised property access
}

{
    //Functions as Proxy
    function GetDataWithSecretKey (data, key) {
        if(key === "abc1234") {
            return data;
        } else {
            return "Cannot fetch data";
        }
    }

    let GetDataBack = new Proxy(GetDataWithSecretKey, {
        apply(target, thisArg, argumentsList) {
            return Reflect.apply(target, thisArg, argumentsList);
        }
    });
    console.log(GetDataBack("Success")); //Cannot fetch data

    let GetDataBackWithKey = new Proxy(GetDataWithSecretKey, {
        apply(target, thisArg, argumentsList) {
            argumentsList.push("abc1234"); //adding additional data after function call
            return Reflect.apply(target, thisArg, argumentsList);
        }
    });
    console.log(GetDataBackWithKey("Success")); //Success
}

{
    let book  = {
        name: "EatThatFrog!"
    } 
    let proxyPrototype = new Proxy({}, {
        get(target, property, receiver) {
            return 'No such key with name ' + property + ' exists'; 
        }
    });
    Object.setPrototypeOf(book, proxyPrototype);
    console.log(book.name); //EatThatFrog!
    console.log(book.author); // No such key with name author exists
}