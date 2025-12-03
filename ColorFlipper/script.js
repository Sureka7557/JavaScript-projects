document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState=="complete"){
        console.log("completed");
        initApp();
    }
});
 const initApp=()=>{
    const sec1=document.querySelector("#sec1")
    const div1=sec1.querySelector(".divs");
    const b1=div1.querySelector("#b1");
    const b2=div1.querySelector("#b2");
    const b3=div1.querySelector("#b3");
    const b4=div1.querySelector("#b4");
    const lis=["black","red","green","blue","yellow","cyan","magenta","purple"];
  b1.addEventListener("click",(event)=>{
  document.body.style.backgroundColor="green";
  });
   b2.addEventListener("click",(event)=>{
  document.body.style.backgroundColor="red";
  });
   b3.addEventListener("click",(event)=>{
  document.body.style.backgroundColor="blue";
  });
   b4.addEventListener("click",(event)=>{
  document.body.style.backgroundColor=lis[randomColor()];
  });
   
   function randomColor(){
    return Math.floor(Math.random()*lis.length+1);
   }
 };
