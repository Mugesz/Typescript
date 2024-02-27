"use strict";
let a = 5;
let day = "sunday";
let empName;
empName = "5";
let mutliply = (num) => {
    console.log(num * 10);
};
mutliply(6);
///////////////////////////////////////
// array []
// implict
let num = [1, 2, 3];
let str = ["a", "b"];
str.push("x");
console.log(str);
// explict
let nus = [];
nus.push(5);
console.log(nus);
// read only arrays
let nur = [1, 2, 3];
//  if its is a read only yo should not alter the array table a anytime so typescript is a strict mode
/////////////////////////////////////////
//obj {}
// implict
let employee = {
    name: "test",
    age: 30,
    perm: true
};
employee.age = 35;
console.log(employee);
let emp = {
    name: "test",
    age: 4,
    perm: false
};
let Emp = {
    name: "test",
    perm: false
};
// ? is optional
