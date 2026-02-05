const myPromise = new Promise((resolve, reject)=>{
    const success = true;
    if(success){
        resolve("Completed data is on the screen");
        
    }
    else{
        reject("Failed Try again Later")
    }
});

myPromise
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})


// Promise with setTimeout
function fetchData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Data fetched")
        },1000);
    });
}

fetchData().then((data)=>{
    console.log(data);
});


//Error Handling in Promise
function login(isLoggedIn){
    return new Promise((resolve, reject)=>{
        console.log("Checking your Details");
        
        if(isLoggedIn){
            resolve("Already LoggedIn, Logout First")
        }
        else{
            reject("Not loggedIn, try to Login First");
        }
    })}

login(false)
.then((msg)=>console.log(msg))
.catch((error)=>console.log(error)
)

//Task 4 answer =>
// promises are better than callback because its clean and efficient to manage ,promises are easy to read and by implementing promises we can actually prevent callback Hell