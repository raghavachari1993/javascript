let myDate = new Date()
console.log(myDate.toDateString());
//console.log(myDate.toLocaleDateString());
//console.log(myDate.toLocaleTimeString());
//console.log(myDate.toTimeString());

let myCreateDate = new Date("2024-01-09")
console.log(myCreateDate.toLocaleDateString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myCreateDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
//console.log(newDate);
//console.log(newDate.getMonth()+1);
//console.log(newDate.getDay());


newDate.toLocaleString('default', {
    weekday: "long",
})