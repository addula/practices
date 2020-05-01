"use strict";

{
    let a = {
        getA() {
            return "A";
        }
    }
    let b = {
        getAB() {
            return super.getA() + "B"; //to access parent, set Prototype is required
        }
    }
    Object.setPrototypeOf(b, a);
    console.log(b.getAB()); //AB

    function ABC () {
        this.name = "ABC";
    }
    function XYZ () {
        this.age = 25;
    }
    let xyz = new XYZ();
    Object.setPrototypeOf(xyz, new ABC());
    console.log(xyz.name); //ABC
}
{
    //Bind with function
    function AddNumBy5() {
        this.num = 5;
        this.add = function (num) {
            return num + this.num;
        }
    }
    let addNumBy5 = new AddNumBy5();
    console.log(addNumBy5.add(5)); //10
    let addNumBy10 = addNumBy5.add.bind({num: 10}); //works
    console.log(addNumBy10(5)); //15

    //Bind with classes
    class AddNumBy10 {
        constructor () {
            this.num = 10;
        }
        add(num) {
            return num + this.num;
        }
    }
    let addNumBy = new AddNumBy10();
    console.log(addNumBy.add(5)); //15
    let addNumBy20 = addNumBy.add.bind({num: 20}); //works
    console.log(addNumBy20(5)); //25
}
{
    //Reflect API + Binding + newTarget (Object.create ===> Reflect.construct)
    class SomeMiscClass {
        constructor () {
            this.miscClassName = "SomeMiscClass";
        }
        addFromMisc(num) {
            return num + this.num;
        }
    }
    class AddByNum {
        constructor (num) {
            this.num = num;
        }
        add(num) {
            return num + this.num;
        }
        display(message) {
            console.log(`${message} with ${this.num}`);
        }
    }
    //Reflect - call any function inside a class without actually instantiating it
    let addBy100 = Reflect.construct(AddByNum, [100]);
    console.log(addBy100 instanceof AddByNum); //true
    console.log(addBy100.add(50)); //150
    console.log(Reflect.apply(AddByNum.prototype.display, {num: 100}, ['Adds'])); //Adds with 100
    let add = Reflect.construct(AddByNum, [100], SomeMiscClass);
    console.log(add.addFromMisc(20)); //120
}
{
    //Reflect properties
    class Company {
        constructor () {
            this.name = "XYZ";
        }
        getName() {
            return this.name;
        }
        get GetterName() {
            return this.name;
        }
        set SetterName(name) {
            this.someRandomProp = name;
        }
    }
    let someObj = {
        getName() {
            console.log(`${super.getName()}`);
        }
    }

    Reflect.setPrototypeOf(someObj, new Company());
    console.log(someObj.getName()); //XYZ
    console.log(Reflect.has(someObj, 'name')); //true
    console.log(Reflect.ownKeys(someObj)); // [ 'getName' ]
    
    let company = new Company();
    Reflect.set(company, 'name', 'ABC');
    console.log(Reflect.get(company, 'name')); //ABC
    console.log(Reflect.get(company, 'GetterName', {name: "PQR"})); //PQR
    let setName = {SetterName: "FFF"};
    Reflect.set(company, 'name', 'DDD', setName);
    console.log(company.name); //ABC
    console.log(setName.name); //DDD
    console.log(Reflect.getOwnPropertyDescriptor(company, 'name')); //{ value: 'ABC',writable: true,enumerable: true,configurable: true }
    console.log(Reflect.isExtensible(company)); //true
    Reflect.set(company, 'newProp1', 'newProp1Value');
    console.log(Reflect.get(company, 'newProp1')); //newProp1Value
    console.log(Reflect.preventExtensions(company)); //true
    Reflect.set(company, 'newProp2', 'newProp2Value');
    console.log(Reflect.get(company, 'newProp2')); //undefined
    console.log(Reflect.isExtensible(company)); //false
}
