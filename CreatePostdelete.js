const Post = async () => {
    let posts = []

    const createpost = new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push("Post One")
            resolve("Post One")
        }, 1000)
    })
    const post = await createpost;
    console.log(`${post} is created`)

    const deletepost = new Promise((resolve, reject) => {
        setTimeout(() => {
            let d = posts.pop()
            resolve(d)
        }, 1000)
    })
    


    const del = await deletepost
    console.log(`${del} is deleted`)
    console.log(posts)

}
Post()