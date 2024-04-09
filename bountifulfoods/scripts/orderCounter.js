document.addEventListener('DOMContentLoaded', function() {
    const drinkCountElement = document.getElementById('drinkCount');

    function displayDrinkCount() {
        const count = localStorage.getItem('drinkCount') || 0;
        drinkCountElement.textContent = count + ' drinks';
    }
    displayDrinkCount();
});