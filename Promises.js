console.log("Person 1 Shows Ticket")
console.log("Person 2 Shows Ticket")
let Wifebringingticket = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Tickets")
    },1000)
})
let popcorn = Wifebringingticket.then((t)=> {
    console.log("Wife: I am hungry");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Popcorn " + t)
        },1000)
    })
})
let butter = popcorn.then((t)=> {
    console.log(t)
    console.log("You don't get the butter")
return new Promise((resolve,reject)=> {
    setTimeout(() => {
        resolve("Butter")
    }, 1000)
    })
})
let colddrinks = butter.then((t)=> {console.log(t)
return new Promise((resolve,reject)=>{
    console.log("Now i want Some Cold drinks")
    resolve("Cola")
})
})

colddrinks.then((t)=> console.log(t))
console.log("Person 4 Shows Ticket")
console.log("Person 5 Shows Ticket")