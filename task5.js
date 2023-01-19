// const fetchData = () =>{
//     const promise = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve('Done')
//         }, 1500)
//     });
//     return promise;
// };

// setTimeout(()=>{
//     console.log('timer is done');
//     fetchData().then(data1 => {
//         console.log(data1);
//         return fetchData();
//     })
//     .then(data2 => {
//         console.log(data2);
//     })
// }, 2000);

// console.log('hello');


//Output

//1.

// console.log('a');
// console.log('b');
// setTimeout(() => console.log('c'), 3000)
// console.log('d');

//a,b,d,c

//2.

// console.log('a');
// console.log('b');
// setTimeout(() => {console.log('c')}, 3000)
// setTimeout(() => {console.log('d')}, 0)
// console.log('e');

// //a,b,e,d,c



//Promise

// console.log('a');
// console.log('b');

// new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('c');
//     },3000)
// })
// .then(data => console.log(data))
// .then(()=>new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('d')
//     },0)
// }))
// .then(data => console.log(data))
// .then(()=>console.log('e'))


//Async Await

async function abcde(){
    console.log('a');
    console.log('b');

    await new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve();
        },3000)
    })
    console.log('c');
    await new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve();
        },0)
    })
    console.log('d');
    console.log('e');
}
abcde();