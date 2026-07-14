const notes=[

"Thank you for every smile you've given me.",

"Thank you for making ordinary days feel brighter.",

"Thank you for believing in me.",

"Thank you for every laugh we shared.",

"Thank you for every conversation.",

"Thank you for being patient.",

"Thank you for being yourself.",

"Thank you for making memories with me.",

"Thank you for inspiring me.",

"Thank you for trusting me.",

"Thank you for every little thing.",

"Thank you for existing."

];

const jar=document.getElementById("hearts");
const popup=document.getElementById("popup");
const note=document.getElementById("noteText");
const close=document.getElementById("closeNote");
const counter=document.getElementById("counter");

let opened=0;

for(let i=0;i<30;i++){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*80+10+"%";
heart.style.top=Math.random()*75+15+"%";

heart.onclick=()=>{

note.textContent=
notes[Math.floor(Math.random()*notes.length)];

popup.style.display="flex";

if(!heart.classList.contains("used")){

heart.classList.add("used");

opened++;

counter.textContent=
opened+" / 30 Hearts";

}

};

jar.appendChild(heart);

}

close.onclick=()=>{

popup.style.display="none";

};

popup.onclick=e=>{

if(e.target===popup){

popup.style.display="none";

}

};