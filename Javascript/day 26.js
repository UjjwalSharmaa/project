async function apiRequest(url, options = {}) {
    const defaultOptions = {
        headers: {
            "Content-Type": "application/json"
        },
    };
    try {
        console.log("Loading...");
        const response = await fetch(url, { ...defaultOptions, ...options });
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("Resource Not Found (404)");
            }
            else if (response.status === 500) {
                throw new Error("Server error (500)")
            } else {
                throw new Error(`Request failed with ${response.status}`)
            }
        }
        return await response.json();
    }
    catch (error) {
        console.log("API Error :", error.message);
        throw error;
    }
    finally {
        console.log("Request Completed");
    }
}

async function getPostByUserId(userId) {
    try {
        const posts = await apiRequest(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        console.log(`Posts by User ${userId}`);
        posts.forEach(post => {
            console.log(post.title);
        });

    } catch (error) {
        console.log("Failed to fetch Post");
    }
}

getPostByUserId(2);


async function getPostByEmail() {
    try {
        const data = await apiRequest("https://jsonplaceholder.typicode.com/users");
        const gmailUsers = data.filter(user =>
            user.email.includes("gmail")
        );

        console.log("Gmail Users:");
        gmailUsers.forEach(user => {
            console.log(user.name, "-", user.email);
        });

    } catch (error) {
        console.log("Error Loading Users");
    }
}
getPostByUserId(1);

async function getUserByName(name){
    try{
        const users = await apiRequest("https://jsonplaceholder.typicode.com/users");
        const foundUsers = users.find(user=> user.name.toLowerCase().includes(name.toLowerCase()))
        if(!foundUsers){
            console.log("User Not Found");
            return;            
        }
        console.log("User Found : " , foundUsers.name, foundUsers.email);
    }
    catch(error){
        console.log("Search Failed");
    }
}

getUserByName("Leanne")