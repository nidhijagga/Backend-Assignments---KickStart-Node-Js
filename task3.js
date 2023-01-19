const hobby = ['Sports', 'Coding'];

console.log(hobby.map(hobby => 'Hobby: ' + hobby));
console.log(hobby);
hobby.push('Cooking');
console.log(hobby);

const coppiedArray = [...hobby];
console.log(coppiedArray);

const toArray = (...args) => {
    return args;
}

console.log(toArray(1, 2, 3, 4));




//2.
let a = ['apple', 'oranges', ' ', 'mango', ' ', 'lemon']

console.log(a);

let transformed_array = a.map(x => x.replace(" ", "empty string"));
console.log(transformed_array);


//3. push() method is being used to add a new element to the existing hobby array. The push() method modifies the contents of the array, but does not reassign the variable to a new array. Therefore, it is able to add the new element to the array without throwing an error.

//4. The spread operator (...) is a feature in JavaScript that allows you to expand an iterable (such as an array or string) into its individual elements, or expand the properties of an object into individual properties.

let originalArray = [1, 2, 3];
let newArray = [...originalArray];
console.log(originalArray === newArray);  // false

//originalArray and newArray are two separate arrays with the same elements, so originalArray === newArray returns false.


//5. The rest operator (...) is a feature in JavaScript that allows you to gather remaining elements or properties into an array or object. It is the opposite of the spread operator, which expands elements or properties.

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x);  // 1
console.log(y);  // 2
console.log(z);  // {a: 3, b: 4}



//Output 


//1. 

const obj1 = { 'key1': 1 }

const obj2 = { ...obj1 }

if (obj2 === obj1) {
    console.log('same objects')
}
else {
    console.log('different objects')
}

//prints the different objects.


//2.

// const obj1 = {'key1': 1 , 'key2' : 2}

// const obj2 = { ...obj1, key1: 1000}

// console.log(obj1) // {'key1': 1 , 'key2' : 2}

// console.log(obj2) // {'key1': 1000 , 'key2' : 2}



