const url = new URL(window.location);
const formData = url.searchParams;
const linksURL = "https://auzfest.github.io/Bountiful-Foods/data/fruits.json";
const nutrition = document.querySelector('.nutrition');
const orderDate = document.querySelector('#orderDate');
const readyDate = document.querySelector('#readyDate');

let totalCalories = 0;
let totalCarbs = 0;
let totalProtein = 0;
let totalFat = 0;
let TotalSugar = 0;

function formatDate(date) {
    const options = {
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour: '2-digit', minute: '2-digit',
        hour12: true // Use hour12 to specify 12-hour format; set to false for 24-hour format
    };
    return date.toLocaleString('en-US', options);}

const date = new Date(); // Get the current date and time
const futureDate = new Date(date.getTime() + 30 * 60000); // Add 30 minutes to the current time

// Format the dates for display
const formattedCurrentDate = formatDate(date);
const formattedFutureDate = formatDate(futureDate);

orderDate.textContent = `Time of Order: ${formattedCurrentDate}`;
readyDate.textContent = `Estimated To Be Ready By: ${formattedFutureDate}`;

async function getFruit() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayFruitNutrition(data)
}

async function displayFruitNutrition(data) {
    const fruits = formData.getAll('fruit');
    const response = await fetch(linksURL);
    const fruitsData = await response.json(); // This is the full list of fruits from the JSON file

    fruits.forEach(selectedFruit => {
        // Find the fruit in the fetched data
        const fruitDetails = data.find(fruit => fruit.name.toLowerCase() === selectedFruit.toLowerCase());
        
        // If the fruit is found in the JSON data, display its nutrition
        if (fruitDetails) {
            calculateNutrition(fruitDetails); // Display the nutritional information
        } else {
        console.log(`Nutrition information for ${selectedFruit} not found.`);
        }
    });
    displayNutrition(); // Display the nutritional information

}

function calculateNutrition(fruitDetails) {
    let calories = fruitDetails.nutritions.calories;
    totalCalories += calories;

    let carbs = fruitDetails.nutritions.carbohydrates;
    totalCarbs += carbs;

    let protein = fruitDetails.nutritions.protein;
    totalProtein += protein;

    let fat = fruitDetails.nutritions.fat;
    totalFat += fat;

    let sugar = fruitDetails.nutritions.sugar;
    TotalSugar += sugar;
}

function displayNutrition() {
    const container = document.createElement('div');
    const p = document.createElement('p');
    p.textContent = `Calories: ${totalCalories.toFixed(1)}`;
    container.appendChild(p);        

    const p2 = document.createElement('p');
    p2.textContent =`Carbs: ${totalCarbs.toFixed(1)}`;
    container.appendChild(p2);        

    const p3 = document.createElement('p');
    p3.textContent =`Protein: ${totalProtein.toFixed(1)}`;
    container.appendChild(p3);        

    const p4 = document.createElement('p');
    p4.textContent =`Fat: ${totalFat.toFixed(1)}`;
    container.appendChild(p4);        

    const p5 = document.createElement('p');
    p5.textContent =`Sugar: ${TotalSugar.toFixed(1)}`;
    container.appendChild(p5);        
    nutrition.append(container);


}

getFruit();

document.querySelector("#firstName").textContent = formData.get('firstName');
document.querySelector("#email").textContent = formData.get('email');
document.querySelector("#phone").textContent = formData.get('phone');


const fruits = formData.getAll('fruit');
document.querySelector("#fruit").textContent = fruits.join(', ');


document.querySelector("#spInstructions").textContent = formData.get('specialInstructions');