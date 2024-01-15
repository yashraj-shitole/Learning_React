const person={

    name:"Yshraj",
    walk(){
        console.log(this)
    }

}

person.walk()


const walk=person.walk.bind(person)

walk()


var a=[2,3,2,5,6,2,2]

console.log(...a)


const square= number=> number*number

console.log(square(10))


const jobs=[
    {id:1,isActive:true,name:"a"},
    {id:2,isActive:true,name:"b"},
    {id:3,isActive:false,name:"c"},
    {id:4,isActive:true,name:"d"},
    {id:5,isActive:false,name:"e"},

]

const activeJobs= jobs.filter(function(job){return job.isActive})
const activeJobs1= jobs.filter(job => job.isActive)

console.log(...activeJobs)
console.log(...activeJobs1)



const printt= printtext => console.log(printtext)

printt("Hi")


const col=['red','green','blue']

const items=col.map(col=> `<li>${col}</li>`)

console.log(...items)

const address={
    street:'majrewadi road',
    city:'',
    country:''
}


const {street,city,country} = address

console.log(street)

class Walk{
    
    constructor(name){
       this.name=name
    }
    walking(){
        console.log(this.name +" can walk")
    }
}

class Teacher extends Walk{
    constructor(name, degree){
        super(name)
        this.degree=degree
    }
    teach(){
        console.log(this.name+" can teach and have degree of "+this.degree)
    }
}

const walked=new Walk("Yash")
walked.walking()

const teacher=new Teacher("Yashraj","BTech")
teacher.teach()
teacher.walking()


