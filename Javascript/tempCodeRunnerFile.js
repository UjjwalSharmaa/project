async function getUser(){
    try{
        const user = await apiRequest(
            "https://jsonplaceholder.typicode.com/users/1"
        );
        console.log(user.name);
    }catch(error){
        console.log(error.message);
    }
}

getUser();
