let a = 5
let day = "sunday"
let empName: string

empName = "5"

let mutliply = (num: number) => {
    console.log(num * 10)
}

mutliply(6)
///////////////////////////////////////

// array []

// implict


let num = [1, 2, 3]
let str = ["a", "b"]

str.push("x")
console.log(str)

// explict
let nus: number[] = []
nus.push(5)
console.log(nus)

// read only arrays
let nur: readonly number[] = [1, 2, 3]

//  if its is a read only yo should not alter the array table a anytime so typescript is a strict mode

/////////////////////////////////////////

//obj {}
// implict

let employee = {
    name: "test",
    age: 30,
    perm: true
}

employee.age = 35
console.log(employee)

// explict
type Employee = {
    name: string, age: number, perm: boolean
}

let emp: Employee = {
    name: "test",
    age: 4,
    perm: false
}

// opotionals
type Emp = {
    name: string, age?: number, perm: boolean
}

let Emp: Emp = {
    name: "test",
    perm: false
}

// ? is optional
///////////////////////////////

// implict union types

let unionArr = ["hello", 1, true]
unionArr.push("world")
unionArr.push(5)
unionArr.push(false)
console.log(unionArr)

// explict

let union : (string | number | boolean)[]  = ["hello", 1, true]
union.push("world")
union.push(5)
union.push(false)
console.log(union)