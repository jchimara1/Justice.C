// 1. Dynamic Age Calculator
// Use a traditional function to calculate the user’s age.
//     Prompt the user to enter their birth year using prompt() and store it in a variable.
//     Based on their input, determine how many years old they are.
//     Log the calculated age to the console: “Your age is:”

function DA_Calculator(){
    let year = Number(prompt("Whats your birth Year"))
    const d = new Date();
    let currYear = d.getFullYear()
    let age = currYear - year;
    console.log("Your age is: ", age)
}
//Answer---- below
DA_Calculator()

// 2. Simple Interest Calculator
// Use a traditional function named calculateSimpleInterest to calculate the simple interest using the formula:
//     Simple Interest = (Principal × Rate × Time)/100
// Prompt the user for the principal amount, rate of interest, and time in years using prompt().
//     Store each of these in a separate variable
// Log the result to the console: “Your simple interest is:”

function calculateSimpleInterest(){

    Principal = prompt("enter your principal amount?")
    Rate = prompt("enter your rate? ")
    Time = prompt("Enter the amount of time in years?")
    Simple_Interest = (Principal * Rate * Time)/100

    console.log(Simple_Interest)
}
//Answer---- below
calculateSimpleInterest()

// 3. Favorite Color Selector
// Create an array with three colors.
//     Use a traditional function named addColor to add a new color to an array.
//     Takes one argument - the array of colors
// Prompt the user to input a color name to add to the array.
//     Prepend the users color to the existing array
// Log the updated array to the console using: “Updated colors: “



colorList  = ["red", "Black", "Blue"]
function addColor(array)


    {

        let value = prompt("Add a color to the array")
        // to add to the front of an array you put unshift
        // to add to the back of an array put arrray.push
        array.unshift(value)
        console.log("Updated Colors: " + array)


}
//Answer---- below
addColor(colorList)

// 4. Event Countdown with Date Object
// Use a traditional function named calculateDaysUntil to calculate the number of days remaining until a future event.
//     Takes one argument - users event date
// Prompt the user to input the event date in the format YYYY-MM-DD.
//     If not in this format - make the user enter in correct format
// Use the Date object to calculate the difference in days between today and the event.
//     Log the result to the console using: “Days until the event: “.



function calculateDaysUntil(eventDate){
    const d = new Date();
    const fd = new Date(eventDate);



    // Calculate the difference in time (milliseconds)
    const diffTime = fd - d;

    // Convert milliseconds to days
    // 1000 seconds in a millisecond
    // then there is 60 seconds in a minute
    // then there is 60 minutes in a hour
    //then there is 24 hours in a day the total of this is the amount of days
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));



    if(diffDays < 0) {
        console.log("The time has passed"
        )
    }

    else {
        console.log(`The number of days until the event is: ${diffDays}` )
    }

}

function checkIfVaild(){
    let eventDate = prompt("enter Event Date: YYYY-MM-DD")
    const d = new Date(eventDate);
    if(isNaN(d.getTime())){
        while(true){
            eventDate = prompt("enter Event Date: YYYY-MM-DD")
            const d = new Date(eventDate);
            if(!isNaN(d.getTime()) && d.getMonth()<=11 && d.getDay()<=30){break;}
        }

    }

    return calculateDaysUntil(eventDate);

}

//Answer---- below
checkIfVaild()

// 5. Temperature Classifier
// Use a traditional function named classifyTemperature to classify a temperature.
//     Takes one argument - user input for temperature
//     Prompt the user to input the temperature in Celsius.
//     Convert into Farenheit using this formula
// Fahrenheit = (C x (9/5)) + 32
// Use conditionals to classify the temperature as:
//     "Hot," if over 100
// "Warm," if over 80
// "Cold” if under 40
// “Chilly” for everything else
// Error message if number not entered
// Log the classification to the console using: “The temperature is: “


function classifyTemperature(temperature) {
    let convertedTemperature;
        convertedTemperature = (temperature * (9 / 5)) + 32
        convertedTemperature > 100 ? console.log("Hot") : convertedTemperature > 80 ? console.log("Warm") : convertedTemperature > 40 ? console.log("Cold") : console.log("Chilly");
}

function getRealNumber(){
    let temperature = prompt("enter the temperature in Celsius")
    if (isNaN(temperature)){
        temperature = prompt("enter a vaild temperature in Celsius")
    }
    return temperature;
}



//Answer---- below
classifyTemperature(getRealNumber())

// 6. Student Array Operations
// Hardcode an array of students, each with a name and age based on this info: Alice is 20, Bob is 22, and Charlie is 18
// Use a fat arrow function to modify a student's age in an array of student objects.
// Prompt the user to input the name of the student to modify
// If student does not exist, log an error message
// Prompt the user to input a new age.
// If not a number, log an error message
// Update the student’s age in the array of objects.
//     Log the updated array to the console: “Updated students: ”

let students = [{name:"alice", age:20}, {name:"bob", age:22}, {name:"charlie", age:18}]


const updateStudent = (array) => {
    modifiedName = prompt("enter the name of the student you want to modify")
    let found = false
    for(let student of array){
        if(student.name.toLowerCase() === modifiedName.toLowerCase()){
           found = true
           let newAge = Number(prompt("Enter new age"))
            if(newAge < 0 || isNaN(newAge)){
                console.log("This is not a vaild number")
            }
            else{
                let tempAge = student.age;
                student.age = newAge

                for(i = 0; i<array.length;i++){
                if(array[i].name === modifiedName){
                 console.log(`${modifiedName}'s age was updated from ${tempAge} to ${array[i].age}.`)
                }

            }

                console.log("Updated Students: " + `${JSON.stringify(array,null, 2)}`)


            }
            return;

        }


    }
    if(found === false){
        console.log("This student doesn't exist.")
    }
}
//6. answer is below
updateStudent(students)


// 7. Grade Classification
// Use a fat arrow function named classifyGrade to classify grades.
//     Prompt the user to input a grade as a number.
//     Use conditionals to classify the grade as "A," "B," "C," "D," or "F."
// ONLY use ternaries!!!!
//     Log the result to the console using: “The grade classification is: “




const classifyGrade = () => {
    let grade = prompt("enter a number grade (ex.1-100)")
    grade > 89? console.log("The grade classification is: A") : grade > 79 ? console.log("The grade classification is: B") : grade > 69 ? console.log("The grade classification is: C") : grade > 59 ? console.log("The grade classification is: D") : console.log("The grade classification is: F")

};

//7.answer is below
classifyGrade();



// 8. Shopping List Operations
// Hardcode an array representing a shopping list of eggs, butter, flour, and eggs.
//     Use a fat arrow function named modifyItem to modify items in an array.
//     Takes two arguments - the shopping list array and the prompted new item form user.
//     Log the updated array to the console using: “Updated shopping list: “.


const shoppingList = ["eggs" ,"butter", "flour", "eggs"]
let newItem = prompt("enter the item you would like too modify the array with")

const modifyItem = (array1, item) => {


    array1.push(item)
    console.log(`The item ${item} was added to ${array1}`)

}
//8. answer is below
modifyItem(shoppingList, newItem)



// 9. Weekday Detector
// Use a fat arrow function to determine the day of the week.
//     Use the Date object to get the current day.
//     Log the day of the week to the console using: “Today is: “




const weekdayDetector = () => {
    const d = new Date()
    let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    console.log(dayList[d.getDay()])
    return dayList[d.getDay()]
}

// 9. the answer is below
weekdayDetector()



// 10. How Long Until Graduation
// Use a fat arrow function to determine the day of the week.
//     Use the Date object to get the current day.
//     Log the day of the week to the console using: “Today is: “
// Display in this format: “2025, January 21st”
// NOTE: use -st, -nd, -rd, -th based on the numerical date
// 22nd, 5th, 9th, 23rd, etc….
// Log how many days left between the current date and last day of course work to the console using: “And you have <days> left in this web design program until graduation. “
// Last day is 5/17/25
// Rough idea. Does not need to be 100% accurate but should be within a few days of actual answer.


const tillGraduation = () => {
    const d = new Date()
    let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    console.log(dayList[d.getDay()])
    console.log(`Today is: ${dayList[d.getDay()]} `)
    let pre = d.getDate()
    let suffix = pre >= 11 && pre <=13 ? suffix = `${pre}th` : pre %10 === 1 ? `${pre}st` : pre % 10 === 2 ? `${pre}nd` : pre %10 === 3 ? `${pre}rd` : `${pre}th`

    console.log(`${d.getFullYear()}, ${months[d.getMonth()]} ${suffix}`)

}


tillGraduation()