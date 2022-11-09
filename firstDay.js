/*console.log("welcome to the first day");
//variable in js
var age = 24; //can change anytime
const age = 24; // can't change
let age ="24"; // can not be changed
const person ={
    name: "cyimana",
   address: "kigali, Rwanda",
   age: "24" ,
   profession:"Developer"
}
Object.freeze(person); // to remain with the various we had not changed at all
person.name = 'Faisal';
console.log(person.name); */
const trainees = [
    {
        firstname: 'nicole',
        lastname: 'uwajneneza',
        age:24,
    },

    {
        firstname:'solange',
        lastname:'tumurere',
        age:21,


    },
    {
        firstname:'Laurence',
        lastname:'uwumuremyi',
        age:27,
    },
]
for (const trainee of trainees){
   // console.log(trainee);
   // console.log(`${trainee.firstname} is ${trainee.age} old`);
   //console.log(trainee.firstname + ' is ' +  trainee.age  + ' old ');
 
}
for (let index = 0; index < trainees.length; index ++){
    if(trainees[index].age>20){
        console.log(`${trainees[index].firstname} is ${trainees[index].age} old`);
    }
}
