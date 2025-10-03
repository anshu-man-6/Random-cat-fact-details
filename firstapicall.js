let url="https://catfact.ninja/fact";


// fetch(url)
//  .then((res)=>{
//   return res.json();
//  })

//  .then((data)=>{
//   console.log("fact 1=",data.fact);
//  })

//  .catch((err)=>{
//   console.log(err);
//  })


// async function getFacts() {
//   try{
//     let res=await fetch(url);
//    let data=await res.json();
//    console.log(data.fact);
//   }
//   catch(e){
//    console.log(e);
//   }
// }

// getFacts();



//AXIOS method;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

let btn=document.querySelector("#btn");
let box=document.querySelector(".box");

btn.addEventListener("click",getFacts);




async function getFacts(){
  box.innerText="";
  try{
    let res= await axios.get(url)
    
    box.innerText=res.data.fact;

  }
  catch(e){
     console.log(e);
  }
}