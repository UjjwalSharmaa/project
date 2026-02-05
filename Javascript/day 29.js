// const cart = [
//     { item: "Book", price: 200 },
//     { item: "Pen", price: 50 },
//     { item: "Bag", price: 500 }
// ];

// const total = cart.reduce((total, val) => {
//     return total + val.price;
// }, 0)
// console.log(total);


//TASK 1
const users = [
    { id: 1, name: "Ujjwal" },
    { id: 2, name: "Ravi" },
    { id: 3, name: "Jatin" }
];

const numbers = [10, 20, 30, 40];

const total = numbers.reduce((prevVal, Val)=>{
    return prevVal + Val;
},0)

console.log(total);

//TASK 2
const findName = users.find((user)=>{
    return user.id===3;
})

console.log(findName);

//Task 3
// Spread operator is important in React because it helps create new arrays and objects without mutating the original state, which is required for proper state updates and re-rendering.


