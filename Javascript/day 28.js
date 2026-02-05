// const numbers =[1,2,3,4,5,6];

// const newNums = numbers.map((num)=>{
//     return num*2;
// })
// console.log(newNums);

// const users = [
//     {name:"Ujjwal", Age:20},
//     {name:"Sharma", Age:90}
// ]

// const filterUser = users.filter((user)=>{
//     return user.Age>50
// })
// console.log(filterUser);
// console.log(users);

// const Numbers = [1,2,3,4,5,6,7,8];

// const total = Numbers.reduce((prevVal , num)=>{
//     return prevVal + num
// },0)

// console.log(total);


// const user = {
//     name:"Ujjwal",
//     age:20
// }
// const {name : username, email= "ujjwalsharma@gmail.com"} = user;

// console.log(username, email);



// const colors  =["Red", "Blue", "Green"];
// const [first, second, third] = colors;

// console.log(first, second, third);



// function greet(name="Guest") {
//     console.log(`hello ${name}`);
// }

// greet();
// greet("Ujjwal");

// const users ={
//     profile :{
//         email:"Ujjwalsharma@gmail.com"
//     }
// }
// console.log(users.profile?.email);
// console.log(users.address?.city);


// const name = null;
//  const newName = name ?? "Ujjwal";
//  console.log(newName);
 
//TASK 1
const names = [
    {name : "Ujjwal", email:"ujjwalsharma.org"},
    {name : "Ravi", email:"ujjwalsharma.org"},
    {name : "Jatin", email:"ujjwalsharma.in"},
    {name : "Praveen", email:"ujjwalsharma.com"},
];

const newNames = names.map((user)=>{
    return user.name
})

console.log(newNames);

//TASK 2
const data = names.filter((name)=>{
    return name.email.includes(".org")
})
console.log(data);

