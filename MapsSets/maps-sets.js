"use strict";
//#region Maps
{
    let address1 = { city: "Hyderabad", state: "Telangana" };
    let address2 = { city: "Bengaluru", state: "Karnataka" };

    let addresses = [];
    addresses[address1] = "Address1"; //[ '[object Object]': 'Address1' ]
    addresses[address2] = "Address2"; //[ '[object Object]': 'Address2' ]
    //cannot store object as key, if stored it will be converted to string
    console.log(addresses); //[ '[object Object]': 'Address2' ]

    //To address above problems, ES6 introduced Maps, each key in a Map must be unique
    let addressMap = new Map();
    addressMap.set(address1, "Map-Address1");
    addressMap.set(address2, "Map-Address2");
    addressMap.set("address3", "Map-Address3"); //can add any primitive type as key
    console.log(addressMap.get(address1)); //Map-Address1
    console.log(addressMap.get(address2)); //Map-Address2
    console.log(addressMap.get("address3")); //Map-Address3
    //Maps are iterable like Arrays
    for(let address of addressMap) {
        console.log(address);
        /*
            [ { city: 'Hyderabad', state: 'Telangana' }, 'Map-Address1' ]
            [ { city: 'Bengaluru', state: 'Karnataka' }, 'Map-Address2' ]
            [ 'address3', 'Map-Address3' ]
        */
    }

    let newAddressMap = new WeakMap();
    newAddressMap.set(address1, "WeakMap-Address1");
    newAddressMap.set(address2, "WeakMap-Address2");
    //newAddressMap.set("address3", "WeakMap-Address3"); //TypeError: Invalid value used as weak map key
    //can add only object as keys to WeakMap
    //WeakMap is not iterable like Maps
    console.log(newAddressMap.get(address1)); //WeakMap-Address1
    console.log(newAddressMap.get(address2)); //WeakMap-Address2
}
//#endregion

//#region Sets
{
    let names = [];
    names.push("Mike");
    names.push("Kate");
    names.push("Mike"); //allows duplicate "Mike" is alread a existing name in array
    names.push("Tim");
    names.push({name: "Cook"});
    console.log(names.length); //5
    console.log(names); //[ 'Mike', 'Kate', 'Mike', 'Tim', { name: 'Cook' } ]

    let nameSet = new Set();
    nameSet.add("Mike");
    nameSet.add("Kate");
    nameSet.add("Mike"); //can add but don't store as its a duplicate, see output below
    nameSet.add("Tim");
    nameSet.add({name: "Cook"});
    console.log(nameSet.size);//4
    console.log(nameSet); //Set { 'Mike', 'Kate', 'Tim', { name: 'Cook' } }
    //Set is iterable
    for(let name of nameSet) {
        console.log(name);
    }
    let [name1, name2, name3] = nameSet;
    console.log(name1, name2, name3); //Mike Kate Tim

    let namesWeakSet = new WeakSet();
    //can add only objects as keys and WeakSet is not iterable
    namesWeakSet.add({name: "Mike"});
    namesWeakSet.add({name: "Tim"});
    let nameObj = {name: "Cook"};
    namesWeakSet.add(nameObj);
    console.log(namesWeakSet); //WeakSet { [items unknown] }
    //cannot read from a WeakSet, can only check presence
    console.log(namesWeakSet.has(nameObj)); //true
}
//#endregion