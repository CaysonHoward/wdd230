const url = new URL(window.location);
const formData = url.searchParams;
const linksURL = "https://caysonhoward.github.io/wdd230/bountifulfoods/data/fruits.json";
const nutrition = document.querySelector('.nutrition');
const orderDate = document.querySelector('#orderDate');
const readyDate = document.querySelector('#readyDate');
const date = new Date();
const futureDate = new Date(date.getTime() + 60 * 60000);

let totalCalories = 0;
let totalCarbs = 0;
let totalProtein = 0;
let totalFat = 0;
let TotalSugar = 0;

document.querySelector("#firstName").textContent = formData.get('firstName');
document.querySelector("#email").textContent = formData.get('email');
document.querySelector("#phone").textContent = formData.get('phone');

const fruits = formData.getAll('fruit');
document.querySelector("#fruit").textContent = fruits.join(', ');

document.querySelector("#spInstructions").textContent = formData.get('specialInstructions');

function customDateFormat(date) {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    return date.toLocaleString('en-US', options);
}

orderDate.textContent = `Time of Order: ${customDateFormat(date)}`;
readyDate.textContent = `Estimated To Be Ready By: ${customDateFormat(futureDate)}`;

async function getFruit() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayFruitInfo(data)
}

async function displayFruitInfo(data) {
    const fruits = formData.getAll('fruit');

    fruits.forEach(selectedFruit => {
        const fruitInfo = data.find(fruit => fruit.name.toLowerCase() === selectedFruit.toLowerCase());
        calculateFruitInfo(fruitInfo);
    });
    displayNutrition();

}

function calculateFruitInfo(fruitInfo) {
    totalCalories += fruitInfo.nutritions.calories;

    totalCarbs += fruitInfo.nutritions.carbohydrates;

    totalProtein += fruitInfo.nutritions.protein;

    totalFat += fruitInfo.nutritions.fat;

    TotalSugar += fruitInfo.nutritions.sugar;
}

function displayNutrition() {
    const caltext = `Calories: ${totalCalories.toFixed(1)}`;
    const carbtext = `Carbs: ${totalCarbs.toFixed(1)}`;
    const proteintext = `Protein: ${totalProtein.toFixed(1)}`;
    const fattext = `Fat: ${totalFat.toFixed(1)}`;
    const sugartext = `Sugar: ${TotalSugar.toFixed(1)}`;


    const container = document.createElement('div');
    const calories = document.createElement('p');
    const carb = document.createElement('p');
    const protein = document.createElement('p');
    const fat = document.createElement('p');
    const sugar = document.createElement('p');

    calories.textContent = caltext;
    carb.textContent = carbtext
    protein.textContent = proteintext;
    fat.textContent = fattext;
    sugar.textContent = sugartext;

    container.appendChild(calories);        
    container.appendChild(carb);        
    container.appendChild(protein);        
    container.appendChild(fat);        
    container.appendChild(sugar);        
    nutrition.append(container);


}

getFruit();