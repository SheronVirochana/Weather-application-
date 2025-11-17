console.log("js loaded!!")

// http://api.weatherapi.com/v1/current.json?key=032db12350d14bd1b59100037251611&q=panadura.&aqi=no

console.log("start");


fetch("http://api.weatherapi.com/v1/current.json?key=032db12350d14bd1b59100037251611&q=panadura.&aqi=no")
.then(res => res.json())
.then(data => console.log(data.current.wind_mph));

console.log("end");
