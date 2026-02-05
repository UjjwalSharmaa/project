//TASk 1

const users = [
  { id: 1, name: "Ujjwal", active: true },
  { id: 2, name: "Ravi", active: false },
  { id: 3, name: "Jatin", active: true },
];

const activeUsers = users.filter((user)=>{
    return user.active == true;
})
console.log(activeUsers);

const names = users.map((user)=>{
    return user.name;
})
console.log(names);

const userById = users.find((user)=>{
    return user.id===2;
})

console.log(userById);

const addUser = [...users,{id: 4, name:"Shubham", active:true}];
console.log(addUser);

//TASK 2
async function loadUsers(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

     const simplifiedUsers = data.map((user) => ({
    name: user.name,
    email: user.email,
  }));

    console.log(simplifiedUsers);
}
loadUsers();

//Task 3
// Q1: Why should we not mutate arrays in React?
// We should not mutate arrays in React because React relies on reference changes to detect state updates.
// If we mutate the same array, React may not re-render the component.


// Q2: Why is map preferred over for loop in React?
// map is preferred because it returns a new array, which React needs when rendering lists (like JSX elements).
// for loops do not return arrays directly and are less declarative.


// Q3: Which JS concepts do you feel most confident in now?
// Fetch Api 

