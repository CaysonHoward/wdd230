document.getElementById('fruitForm').onsubmit = function(event) {
    var checkboxes = document.querySelectorAll('input[name="fruit"]:checked');

    if (checkboxes.length < 3) {
        document.getElementById('error-message').textContent = 'Please select at least 3 fruits.';
        event.preventDefault(); 
        return false;
    }
    document.getElementById('error-message').textContent = ''; 
    addOrderedDrink();
    return true; 
};

const infoURL = "https://caysonhoward.github.io/wdd230/bountifulfoods/data/fruits.json";
const fruitContainer = document.querySelector('#fruitContainer');

async function displayFruit() {
  const response = await fetch(infoURL);
  const data = await response.json();
  addFruit(data);
}

function addFruit(data) {
  data.forEach(fruit => {
    const label = document.createElement('label');
    const input = document.createElement('input');

    input.setAttribute("type", "checkbox");
    input.setAttribute("id", fruit.id);
    input.setAttribute("name", "fruit");
    input.setAttribute("value", fruit.name);
    label.setAttribute('for', fruit.id);
    label.textContent = fruit.name;
    const fruitDiv = document.createElement('div');
    fruitDiv.append(input);
    fruitDiv.append(label);
    fruitContainer.append(fruitDiv);
  });
}

    // Increment and save the new count to Local Storage
function addOrderedDrink() {
  let count = parseInt(localStorage.getItem('drinkCount') || 0);
  localStorage.setItem('drinkCount', ++count);
}

displayFruit();