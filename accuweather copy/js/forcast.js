function Forecast() {  
}

/* 현재 날씨 얻어오기 */

Forecast.prototype.getCurrentWeather = function(city){
    var dataObj;
    var url = "http://api.openweathermap.org/data/2.5/weather";
    url += "?q=" + city;
    url += "&units=" + "metric";
    url += "&lang=" + "kr";
    url += "&APPID=" + "767fd963cab4e1ad445013b1e9744439";  // 본인의 api key 사용

    $.ajax({
        type:"GET",
        url:url,
        dataType:"json",
        async: false,  // 동기형식으로 지정(data값을 return해주기 위해)
        success:function(data) {
            console.log("현재온도: " + data.main.temp);
            dataObj = data;
        },
        error:function(request,status,error) {
            console.log("code:" + request.status);
            console.log("message:" + request.responseText);
            console.log("error:" + error);
        }
    });

    return dataObj;
};

/* 내일 날씨 얻어오기 */

Forecast.prototype.getTomorrowWeather = function(){   
    //..
};
