const messages=[

"You make ordinary days feel extraordinary.",

"I hope you always know how appreciated you are.",

"Thank you for believing in me.",

"I wish every dream you have comes true.",

"Never lose your beautiful smile.",

"You deserve every happiness this world can offer.",

"I'll always cheer for you.",

"Thank you for every laugh we've shared.",

"I'm proud of you.",

"Keep being the amazing person you are.",

"Thank you for simply existing."

];

const sky=document.getElementById("sky");

const popup=document.getElementById("popup");

const text=document.getElementById("starMessage");

const close=document.getElementById("closeStar");

let visited=0;

for(let i=0;i<30;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*95+"%";

star.style.top=Math.random()*95+"%";

star.style.animationDelay=Math.random()*2+"s";

star.onclick=()=>{

text.textContent=
messages[Math.floor(Math.random()*messages.length)];

popup.style.display="flex";

if(!star.classList.contains("visited")){

star.classList.add("visited");

visited++;

}

};

sky.appendChild(star);

}

close.onclick=()=>{

popup.style.display="none";

};

popup.onclick=e=>{

if(e.target===popup){

popup.style.display="none";

}

};
