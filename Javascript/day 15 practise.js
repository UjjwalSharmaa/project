//Challenge 1

// function getMessage(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//                 resolve("Hello from Promise");
//         },1000);
//     });
// }

// async function showMessage() {
//     try{
//         const message = await getMessage();
//         console.log(message);
//     }
//     catch(error){
//         console.log(error);
        
//     }
// }

// showMessage();


//Challenge 2
// function checkAge(age){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(age>18){
//                 resolve("Access Granted");
//             }
//             else if(age<18){
//                 reject("Access Denied")
//             }
//         },1000);
//     })
// }

// async function verifyAge(age){
//     try{
//         const message = await checkAge(age);
//         console.log(message);
//     }
//     catch(error){
//         console.log(error);
//     }
    
// }
// verifyAge(11);

//challenge 3
function stepOne(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
                resolve("Step 1 Completed");
        },1000);
    })
}

function stepTwo(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
                resolve("Step 2 Completed");
        },2000);
    })
}

async function runSteps(){
    try{
        const message = await stepOne();
        const message2 = await stepTwo();
        console.log(message);
        console.log(message2);
    }
    catch(error){
        console.log(error);
    }
    
}
runSteps();