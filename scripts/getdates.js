const date = new Date();
const yearString = date.toLocaleDateString('en-US', {
    year: 'numeric'
});
document.querySelector("#copyrightYear").innerHTML = yearString;
document.querySelector("#lastModified").innerHTML = `Last Modified: ${document.lastModified}`;