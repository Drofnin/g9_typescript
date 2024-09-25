//const name = "Mark Pascoe";
//const names = ["Mark Pascoe", "Cyrus Sappy", "Drucy Vigar", "Chaunce Hanner", "Jacquie Hart"]  //this is a array

//console.log(names[1]);

const people= [     //people is a matrix of objects, not one single object with repeated properties. each person is now seperate object in the array
 {
    name:"Mark Pasco", 
    dob: "6/30/1974",
    children:"3",                        //children ara now a number, not a string
    country:"Bosnia and Herzegovina",
    KnowsHowToProgram: true,            // KnowsHowToProgram is a boolean with value true or false, it's not a string
 },
 {
    name:"Cyrus Sappy", 
    dob: "4/26/1989",
    children:"5",
    country:"Sweden",
    KnowsHowToProgram: true,
},
{  
    name:"Drucy Vigar", 
    dob: "11/14/1973",
    children:"2",
    country:"Brazil",
    KnowsHowToProgram: false,
}, 
{ 
    name:"Chaunce Hanner", 
    dob: "12/23/1982",
    children:"2",
    country:"Indonesia",
    KnowsHowToProgram: true,
},    

{
    name:" Jacquie Hart", 
    dob: "5/30/1976",
    children:"4",
    country:"Mexico",
    KnowsHowToProgram: true,
},    
    
]
const firstPersonDob= new Date(people[0].dob)                                 // new Date is little bit advanced, I didnt have to dot it, I didnt put right > sign correct
const lastPersonDob= new Date (people [people.length-1].dob)

console.log("firstpersondob",firstPersonDob) 
console.log("lasttpersondob",lastPersonDob)
if (firstPersonDob<lastPersonDob) {
console.log("first person is older than the last person")
}

const secondPersonChildren= people[1].children                              //Does the 2nd person have the same amount of kids as the 3rd?
const thirdPersonChildren= people[2].children
if (secondPersonChildren === thirdPersonChildren)                          //= = = samasem merki
    console.log("second person has as many children as third person  ")   //doesnt print anythings out, because, they dont have same amount of children. If you put same number of children, the statement runs through


const firstPersonProgram = (people[0].KnowsHowToProgram)                   //Create a statement that checks if the 1st person and the 4th person in the array both know how to program
const fourthPersonProgram = (people[3].KnowsHowToProgram)


 
if(firstPersonProgram && fourthPersonProgram) {                         //&& means and
    console.log("Yay")
} else {
    console.log("LMGTFY")
}

const secondPersonCountry = (people[1].country)                         //Create a statement that checks the 2nd person in the array for their nationality. 
if (secondPersonCountry === "Iceland" ){                                //the second person isnt from any of these countries, she is from Sweden. If I change the second person object to Iceland, the code runs smoothly
    console.log("Hæ")   
}
   else if(secondPersonCountry==="Spain") {
    console.log("Hola")
   }
   else if(secondPersonCountry==="Korea"){
    console.log("여보세요")
   }

const secondPersonName= (people[1].name)
   console.log(secondPersonName>5)






    

