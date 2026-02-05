// async function updatePost(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/1",{
//             method:"PUT",
//             headers:{
//                 "Content-Type":"application.json"
//             },
//             body: JSON.stringify({
//                 id:1,
//                 title: "UpdatedTitle",
//                 body:"Updated Content",
//                 userId:"1"
//             })
//         }
//     );
//     if(!response.ok){
//         throw new Error("Can't update it now due to network request failure");
//     }
//     const data = await response.json();
//     console.log(data);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// updatePost();



// async function deletePost(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/1",{
//             method: "DELETE"
//         })
//         if(!response.ok){
//             throw new Error("Can't delete it due to network request failure");            
//         }
//         console.log("Post Deleted Successfully");
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// deletePost();


//Task 1, Task 2, Task 3

async function putData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PUT",
        }
        );
        if (!response.ok) {
            throw new Error("Network Request Failed");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}

putData();

//Task 2

async function deletePost() {
    try {
        const response =await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"},
            body: JSON.stringify({
                id: 1,
                title: "Updated Title",
                body: "Updated content",
                userId: 1
            })
        }
    );

            if(!response.ok){
                throw new error("Can't delete post try again later");
    }
        console.log("Post Deleted")
}
    catch(error){
        console.log(error);
    }
    
}
deletePost();

//Task 3 >>>
// POST sends the data to server or in easy words POSt store the data into the server while PUT updates data which is already existed on the server