//TAsk 1
async function apiRequest(url, options={}) {
    const defaultOptions ={
        method : "GET",
        headers:{
            "Content-Type" : "application/json"
        }
    };

    try{
        console.log("Loading...");
         const response = await fetch(url, {
      ...defaultOptions,
      ...options,
      headers: {
        ...defaultOptions.headers,
        ...options.headers
      }})
        if(!response.ok){
            throw new Error(`response failed ${response.status}`);
        }
        return response.json();
    }
    catch(error){
        console.log("Error : ", error.message)
        throw error;
    }
    finally{
        console.log("Request Finished");
    }
}

async function getUsers(){
    try{
        const users = await apiRequest("https://jsonplaceholder.typicode.com/users");
        const userinfo = users.map((user)=>({
           name:user.name,
           email:user.email 
        }));
        console.log(userinfo);
    }catch(error){
        console.log("Failed To load Users");
        
    }
}

getUsers();

async function postUser() {
    try{
        const newUser = await apiRequest( "https://jsonplaceholder.typicode.com/users",{
            method:"POST",
            body: JSON.stringify({
                name:"Ujjwal",
                email: "ujjwalsharma.21@gmail.com"
            })
        });
        console.log("User Added" , newUser);
    }catch(error){
        console.log("Failed to load User");
    }
}

postUser();

