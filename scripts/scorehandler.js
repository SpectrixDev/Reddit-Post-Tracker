function getURLthenScore() {
    var url = (document.getElementById('textbox').value).replace('www.', 'pay.').replace('http://', 'https://') +'.json?limit=10';
    transition();
    fetch(url).then(response => {
        return response.json();}).then(
            data => { document.getElementById('counter').innerHTML = data[0]['data']['children'][0]['data']['score']; })
};

function transition(){
    document.getElementById("title").classList.add('fadeOutUp');
    document.getElementById("textbox").classList.add('zoomOut');
    document.getElementById("buttondiv").classList.add('fadeOutDown');
    document.getElementsByTagName("H2")[0].removeAttribute("hidden")
}