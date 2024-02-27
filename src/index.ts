let a = 5
let day = "sunday"
let empName: string

empName = "5"

let mutliply = (num: number) => {
    console.log(num * 10)
}

mutliply(6)

// implict


let num = [1, 2, 3]
let str = ["a", "b"]

str.push("x")
console.log(str)

// explict
let nus:number[] = []
nus.push(5)
console.log(nus)

// read only arrays
let nur:readonly number[]=[1,2,3]

//  if its is a read only yo should not alter the array table a anytime so typescript is a strict mode