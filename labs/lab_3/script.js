const BASEURL = "https://dog.ceo/api/breed";

window.addEventListener('load', function () {
    getImages()
    getText()
    document.getElementById("dog_breed").addEventListener("change", getImages);
    document.getElementById("dog_breed").addEventListener("change", getText);
});

function apiCall() {
    let dogBreed = document.getElementById("dog_breed").value;
    let endpoint = `https://dog.ceo/api/breed/${dogBreed}/images/random`;

    for (let i = 0; i < 10; i++) {
        fetch(endpoint)
            .then(response => response.json())
            .then(parsedData => {
                if (parsedData.status === "success") {
                    document.getElementById(`img${i + 1}`).src = parsedData.message;

                    // Hide all slides initially
                    document.getElementById(`img${i + 1}`).parentElement.style.display = "none";

                    // Show only the first image
                    if (i === 0) {
                        document.getElementById(`img${i + 1}`).parentElement.style.display = "block";
                    }
                } else {
                    throw new Error("Image fetch failed");
                }
            })
            .catch(error => console.log(error));
    }
}


function getText(){
    let dogBreed = document.getElementById("dog_breed").value;

    fetch('https://api.api-ninjas.com/v1/dogs?name=' + dogBreed, {
        method: 'GET',
        headers: {
            'X-Api-Key': 'HjRQrj5o1QmD6LZrYCVrVw==OhLFy64DJzKhJZ4L',
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json(); // If the API returns JSON data
        })
        .then(data => {
            let dogInfo = Array.isArray(data) && data.length > 0 ? data[0] : data;
            let header = "Dog Description\n\n\n1: Bad\n2: Slightly Better Than Bad\n3: Good\n4: Pretty Good\n5: Great"

            let formattedText = `\n\n${header.toUpperCase()}\n\nAttitude Towards Children: ${dogInfo.good_with_children}\nAttitude Towards Other Dogs: ${dogInfo.good_with_other_dogs}\nAttitude Towards Strangers: ${dogInfo.good_with_strangers}\nLifespan: ${dogInfo.max_life_expectancy} Human Years\nEnergy: ${dogInfo.energy}\nTrainability: ${dogInfo.trainability}`;
            document.getElementById("outputText").innerText = formattedText;
            // document.getElementById("myTextArea").value = // Display data in textarea
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById("myTextArea").value = "Error fetching data.";
        });


}


function getImages() {
    apiCall();
    setTimeout(() => showSlides(1), 1000);
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides.length > 0) {
        slides[slideIndex - 1].style.display = "block";
        if (dots.length > 0) {
            dots[slideIndex - 1].className += " active";
        }
    }

}
