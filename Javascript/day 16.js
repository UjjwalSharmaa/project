// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then((response)=>response.json())
// .then((data)=>{
//     console.log(data); 
// });

// async function getPost(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     const data = response.json;
//     console.log(data);
// }
// getPost();

// async function getPost(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//         if(!response.ok){
//             throw new Error("Data Request Failed");
//         }
//             const data = await response.json();
//             console.log(data);
//     }
//     catch(error){
//         console.log("Error ", error.message);
//     }
// }

// getPost();


//Task 1
async function getData(){
    try{
        const request = await fetch("https://jsonplaceholder.typicode.com/users")
        if(!request.ok){
            throw new Error("Netword Request Failed")
        }
         const data= await request.json();
         const dataName = data.map(user => user.username)
        console.log(data);
        console.log(dataName);
    }
    catch(error){
        console.log(error.message);
    }
}

getData();
