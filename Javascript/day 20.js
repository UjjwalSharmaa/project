// function fetchPost(){
//     return fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(response=>response.json())
// }

// function fetchUser(){
//     return fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then(response=>response.json())
// }

// async function getAllData() {
//     try{
//         const [post,user] = await Promise.all([
//             fetchPost(),
//             fetchUser()
//         ]);
//         console.log(post);
//         console.log(user);
//     }
//     catch(error){
//     console.log("One Request Failed");
//     }
// }

// getAllData();


// async function getAllData(){
//     const result = await Promise.allSettled([
//         fetch ("https://jsonplaceholder.typicode.com/posts/1"),
//         fetch ("https://wrongurl.typicode.com/users")
//     ]);
//     console.log(result);
    
// }
// getAllData();


// function fastApi(){
//     return new Promise(resolve=>
//         setTimeout(()=>resolve("Fast API"),1000)
//     )
// }
// function slowApi(){
//     return new Promise(resolve=>
//         setTimeout(()=>resolve("Slow API"),5000)
//     )
// }
// function medApi(){
//     return new Promise(resolve=>
//         setTimeout(()=>resolve("Medium API"),3000)
//     )
// }

// Promise.race([fastApi(),slowApi()])
// .then(results=> console.log(results));



// ("https://jsonplaceholder.typicode.com/posts/1")
// ("https://jsonplaceholder.typicode.com/users/1")


//TASK 1

function getPosts(){
    return fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response=>response.json())
}
function getUsers(){
    return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response=>response.json())
}

async function getData() {
    try{
        const [posts,users] = await Promise.all([
            getPosts(),
            getUsers()
        ]);
        console.log(posts);
        console.log(users);
    }catch(error){
        console.log("One of the request failed");
    }
}

getData();

//TASK 2

async function getAllData(){
    const response = await Promise.allSettled([
        fetch("https://jsonplaceholder.typicode.com/posts/1"),
        fetch("https://jsonplaceholder.typicode.com/po")
    ]);
    console.log(response);
}

getAllData();

//TASK 3
// 1. Promise.all is used when we want data from multiple APIs simultaneously, however even if a single api not work the promise does not resolve
// 2. Promise.allSettled is used when we want data from multiple APIs it will be resolve and show data even after some APIs don't work.
// 3. Promise.race is used when we want the data as fastest as possible