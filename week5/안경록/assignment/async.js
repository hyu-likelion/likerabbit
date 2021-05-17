//비동기 -> 모든 것이 절차대로 실행되지 않음(절차적이 아님,C언어스럽지 않음)
//동기 -> 절차대로
//call back === 다 되면 알려줘

function sayHello(name,sayGoodbye){
    setTimeout(()=>{console.log(name+" 안녕하세용");sayGoodbye();},2000)
}

sayHello("Mike",function(){
    console.log("bye~")
})