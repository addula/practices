"use strict";
import {MainCompany} from './main-class.js';
class NewCompany extends MainCompany {
    constructor (name, city, floors) {
        super(name, city, floors);
    }
    render() {
        console.log(this.name, this.city, this.floors);
    }
    getCompanyName () {
        let parentCompanyName = super.getCompanyName();
        return `${this.name} - a subsidiary of ${parentCompanyName}`;
    }
}
export {NewCompany}