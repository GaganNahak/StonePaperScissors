let user=0;
let comp=0;
const choice=document.querySelectorAll(".choice");
const inf=document.getElementById("inf") 

const update=()=>{
   document.getElementById("user-res").innerText=user
   document.getElementById("comp-res").innerText=comp
}


const genCompchoice=()=>{
   let comChoice= Math.floor(Math.random()*3)
    return comChoice
}



const chooseCompChoice=()=>{
    const choices=["paper","stone","scissors"]
   const comChoice= genCompchoice()
    const res=choices[comChoice]
   
    return res;
}
 
 
 
   choice.forEach((choice)=>{
    choice.addEventListener("click",()=>{
       const userChoice= choice.getAttribute("id")
       console.log(userChoice)
      const res=  chooseCompChoice();
     
          if(res===userChoice){
            console.log("drawww")
            inf.innerText="draww"
            inf.style.backgroundColor="rgb(0, 191, 255)"
          }
          else{
            if(userChoice==="paper"){
               if(res==="scissors"){
                  inf.innerText=`YOU LOSE !! ${res} beats ${userChoice}  `
                  inf.style.backgroundColor="red"
                  ++comp
               }
               else{
                  inf.innerText=`YOU WON !! ${userChoice} beats ${res}  `
                  inf.style.backgroundColor="yellowgreen"
                  ++user
               }
            }
            else if   (userChoice==="scissors"){
               if(res==="stone"){
                  inf.innerText=`YOU LOSE !! ${res} beats ${userChoice}  `
                  inf.style.backgroundColor="red"
                  ++comp
               }
               else{
                  inf.innerText=`YOU WON !! ${userChoice} beats ${res}  `
                   inf.style.backgroundColor="yellowgreen"
                   ++user
               }
            }
            else{
               if(res==="paper"){
                  inf.innerText=`YOU LOSE !! ${res} beats ${userChoice}  `
                  inf.style.backgroundColor="red"
                  ++comp
               }
               else{
                  inf.innerText=`YOU WON !! ${userChoice} beats ${res}  `
                   inf.style.backgroundColor="yellowgreen"
                   ++user
               }
            }
          }
          update()  
    })
})