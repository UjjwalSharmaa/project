// fetch("https://jsonplaceholder.typicode.com/posts",{
//     method:"POST",
//     headers: {
//         "Content-Type":"application/json"
//     },
//     body:JSON.stringify({
//         title:"My Post",
//         body: "Our First Post",
//         UserID : 1
//     })
// })
// .then(response=> response.json())
// .then(data=> console.log(data));

// async function createPost(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
//             method:"POST",
//             headers:{"Content-Type":"application/json"},
//             body: JSON.stringify({
//                 title: "Try Learning This First",
//                 body:"Day 17 POST request",
//                 userId:1
//             })
//         }
//         );
//         if(!response.ok){
//             throw new Error("Failed to Create a Post, Try again later");
//         }
//         const data = await response.json();
//         console.log(data);
//     }catch(error){
//         console.log(error.message);
//     }
// }
// createPost();

async function createLearn() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "UJJWAL",
        course: "JavaScript",
        day: 17,
      }),
    });
    if (!response.ok) {
      throw new Error("Failed to Create a Post, Try Again Later");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

createLearn();
