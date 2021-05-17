function sayHello(name){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(name+" Hi~")
            resolve("seoul")
        },3000)
    })
}


async function say(name){
    loc = await sayHello(name)
    console.log(loc + '  bye bye~')
}

say("Frank")