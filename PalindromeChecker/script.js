
document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState=="complete"){
        console.log("completed");
        initApp();
    }
});

const initApp=()=>{
    const input=document.getElementById("ip");
    const button=document.getElementById("bt");
    console.log(input);
    console.log(button);
    button.addEventListener("click",(event)=>{
        if( palindrome(input.value)==1)
            alert("Its a palindrome");
        else
            alert("Not a palindrome");
    });
function palindrome(i){
  const revVar=i.split("").reverse().join("");
  if(i==revVar)
     return 1;
  else
    return 0;

}
};
