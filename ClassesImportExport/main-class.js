"use strict";

class MainCompany {
    constructor (name, city, floors) {
        this.parentName = "MainCompany";
        this.name = name;
        this.city = city;
        this.floors = floors;
    }
    render() {
        console.log(this.name, this.city, this.floors);
    }
    getCompanyName () {
        return this.parentName;
    }
}

export {MainCompany}