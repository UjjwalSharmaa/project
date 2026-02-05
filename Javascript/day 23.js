//Task 1

// async function apiRequest(url, options={}) {
//     try{
//         console.log("Loading Users");
//         const response = await fetch(url, options);
//         if(!response.ok){
//             throw new Error(`Error: ${response.status}`);
//         }
//         return await response.json();
//     }
//     catch(error){
//         console.log(error.message);
//         throw error;
//     }
//     finally{

//         console.log("Done loading");
//     }
// }

// async function getUsers() {
//     try{
//         const data = await apiRequest(
//             "https://jsonplaceholder.typicode.com/users"
//         );
//         if(data.length===0){
//             console.log("No Users Found");
//             return;
//         }
//         data.forEach(user => {
//             console.log(user.name , " ", user.email);
//         });
//     }
//     catch(error){
//         console.log(error.message);
//     }
// }

//Task 2
async function apiRequest(url, options={}){
    console.log("Loading");
    try{
        const response = await fetch(url, options);
        if(!response.ok){
            throw new Error(`Request Failed with status ${response.status}`);
        }
        return await response.json()
    }catch(error){
        console.log("Error Occurred: ", error.message);
        throw error;
    }finally{
        console.log("Loading Finished");
    }
}

async function getUsers(){
    try{
        const users = await apiRequest("https://jsonplaceholder.typicode.com/users");
        if(users.length===0){
            console.log("No users Found");
            return;
        }
        users.forEach(user => {
            console.log(user.name, " : ", user.email);
        });
    }catch(error){
            console.log("Failed To load Users");
        };
}

getUsers();


//Task 3
//Finally: will always run irrespective of the request fails or succeeds it is useful for cleanup tasks like stopping loaders, closing connections or logging completion.

//throwing the error again allows the calling function (getusers ) to know something went wrong and handle it properly inside of silently failing.

//Keeping API logic inside apirequest makes the code reusable , clean and easier to maintain