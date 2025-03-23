function Item(name, price, url, ingredients) {
    this.name = name;
    this.price = price;
    this.url = url;
    this.ingredients = ingredients;
}

const array = [
    new Item("Spaghetti Bolognese", 15.00, "https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",
        "ground beef, tomato sauce, onion, garlic, olive oil, spaghetti, parmesan"),
    new Item("Fettuccine Alfredo", 13.00, "https://www.themealdb.com/images/media/meals/uquqtu1511178042.jpg",
        "Fettuccine, heavy cream, butter, parmesan, garlic, black pepper"),
    new Item("Mac & Cheese Sandwich", 12.00, "https://www.themealdb.com/images/media/meals/xutquv1505330523.jpg",
        "Macaroni, cheddar cheese, milk, butter, sourdough bread, mayonnaise"),
    new Item("Jerk Chicken Rice & Peas", 15.00, "https://www.themealdb.com/images/media/meals/tytyxu1515363282.jpg",
        "Chicken thighs, allspice, scotch bonnet pepper, thyme, rice, kidney beans, coconut milk"),
    new Item("Beef Patti", 4.00, "https://www.themealdb.com/images/media/meals/wsqqsw1515364068.jpg",
        "Ground beef, curry powder, garlic, green onions, pastry dough, turmeric"),
    new Item("Fried Chicken", 6.00, "https://www.themealdb.com/images/media/meals/xqusqy1487348868.jpg",
        "Chicken legs, flour, paprika, garlic powder, buttermilk, salt, oil"),
    new Item("Wild Rice", 3.00, "https://www.themealdb.com/images/media/meals/kos9av1699014767.jpg",
        "Wild rice, vegetable broth, mushrooms, onions, garlic, olive oil"),
    new Item("Oxtails", 20.00, "https://www.themealdb.com/images/media/meals/1520083578.jpg",
        "Oxtail, onions, thyme, browning sauce, carrots, butter beans, scotch bonnet"),
    new Item("Carbonara", 15.00, "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
        "Spaghetti, pancetta, egg yolks, parmesan, black pepper"),
    new Item("Cheese Cake", 4.00, "https://www.themealdb.com/images/media/meals/swttys1511385853.jpg",
        "Cream cheese, graham crackers, sugar, eggs, vanilla extract, butter")
];

let slideIndex = 1;

window.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;

    if (path.includes("menu.html")) {
        initSlides();
        showSlides(slideIndex);
    }

    if (path.includes("Hiring.html")) {
        setupForm();
    }
});

// ========== SLIDESHOW CODE ==========
function initSlides() {
    for (let i = 0; i < array.length; i++) {
        const img = document.getElementById(`img${i + 1}`);
        if (!img) continue;

        const slide = img.parentElement;
        img.src = array[i].url;
        img.alt = array[i].name;
        document.getElementById(`imgDescription${i + 1}`).textContent = array[i].name;
        slide.style.display = "none";
    }

    const first = document.getElementById("img1");
    if (first) first.parentElement.style.display = "block";

    updateDescription(0);
}

function nextImage() {
    showSlides(++slideIndex);
}

function prevImage() {
    showSlides(--slideIndex);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (let slide of slides) {
        slide.style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
    updateDescription(slideIndex - 1);
}

function updateDescription(index) {
    const item = array[index];
    const output = document.getElementById("outputText");
    if (output) {
        output.textContent =
            `${item.name}\nPrice: $${item.price.toFixed(2)}\nIngredients: ${item.ingredients}`;
    }
}


function setupForm() {
    const form = document.querySelector("form");
    const ageInput = form?.elements["age"];
    const phoneInput = form?.elements["phone"];
    const commentsInput = form?.elements["comments"];
    const successMsg = document.getElementById("formSuccessMsg");

    if (!form) return;

    if (commentsInput) {
        commentsInput.maxLength = 30;
        commentsInput.rows = 4;

        const counter = document.createElement("div");
        counter.style.color = "white";
        counter.textContent = "30 characters left";
        commentsInput.parentElement.appendChild(counter);

        commentsInput.addEventListener("input", () => {
            const remaining = 30 - commentsInput.value.length;
            counter.textContent = `${remaining} characters left`;
        });
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const age = parseInt(ageInput.value.trim());
        const phone = phoneInput.value.trim();
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;

        if (isNaN(age) || age < 21 || age > 99) {
            alert("Age must be a number between 21 and 99.");
            return;
        }

        if (!phonePattern.test(phone)) {
            alert("Phone number must be in the format 111-222-3333.");
            return;
        }

        // Collect and log data
        const data = {};
        for (let field of form.elements) {
            if (field.name) data[field.name] = field.value;
        }

        console.log("Form Data Submitted:", data);

        successMsg?.classList.remove("d-none");

        setTimeout(() => {
            form.reset();
        }, 500);

        setTimeout(() => {
            successMsg?.classList.add("d-none");
        }, 4000);
    });
}
