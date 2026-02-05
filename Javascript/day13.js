setTimeout(()=>{
    console.log("Data Loaded");
},2000);

console.log("Loading...");


function getData(callback){
    console.log("Fetching Data");
    setTimeout(() => {
       console.log("Data Received"); 
       callback();
    },1000);
};

getData(()=>{
    console.log("callback Executed");
});

// Task 3 Answer
//setTimeout doesn't block JavaScript execution because at the end we initiatlise time like how much time we have given a program to run and give the output, also because of event loop 