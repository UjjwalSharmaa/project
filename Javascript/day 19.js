//TASK 1

async function getUsers(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users",{
            method : "GET",
            headers : {
                "Content-Type" : "application/json"
            },
        })
        if(!response.ok){
            throw new Error("Request Failed");
        }
        const data = await response.json();
        data.forEach(user => {
            console.log("Name: " + user.name);
            console.log("Email: " + user.email);
            console.log("         ");
            
        });
    }
    catch(error){
        console.log(error);
    }
}

getUsers();


// TASK 2
async function addUser(){
    try{
        const response = await fetch ("https://jsonplaceholder.typicode.com/users",{
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                name:"Ujjwal",
                email:"ujjwalsharmaa.21@gmail.com"
            })
        });
        if(!response.ok){
            throw new Error("Network Request failed");
        }
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log(error);
        }
}

addUser();

//TASK 3

async function updateUser() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1",{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:"ujjwal",
                email: "Ujjwalsharmaa.21@gmail.com"
            })
        });
        if(!response.ok){
            throw new Error("Network Request Failed");
        }
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log(error.message);
    }
}
updateUser();

//Task 4
async function deleteUser() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1",{
            method:"DELETE"
        })
        if(!response.ok){
            throw new Error("Can't delete it, Try again Later");
        }
        console.log("Deleted Successfully");
        }
        catch(error){
            console.log(error.message);
        }
    }

deleteUser();