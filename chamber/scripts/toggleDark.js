function toggleDark(){
    var body = document.getElementById('top');
    var content = document.getElementById('content');

    if(body.classList.contains('darkBody')){
        body.classList.remove('darkBody')
        content.classList.remove('darkBackground')
    } else{
        body.classList.add('darkBody')
        content.classList.add('darkBackground')
    }

}