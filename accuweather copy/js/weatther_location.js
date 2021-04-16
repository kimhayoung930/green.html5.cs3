var url = location.href;
console.log(url);

var urlObj = new URL (url);
var params =urlObj.searchParams;
var q = params.get("q");

console.log(q);

var forecast = new Forecast ();
var locationWeather = forecast.getCurrentWeather(q);