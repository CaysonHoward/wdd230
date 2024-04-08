var currentDate = new Date();

// Format the date (you can customize the format as needed)
var formattedDate = currentDate.getFullYear();
var modifiedMonth = currentDate.getMonth();
var modifiedDate = currentDate.getDate();

// Set the formatted date as the content of the paragraph
document.getElementById('lastModified').innerHTML = "Last modified: " + (modifiedMonth + 1) + "/" + modifiedDate + "/" + formattedDate;