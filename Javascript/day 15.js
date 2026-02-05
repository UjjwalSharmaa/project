
//Task 1
function getNumber(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(10);
        },1000);
    });
}

async function fetchNumber() {
    console.log("fetching Number");
    const number = await getNumber();
    console.log(number);
    console.log("Part 2 Done")
}

fetchNumber();

//Task 2
function getUser(success){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(success){
                resolve("Success Fetching User");
            }
            else{
                reject("Failed Cannot fetch User, Try again later")
            }
        },1000);
    });
}

async function fetchUser() {
    try{
        const user = await getUser(false);
        console.log(user);
    }catch(error){
        console.log(error);
        
    }
    
}

fetchUser();


//task 3 
// async await is quite easy to read, does good work in less lines of codes also it is easy to maintain.