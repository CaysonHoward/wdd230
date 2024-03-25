

const images = document.querySelectorAll('[data-src]');

function preloadImage(img){
    const source = img.getAttribute('data-src');
    if(!source) {
        return;
    }

    img.src = source;
}

const options = {
    threshold: .5,
    rootMargin: "-50px"
};

const io = new IntersectionObserver (
    (entries, io) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                console.log(entry.target);
                preloadImage(entry.target);
                io.unobserve(entry.target); 
            }
        });     
    }, options
);


images.forEach(image => {
    io.observe(image);
});

if(!localStorage.getItem('lastvisit')) {
    localStorage.setItem('lastvisit', Date.now());
    document.getElementById('diff').textContent = 'This is your 1st visit';
} else {
    setStyles();
}

function setStyles() {
    let prevDate = localStorage.getItem('lastvisit');
    let currDate = Date.now();
    
    let difference = currDate - prevDate;
        console.log(difference);
        let daysDifference = Math.floor(difference/1000/60/60/24);

    document.getElementById('diff').textContent = daysDifference;

    localStorage.setItem('lastvisit', Date.now());

}