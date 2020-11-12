function getURLthenScore() {
    var url = (document.getElementById('textbox').value).replace('www.', 'pay.').replace('http://', 'https://') +'.json?limit=1';
    transition();
    fetch(url).then(response => {
        return response.json();}).then(
            data => { score = data[0]['data']['children'][0]['data']['score'];
                      updateScore(score);})
};

function transition(){
    document.getElementById("title").classList.add('fadeOutUp');
    document.getElementById("textbox").classList.add('zoomOut');
    document.getElementById("buttondiv").classList.add('fadeOutDown');
    document.getElementsByTagName("H2")[0].removeAttribute("hidden");
};

function updateScore(score) {
	document.getElementById('counter').innerHTML = score;
	var t = setTimeout(getURLthenScore, 5000);
};
