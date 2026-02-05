// function greet(name){
//     return "Hello"+name;
// }
// const greet=(name)=>{
//     return `hello ${name}`
// }

// console.log(greet("Ujjwal"));


// const isLoggedIn = false;

// const message = isLoggedIn ? "Welcome Back" : "Please Login Sir";

// console.log(message);


// const isAdmin = true;
//  isAdmin && console.log("Admin Access Granted");
 

//  const user ={
//     name:"Ujjwal",
//     age:20
//  };

//  const {name, age} = user;
//  console.log(name,age);

 //Task 1
 const personAge =18;
 const checkAdult = personAge >= 18 ? "You are already an adult": "you are a minor";
 console.log(checkAdult);
 

 //Task 2
 const isLoggedIn = true;
 isLoggedIn && console.log("User is Logged in");

 //Task 3
 const user = {name:"Ujjwal", city:"Delhi"};
 const printUser = ({name,city})=>{
    console.log(name,city);
 }
 printUser(user);

 
 
