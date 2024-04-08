document.getElementById('fruitForm').onsubmit = function(event) {
    var checkboxes = document.querySelectorAll('input[name="fruit"]:checked');

    if (checkboxes.length < 3) {
        document.getElementById('error-message').textContent = 'Please select at least 3 fruits.';
        event.preventDefault(); 
        return false;
    }
    document.getElementById('error-message').textContent = ''; 
    incrementDrinkCount();
    return true; 
};

const linksURL = "https://caysonhoward.github.io/wdd230/bountifulfoods/data/fruits.json";
const fruitContainer = document.querySelector('#fruitContainer');

async function getFruit() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayFruit(data);
}

function displayFruit(data) {
  data.forEach(fruit => {
    const fruitLabel = document.createElement('label');
    const fruitInput = document.createElement('input');

    // Set attributes for the checkbox
    fruitInput.setAttribute("type", "checkbox");
    fruitInput.setAttribute("id", fruit.id);
    fruitInput.setAttribute("name", "fruit");
    fruitInput.setAttribute("value", fruit.name);
    
    // Create a div to wrap input and label, making it easier to manage in grid
    const fruitDiv = document.createElement('div');

    // Append input to the wrapper div
    fruitDiv.append(fruitInput);

    // Set label attributes and append it to the wrapper div
    fruitLabel.setAttribute('for', fruit.id);
    fruitLabel.textContent = fruit.name;
    fruitDiv.append(fruitLabel);

    // Append the wrapper div to the fruitContainer, each acting as a grid item
    fruitContainer.append(fruitDiv);
  });
}

    // Increment and save the new count to Local Storage
function incrementDrinkCount() {
  let count = parseInt(localStorage.getItem('drinkCount') || 0);
  localStorage.setItem('drinkCount', ++count);
}

getFruit();