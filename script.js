/* ===========================================
   THE APPRECIATION MUSEUM
   script.js
=========================================== */

const enterButton = document.getElementById("enterButton");
const overlay = document.getElementById("introOverlay");
const typingText = document.getElementById("typingText");
const continueButton = document.getElementById("continueButton");
const music = document.getElementById("bgMusic");

const message = `Before you continue...

I wanted to make something that you could visit whenever you needed a reminder of how appreciated you are.

Every room you'll explore contains little memories, quiet thank-yous, and pieces of my heart that words alone couldn't fully express.

So...

Take your time.

Click everything.

Smile as much as you can.

And remember that someone out there is incredibly grateful that you exist.

❤️`;

let index = 0;

/* ===========================
   Typewriter
=========================== */

function typeWriter() {

    if(index < message.length){

        typingText.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter,28);

    }

}

/* ===========================
   Open Letter
=========================== */

enterButton.addEventListener("click",()=>{

    overlay.classList.add("show");

    music.volume=.35;

    music.play().catch(()=>{});

    if(index===0){

        setTimeout(typeWriter,500);

    }

});

/* ===========================
   Continue
=========================== */

continueButton.addEventListener("click",()=>{

    document.body.style.opacity="0";

    document.body.style.transition="1s";

    setTimeout(()=>{

        window.location.href="museum.html";

    },900);

});

/* ===========================
   Floating Hearts
=========================== */

const particleContainer=document.getElementById("particles");

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤";

    heart.style.position="absolute";

    heart.style.left=Math.random()*100+"vw";

    heart.style.top="110vh";

    heart.style.fontSize=(12+Math.random()*18)+"px";

    heart.style.opacity=Math.random()*.4+.2;

    heart.style.color="rgba(255,255,255,.65)";

    heart.style.transition="transform linear, opacity linear";

    particleContainer.appendChild(heart);

    const duration=10000+Math.random()*8000;

    requestAnimationFrame(()=>{

        heart.style.transform=`translateY(-130vh)
                               translateX(${Math.random()*200-100}px)
                               rotate(${Math.random()*360}deg)`;

        heart.style.opacity="0";

        heart.style.transitionDuration=duration+"ms";

    });

    setTimeout(()=>{

        heart.remove();

    },duration);

}

setInterval(createHeart,900);

/* ===========================
   Mouse Glow
=========================== */

document.addEventListener("mousemove",(e)=>{

    const x=e.clientX/window.innerWidth-.5;

    const y=e.clientY/window.innerHeight-.5;

    document.querySelector(".glow1").style.transform=
        `translate(${x*80}px,${y*80}px)`;

    document.querySelector(".glow2").style.transform=
        `translate(${-x*120}px,${-y*120}px)`;

});

/* ===========================
   Button Hover Scale
=========================== */

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-5px) scale(1.04)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0) scale(1)";

});

});

/* ===========================
   Fade In
=========================== */

window.onload=()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="1.2s";

document.body.style.opacity="1";

},100);

};