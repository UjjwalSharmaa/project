// async function apiRequest(url, options = {}) {
//   const response = await fetch(url, options);

//   if (!response.ok) {
//     throw new Error(`Error ${response.status}: ${response.statusText}`);
//   }

//   return response.json();
// }

// async function getUser(){
//     try{
//         const user = await apiRequest(
//             "https://jsonplaceholder.typicode.com/users/1"
//         );
//         console.log(user.name);
//     }catch(error){
//         console.log(error.message);
//     }
// }

// getUser();


// async function createPost(){
//     try{
//         const post = await apiRequest(
//             "https://jsonplaceholder.typicode.com/posts",
//             {method :"POST",
//                 headers:{
//                     "Content-Type":"application/json"
//                 },
//                 body:JSON.stringify({
//                     title : "Day 1",
//                     body : "Learning clean Async Code",
//                     userID:1
//                 })
//             }
//         );
//         console.log(post);
        
//     }catch(error){
//         console.log(error.message); 
//     }
    
// }
// createPost();



async function apiRequest(url, options={}){
    const response = await fetch(url, options);
    if(!response.ok){
        throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    return response.json();
}

async function getUser(){
    try{
        const data = await apiRequest("https://jsonplaceholder.typicode.com/users/");
        console.log(data);
        data.forEach(user =>{
            console.log(user.name);
            console.log(user.email);
        });
    }
    catch(error){
        console.log(error.message);
    }
}
getUser();


//TASK 3
// !response.ok is important as it checks if the API call throw any error or not