let food = document.getElementById("fruit")
console.log(food)



var food2  = document.getElementsByClassName("breakfast")
console.log(food2[0])

var food3 = document.getElementsByTagName("li")
console.log(food3[0])


var food4 = document.querySelector("#fruit")
console.log(food4)
food.style.color="red"
food.style.backgroundColor="green"
food.style.fontSize="25px"


document.querySelector("li").textContent="Sold out!!!"
console.log(document.querySelector("ul").innerHTML)


answer = document.querySelector("a").getAttribute("href")
console.log(answer)

document.querySelector("a").setAttribute("href", "https://www.amazon.com/")


document.addEventListener("DOMContentLoaded", () => {
    let food12 = document.getElementsByTagName("button");
    food12[0].addEventListener("click", () => {
        alert("clicked");
    });
});
