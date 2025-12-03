
document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState=="complete"){
        console.log("completed");
        initApp();
    }
});

const initApp=()=>{
    const quotes = [
  "Courage grows in the quiet moments when no one is watching.",
  "A single step forward still counts, even if it feels small.",
  "Kindness is the shortest path between two hearts.",
  "Progress is a dance of patience and persistence.",
  "Dreams bloom where curiosity is watered.",
  "The future listens closely to the choices you make today.",
  "Even shadows disappear when you walk toward the light.",
  "Great ideas often start as quiet whispers.",
  "Hope is the spark that turns doubt into direction.",
  "Every sunrise is a fresh invitation to begin again."
];
   const h1=document.getElementById("h1");
   const p=document.createElement("p");
   h1.appendChild(p);
   p.style.fontWeight="normal";
   p.style.fontSize="25px";

    const button=document.getElementById("bt");
    button.addEventListener("click",(event)=>{
        p.textContent=quotes[Math.floor(Math.random()*quotes.length)];

    });
    console.log(h1);
     
};