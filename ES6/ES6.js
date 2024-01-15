// Difference between let and var
// let is block scope
// var is function scope


function show(){
    var name='Yashraj'
    console.log(name);

    for(let i=0;i<=2;i++){
        let b="Number is "+i;
        console.log(b);
    }
}
show()

let age=2
let msg=(age>18)?()=>console.log("you can drive"):()=>console.log("You cant drive");
msg()


//default parameter
function display(a="No value for a ",b="No value for b"){
                        //Template literals
    console.log(`Hello ${a+b}`);

}
display("Yashraj ", "Shitole")

//spread operator

const a=[1,2,3,4,5,6,7,8,9]
const b=[...a,10,11,12]
console.log(...b);


//          to get mutiple arguments
function sum(...args){
}

//map method
const arr=[{name:"yash",id:1},{name:"raj",id:2},{name:"Shitole",id:3}]

arr.map((items)=>console.log("My name is "+ items.name))

//set
const aset=new Set()
console.log(aset);
const bset=new Set([1,"Yashraj",{id:1,post:"CEO"}])
console.log(bset);

