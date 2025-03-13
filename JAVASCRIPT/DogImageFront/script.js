const BASEURL = "https://dog.ceo/api"
let route = "breeds/image/random"
let endpoint = `${BASEURL}/${route}`


let button = document.querySelector("button")

button.addEventListener("click", () => {

    fetch(endpoint)
        .then(data => {
            console.log(data)
            if(data.ok){
                let result = data.json()
                return result}
            else {
                throw Error("MUSTARDDDDD")
            }

        }).then(ParsedData => {
        document.getElementById("dogImageID").src=ParsedData.message
        console.log(ParsedData)
    }).catch(error => {
        console.log(error)
    })
});




fetch(endpoint)
    .then(data => {
        console.log(data)
        if(data.ok){
            let result = data.json()
            return result}
        else {
            throw Error("MUSTARDDDDD")
        }

    }).then(ParsedData => {
    document.getElementById("dogImageID").src=ParsedData.message
    console.log(ParsedData)
}).catch(error => {
    console.log(error)
})