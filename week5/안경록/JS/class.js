class Animal{
    constructor(leg){
        this.leg = leg
    }
    printAnimal(){
        console.log(this.name+" is "+String(this.leg))
    }
}
class Lion extends Animal{
    constructor(name,leg){
        super(leg) //부모의 input 즉,constructor의 param
        this.name = name
    }
    getName(){
        console.log(this.name)
    }
}

myLion = new Lion("king",4)
myLion.getName()
myLion.printAnimal()