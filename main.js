let posts = []
let starttime = new Date()
function updateLastuserActivitytime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let endtime = new Date()
            let timediff = endtime - starttime
            resolve(timediff)
        }, 1000)
    })
}
function createPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push("Post One")
            resolve("Post One")
        }, 5000)
    })
}
function create2ndPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push("Post Two")
            resolve("Post Two")
        }, 1000)
    })
}
function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let d = posts.pop()
            resolve(posts)
        }, 1000)
    })
}

Promise.all([createPost(), updateLastuserActivitytime(), create2ndPost(), updateLastuserActivitytime(),deletePost()]).then((v) => console.log(v))



