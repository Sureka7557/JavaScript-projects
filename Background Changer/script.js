
document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState=="complete"){
        console.log("completed");
        initApp();
    }
});
//order color generation
// const initApp=()=>{
// const lis=["black","red","green","blue","yellow","cyan","magenta","purple"];
// const sec=document.querySelector("#sec1");
// const div=sec.querySelector("#div1");
// const button=div.querySelector("#bt");
// let i=0;
// button.addEventListener("click",(event)=>{
    
//        h3.textContent=`Background color:${lis[i]}`;
//        sec.style.backgroundColor=lis[i];
//        i = (i + 1) % lis.length; 
// });

// };
//random color generation
const initApp=()=>{
const lis=["black","red","green","blue","yellow","cyan","magenta","purple"];
const len=lis.length;
const sec=document.querySelector("#sec1");
const div=sec.querySelector("#div1");
const button=div.querySelector("#bt");
function colorFunc(l){
    return Math.floor(Math.random()*l);
}
 button.addEventListener("click",(event)=>{
       let store=colorFunc(len);
       h3.textContent=`Background color:${lis[store]}`;
       sec.style.backgroundColor=lis[store];
      
 });

};
