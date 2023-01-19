const name = "Nidhi";
let age = 24;
const hasHobbies = true;

age = 35;
// name = "Anup"; //Error

const summerizeUser = (userName, userAge, userhasHobbies) => {
    return (`Name is ${userName}, age is ${userAge}, and the user has Hobbies ${userhasHobbies}`)
}

console.log(summerizeUser(name , age, hasHobbies));

// const product = (a, b) =>{
//     return a*b;
// }


const addOne = a => a+7;
const addRandom = () => 5+6;
console.log(addRandom());
console.log(addOne(3));



const person = {
    name: 'Max',
    age: 34,
    // greet : ()=>{
    //     console.log('Hi! I am ' + this.name);
    // }// this gives undefined.

    // greet: function(){
    //     console.log('Hi! I am ' + this.name);
    // } // this works fine

    greet(){
        console.log('Hi! I am ' + this.name);
    }
}

person.greet();


//1.
const product = (a, b) => a*b;
console.log(product(2, 4));


// //2.
// const student = {
//     name : 'Nidhi',
//     age: 24,
//     marks: 89
// }


class student{
    constructor(name, age, marks){
        this.name = name;
        this.age = age;
        this.marks = marks;
    }

    setPlacementAge(minimumPlacementAge){
        console.log(this);
        return (minMarks) => {
            console.log(this);
            if(this.marks>minMarks && this.age>minimumPlacementAge){
                console.log(this.name + " is Eligible for Placements");
            }
            else{
                console.log(this.name + " is not Eligible for Placements");
            }
        }
    }
}

const nidhi = new student('Nidhi', 24, 89);
const teena = new student("Teena", 12, 56);

nidhi.setPlacementAge(18)(70);
teena.setPlacementAge(18)(70);
