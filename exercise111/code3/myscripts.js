var xArray = ["Italy", "Indonesia", "England", "Hungary", "Singapore"];
var yArray = [70 ,55, 54, 20, 10];

var layout = {title:"World Wide Wine Production"};

var data = [{labels:xArray, values:yArray, hole:.4, type:"pie"}];


Plotly.newPlot("myPlot", data, layout);