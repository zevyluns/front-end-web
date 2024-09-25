var xArray = ["Qatar", "USA", "Iraq", "United Kingdom", "Singapore"];
var yArray = [100 ,70, 67, 18, 10];

var data = [{
	x: xArray,
	y: yArray,
	type:"bar"
}];

var layout = {title:"World Wide Wine Production"};
Plotly.newPlot("myPlot", data, layout);