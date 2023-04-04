console.log("Person 1 Shows Ticket")
console.log("Person 2 Shows Ticket")

let movie = async () => {

    let Wifebringingticket = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Tickets")
        }, 1000)
    })
    let popcorn = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Popcorn")
        }, 1000)
    })
    const butter = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Butter")
        }, 2000)
    })

    const colddrinks = new Promise((resolve, reject) => {
        resolve("Cola")
    })
    
    const ticket = await Wifebringingticket;
    console.log("Wife: I am hungry")

    const pop = await popcorn;
    console.log(pop)
    console.log("You don't get the butter")

    const bu = await butter
    console.log(bu)
    console.log("Now i want Some Cold drinks")

    const cold = await colddrinks
    console.log(cold)
    console.log("Person 3 Shows Ticket")
}
movie()
console.log("Person 4 Shows Ticket")
console.log("Person 5 Shows Ticket")