let raceNumber = Math.floor(Math.random() * 1000);
//Create a variable that indicates whether a runner registered early or not.
let runnerRegistered  = true;
//Create a variable for the runner’s age and set it equal to a number.
runnerRegistered ? console.log(true) : console.log(false);
let runnerAge = 19;
//Create a control flow statement that checks whether the runner is an adult AND registered early.
if(runnerAge > 18 && runnerRegistered === true) {
console.log(raceNumber + 1000) 
} ;
if(runnerAge > 18 && runnerRegistered === true) {
console.log(`race at 9:30 am ,number is ${raceNumber}`) 
} 
else if ( runnerAge > 18 &&  runnerRegistered != true){
  console.log(`will , number is ${raceNumber} at 11:00am `)
} else if (runnerAge < 18 ) {
  console.log( `will , number is ${raceNumber}at 12:30 pm `)
}else {
  console.log('see the registration desk.')
}

 
