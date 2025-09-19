// Finding day of week from the day number
// Week starts from 1(Monday) and goes till 7(Sunday)

const dayNumber = 2;
let dayName ;
let validDay = true;

switch(dayNumber){
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        console.log("Enter valid day number");
        validDay = false;

}

if(validDay){
    console.log(dayNumber,"day of week is", dayName);
}
