async function apiRequest(url, options={}){
    const defaultOptions = {
        headers : {
            "Content-Type" : "application/json",
        },
    };
    try{
        console.log("Loading...");
        const response = await fetch(url,{
            ...defaultOptions,
            ...options
        });
        if(!response.ok){
            if(response.status === 400){
                throw new Error("Resource Not Found (404)")
            }else if(response.status === 500){
                throw new Error("Server error (500)")
            }else{
                throw new Error(`Request failed with ${response.status}`);
            }
        }
        return await response.json();
    }catch(error){
        console.log("API Error: ", error.message);
        throw error;
    }
    finally{
        console.log("Request Completed");
}
}

//TASK 1

async function getUser(id){
    try{
        const user = await apiRequest(`https://jsonplaceholder.typicode.com/users/${id}`);
        console.log("user found: ", user.name , user.email);
    }catch(error){
        console.log("Failed to get user");   
    }
}
getUser(1)

//TASK 2

async function updateUser(id){
    try{
        const updatedUser = await apiRequest(`https://jsonplaceholder.typicode.com/users/${id}`,
        {
            method : "PATCH",
            body:JSON.stringify({
                email:"Ujjwalsharma.21@gmail.com",
            })
        }
        );

        console.log("Updated User" , updatedUser);
    }catch(error){
        console.log("Update Failed");
    }
}
updateUser(1)

//TASK 4
// 1. Difference between PUT and PATCH?
// >>>> there is nothing much difference but Put replaces the full object while patch updates only specific field
// 2. Why centralized apiRequest is useful?
// >>>> it is useful because it helps in creating a single api code and make it reuse again and again
// 3. Why status-based errors are better than generic errors?
//>>>>> Status based errors are better because it helps in debugging code as its indicates the type of error
