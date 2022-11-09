let salary = 40000;
let bonus = 0;
let year = 5;
let yearOfService =prompt("enter the year of service");
if(yearOfService >= 5 ){
    bonus = (salary*5/100);
    console.log('the net bonus is:'${bonus});
}
else {
    console.log("no netbonus will be provided");
}
