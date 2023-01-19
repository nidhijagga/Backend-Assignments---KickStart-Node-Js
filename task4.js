const person = {
    name : 'Max',
    age: 29,
    greet(){
        console.log('Hi! I Am ' + this.name);
    }
}

// const printName = (personData) => {
//     console.log(personData.name);
// }

const printName = ({name, age}) => {
    console.log(name , age);
}
printName(person);

//by property name (key)
const {name, age} = person;
console.log(name, age);

//by any params
const hobby = ['Sports', 'Coding'];
const [hobby1, hobby2] = hobby;
console.log(hobby1, hobby2);



//Output Questions

//1.

// const obj1 = {'key1': 1, "key2": 2, "key3": 1000}
// 	const { key1, key3}  = { ...obj1}
// 	console.log(key1, key3)

    //1 & 1000

//2.

const arr1 = ['value1', 'value2']
	const [ val1, val2 ] = arr1
	console.log(val1)
	console.log(val2)

    //value1 & value2


//3.

const obj1 = {'key1': 1, "key2": 2, "key3": 1000}
	let { key1, key3}  = obj1
	key1 = 20;
	key3 = 123
	console.log(obj1.key1, obj1.key3)

    //1 & 1000 as we are not modifying the obj1.key1 or obj1.key3, we are modifying the new variables key1 and key3.