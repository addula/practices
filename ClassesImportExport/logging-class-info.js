"use strict";
import {NewCompany}  from './extended-class.js';
let newCompany = new NewCompany("XYZCompany", "Hyderabad", 10);
newCompany.render();
console.log(newCompany.getCompanyName());