function Forecast() {  
    this.url = "http://api.openweathermap.org/data/2.5/weather";
    this.url += "?units=" + "metric";
    this.url += "&lang=" + "kr";
    this.url += "&APPID=" + "767fd963cab4e1ad445013b1e9744439";
    this.url += "&q=";  
}

/* 현재 날씨의 모든 정보 얻어오기 */

Forecast.prototype.getCurrentWeather = function(city){
    var dataObj;
    var openWeatherAPI = this.url; 

    $.ajax({
        type:"GET",
        url:openWeatherAPI += city,
        dataType:"json",
        async: false,  // 동기형식으로 지정(data값을 return해주기 위해)
        success:function(data) {
           temp = Math,floor(data.main.temp);
        },
        error:function(request,status,error) {
            console.log("code:" + request.status+"/n"+"message:"+request.responseText+"/n"+"error:"+error);
        },
        complete:function(data,textStatus){
            
        }
    });

    return temp;
};



Forecast.prototype.getCurrentTemp = function(city){

};



