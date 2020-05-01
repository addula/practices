"use strict";

//#region Iterators
{
    let SomeObj = { name: "Mike", age: 25, city: "NewYork", dept: "ZYK"}
    //SomeObj[Symbol.iterator]->undefined and below doesn't work
    //for(let obj of SomeObj) -> TypeError

    let SomeArray = [1,2,3,4,5];
    //SomeArray[Symbol.iterator]->function and below for..of works
    for(let obj of SomeArray) {
        console.log(obj); //Logs 1,2,3,4,5
    }
    //Above code internally works as below
    let runner = SomeArray[Symbol.iterator]();
    console.log(runner.next()); //{ value: 1, done: false }
    console.log(runner.next()); //{ value: 2, done: false }
    console.log(runner.next()); //{ value: 3, done: false }
    console.log(runner.next()); //{ value: 4, done: false }
    console.log(runner.next()); //{ value: 5, done: false }
    console.log(runner.next()); //{ value: undefined, done: true } -> end of loop

    //Lets make/construct iterator object
    SomeObj[Symbol.iterator] = function () {
        let properties = Object.keys(this);
        let count = 0;
        let isDone = false;
        let next = () => {
            if(count >= properties.length) {
                isDone = true;
            }
            return {done: isDone, value: this[properties[count++]]}
        }
        return {next};
    }

    for(let obj of SomeObj) {
        console.log(obj); //Logs Mike 25 NewYork ZYK
    }

    //iterators with spread and destructuring
    let objects = [...SomeObj];
    console.log(objects); //[ 'Mike', 25, 'NewYork', 'ZYK' ]
    let [,age, ,dept] = [...SomeObj];
    console.log(age, dept); //25 'ZYK'
}
//#endregion

//#region Generators
{
    function * GeneratorFunction () {
        yield "Mike";       //{done: false, value: "Mike"}
        yield "William";    //{done: false, value: "William"}
        yield "Thomson";    //{done: false, value: "Thomson"}
    }

    console.log(GeneratorFunction()); //Object [Generator] {}
    let func = GeneratorFunction();
    console.log(func.next()); //{ value: 'Mike', done: false }
    console.log(func.next()); //{ value: 'William', done: false }
    console.log(func.next()); //{ value: 'Thomson', done: false }
    console.log(func.next()); //{ value: undefined, done: true }
    console.log(func.next()); //{ value: undefined, done: true }

    for(let value of GeneratorFunction()) {
        console.log(value); //Logs Mike William Thomson
    }

    let values = [...GeneratorFunction()];
    let [first, , third] = [...GeneratorFunction()];
    console.log(values);        //[ 'Mike', 'William', 'Thomson' ]
    console.log(first, third);  //Mike Thomson
    
    //Using generator for constructing object iterator
    let SomeObj = { name: "Mike", age: 25, city: "NewYork", dept: "ZYK"}
    SomeObj[Symbol.iterator] = function * () {
        for(let property of Object.keys(this)) {
            yield this[property];
            //yield this.name;
            //yield this.age;
            //yield this.city;
            //yield this.dept;
        }
    }
    for(let obj of SomeObj) {
        console.log(obj); //Logs Mike 25 NewYork ZYK
    }
}
//#endregion