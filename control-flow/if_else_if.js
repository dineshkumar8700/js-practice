// Finding category(Senior Citizen, Teenager,Adult, Child) of person based on age

const age = 20;
let personCategory;
if (age>=60){
    personCategory = "Senior Citizen";
}
else if (age >=18 && age <60){
    personCategory = "Adult";
}
else if (age > 12 && age <18){
    personCategory = "Teenager";
}
else {
    personCategory = "Child";
}

console.log("Person is", personCategory);
