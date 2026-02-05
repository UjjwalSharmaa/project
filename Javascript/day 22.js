async function apiRequest(url, options={}) {
    try{
        const response = await fetch(url, options);
        if(!response.ok){
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    }
    catch(error){
        console.log(error.message);
        throw error;
    }
    finally{
        console.log("API Request Finished");
    }
}

async function getUsers() {
    try{
        const data = await apiRequest(
            "https://jsonplaceholder.typicode.com/users"
        );
        if(data.length===0){
            console.log("No Users Found");
            return;
        }
        data.forEach(user => {
            console.log(user.name , " ", user.email);
        });
    }
    catch(error){
        console.log(error.message);
    }
}

getUsers();


//TASK 3
// 1 Why finally is useful : finally is useful as it helpful for the final code execution for example if we have done with both try and catch or either one of them finally will do the last task itself

//Why we throw error again after catch in apiRequest : because throw error in try block returns the error in the API request 