document.addEventListener('DOMContentLoaded', function() {
    const drinkCountElement = document.getElementById('drinkCount');

    // Load the existing count from Local Storage
    function updateDrinkCount() {
        const count = localStorage.getItem('drinkCount') || 0;
        drinkCountElement.textContent = count + ' drinks';
    }

    // Initialize the drink count display
    updateDrinkCount();
});