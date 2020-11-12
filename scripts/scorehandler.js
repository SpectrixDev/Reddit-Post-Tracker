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

var dps = []; // dataPoints
var chart = new CanvasJS.Chart("chartContainer", {
	title :{
		text: "Dynamic Data"
	},
	data: [{
		type: "line",
		dataPoints: dps
	}]};

var xVal = 0;
var yVal = 100; 
var updateInterval = 1000;
var dataLength = 20; // number of dataPoints visible at any point

var updateChart = function (count) {

	count = count || 1;

	for (var j = 0; j < count; j++) {
		yVal = yVal +  int(score);
		dps.push({
			x: xVal,
			y: yVal
		});
		xVal++;
	}

	if (dps.length > dataLength) {
		dps.shift();
	}

	chart.render();
};

updateChart(dataLength);
setInterval(function(){updateChart()}, updateInterval);

var t = setTimeout(getURLthenScore, 5000);
};
