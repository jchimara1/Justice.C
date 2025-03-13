//declaring variable

//conditionals

// let results = age %2 === 0 ? "Even":"Odd"
// console.log((age%2) ? "odd":"Even")

// age>18
//     ? console.log("youre an adult")
//     :age ===18  ? console.log("Happy birthday")
//         : console.log("You are a baby");

// Trim removes all of the excess spaces





//
//
// let data = ["Alice", "Bob", "Charlie"]
//
//
//
// data.push("Diana")
//
// console.log("Diana was just added to the Array ")
// console.log(data)
//
// data.pop()
//
// console.log("Diana was just removed from the array ")
// console.log(data)
// data.unshift("Eve")
//
// console.log("Eve was added to the beginning of the array")
// console.log(data)
// data.shift()
// console.log("Eve was removed from the beginning of the array")
//
// console.log(data)

// !!!foreach()!!!!



const d = new Date();

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let hour =  d.getHours()
let minutes = d.getMinutes()
console.log(`${days[d.getDay()]} ${hour}:${minutes}:${d.getSeconds()}`)
