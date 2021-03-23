var date = ["21-03-22", "21-03-23", "21-03-24", "21-03-25"];
var temp = [ 10.2 ,14.5 , 17.2 , 18.0];
var rain = [ 10, 50, 10 ,5];
var bust = [40, 60, 70, 90];
var day1 = [], day2 = [] , day3 = [] ,day4 = [];

var forecast = new Object();
// temp
forecast.tempShow = function(){
    var str="";
    for(var i = 0; i<temp.length; i++){
        str += temp[i] + "°C ";
    }
        document.getElementById("show_temp").innerHTML = str + "°C ";
        
};


forecast.tempAvgShow = function(){
    var num =0;
    for(var i = 0; i<temp.length; i++){
        num+= temp[i];
    }
    var avg = num / temp.length;
    document.getElementById("show_temp_avg").innerHTML = avg + "°C";
};

// rain
forecast.rainShow = function(){
    var str="";
    for(var i = 0; i<rain.length; i++){
        str += rain[i] + "mm";
}
    document.getElementById("show_rain").innerHTML = str;
    
};
forecast.rainAvgShow = function(){
    var num =0;
    for(var i = 0; i<rain.length; i++){
        num+= rain[i];
    }
    var avg = num / rain.length;
    document.getElementById("show_rain_avg").innerHTML = avg + "mm";
};
// bust
forecast.bustShow = function(){
    var str="";
    for(var i = 0; i<bust.length; i++){

        str += bust[i] + " ㎍/m³";
    }
        document.getElementById("show_bust").innerHTML = str;
};

forecast.bustAvgShow = function(){
    var num =0;
    for(var i = 0; i<bust.length; i++){
        num+= bust[i];
    }
    var avg = num / bust.length;
    document.getElementById("show_bust_avg").innerHTML = avg + " ㎍/m³";

};

forecast.tempShow();
forecast.rainShow();
forecast.bustShow();
forecast.tempAvgShow();
forecast.rainAvgShow();
forecast.bustAvgShow();

