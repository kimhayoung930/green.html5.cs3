var date = ["21-03-22", "21-03-23", "21-03-24", "21-03-25"];
var temp = [ 10.2 ,14.5 , 17.2 , 18.0];
var rain = [ 10, 50, 10 ,5];
var bust = [40, 60, 70, 90];
var day1 = [], day2 = [] , day3 = [] ,day4 = [];

var forecast = new Object();
forecast.tempShow = function(){
    for(var i = 0; i<temp.length; i++){

    }
};
forecast.tempAvgShow = function(){
    var num =0;
    for(var i = 0; i<temp.length; i++){
        num+= temp[i];
    }
    var avg = num / temp.length;
    return avg;
};

forecast.rainShow = function(){
    for(var i = 0; i<rain.length; i++){
    
};
forecast.rainAvShow = function(){};

forecast.bustShow = function(){
    for(var i = 0; i<bust.length; i++){

    }
};
forecast.bustAvgShow = function(){};


