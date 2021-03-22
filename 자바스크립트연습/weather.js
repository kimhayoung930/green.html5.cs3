var date = ["21-03-22", "21-03-23", "21-03-24", "21-03-25"];
var temp = [ 10.2 ,14.5 , 17.2 , 18.0];
var rain = [ 10, 50, 10 ,5];
var bust = [40, 60, 70, 90];


for(var i=0; i<date.length; i++){
    console.log(date[i]);
    console.log(temp[i]);
    console.log(rain[i]);
    console.log(bust[i]);
}

document.write("<h3>오늘의 날씨</h3>")
var arr = ["<21-03-22>","온도:10.2" ,"강수량:10", "미세먼지:40"];
var brr = ["<21-03-23>", "온도:14.5" , "강수량:50","미세먼지:60"];
var crr = ["<21-03-24>", "온도:17.2","강수량:10","미세먼지:70"];
var drr = ["<21-03-25>", "온도:18.0", "강수량:5","미세먼지:90"];

for (i in arr) {
    document.write(arr[i],"<br>");
} 
for(i in brr) {
    document.write(brr[i],"<br>")
}
for(i in crr){
    document.write(crr[i],"<br>")
}
for(i in drr) {
    document.write(drr[i],"<br>")
}
