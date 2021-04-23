var date = ["21-03-22", "21-03-23", "21-03-24", "21-03-25"];
var temp = [ 10.2 ,14.5 , 17.2 , 18.0];
var rain = [ 10, 50, 10 ,5];
var bust = [40, 60, 70, 90];
var day1 = [], day2 = [] , day3 = [] ,day4 = [];

//var forecast = new Object();

function Forecast(arr){
    this.foreCastArr = arr;
switch(arr) {
    case temp: this.division = "temp";
        break;
    case  rain:this.division = "rain";
        break;
    case  bust: this.division = "bust";
        break;     
}
 }
// 보여주는 개념

Forecast.prototype.show = function(){
    var str="";
    for(var i = 0; i<this.foreCastArr.length; i++){
        str += this.foreCastArr[i] + this.unit() + " ";
    }
       return str;
};

// 평균 구해주는 개념

Forecast.prototype.avgShow= function(){
    var num =0;
    for(var i = 0; i<this.foreCastArr.length; i++){
        num+= this.foreCastArr[i];
    }
 

    var avg = num / this.foreCastArr.length;

    return avg.toFixed(1) + this.unit();
};

//unit(단위를 붙혀주는 함수이다.)
Forecast.prototype.unit = function(){
    switch (this.division) {
        case "temp": return " °C";
            break;

        case "rain": return "mm";
            break;

        case "bust": return "㎍/m³";
            break;
    }
      
  }

  Forecast.prototype.innerHtml = function() {
  var showId ="show_" + this.division;
  var showAvgId ="show_" + this.division + "_avg";

  

  document.getElementById(showId).innerHtml = this.show();
  document.getElementById(showAvgId).innerHtml = this.avgShow();
   
  }
//함수호출
var temp = new Forecast(temp);
var rain = new Forecast(rain);
var bust = new Forecast(bust);

//Forecast (함수랑 객체들의 정보)
temp.innerHtml();
rain.innerHtml();
bust.innerHtml();

// Forecast.site(temp);
// Forecast.site(rain);
// Forecast.site(bust);
