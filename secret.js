/* ==========================================
   SECRET ROOM JS
   Fixed Version
========================================== */


document.addEventListener("DOMContentLoaded", () => {


const openGift =
document.getElementById("openGift");


const secretRoom =
document.getElementById("secretRoom");


const giftScreen =
document.getElementById("giftScreen");


const giftBox =
document.querySelector(".gift-box");


const theater =
document.getElementById("theater");


const fade =
document.getElementById("fade");


const video =
document.getElementById("giftVideo");


const letter =
document.getElementById("letterText");



let opened = false;



/* ==========================================
   LETTER CONTENT
========================================== */


const message = 
`I wanted to create this little place for you.

Thank you for every smile,
every conversation,
and every moment we've shared.

No matter how small they seemed,
they became memories I treasure.

I hope this reminds you
how special you are to me.`;





/* ==========================================
   OPEN GIFT BUTTON
========================================== */


openGift.addEventListener("click",()=>{


    secretRoom.style.transition="0.8s";

    secretRoom.style.opacity="0";

    secretRoom.style.transform="scale(.96)";



    setTimeout(()=>{


        secretRoom.style.display="none";


        giftScreen.classList.add("active");


    },800);



});






/* ==========================================
   CLICK GIFT
========================================== */


giftBox.addEventListener("click",()=>{


    if(opened)
    return;



    opened=true;



    giftBox.classList.add("open");



    setTimeout(()=>{


        fade.classList.add("active");


    },1300);





    setTimeout(()=>{


        giftScreen.classList.remove("active");


        theater.classList.add("active");



        fade.classList.remove("active");



        startExperience();



    },2400);



});







/* ==========================================
   START VIDEO + LETTER
========================================== */


function startExperience(){


    // Video

    video.currentTime=0;


    video.play()
    .catch(()=>{

        console.log(
        "Browser blocked autoplay"
        );

    });




    // Letter

    startTypewriter();



}









/* ==========================================
   TYPEWRITER
========================================== */


function startTypewriter(){


    letter.innerHTML="";


    let index=0;



    function write(){


        if(index < message.length){



            let char =
            message.charAt(index);



            letter.innerHTML += char;



            index++;




            let speed=35;



            if(char===","){

                speed=180;

            }



            if(char==="."){

                speed=450;

            }



            if(char==="\n"){

                speed=400;

            }




            setTimeout(write,speed);



        }



    }



    write();



}







/* ==========================================
   PAUSE VIDEO WHEN TAB HIDDEN
========================================== */


document.addEventListener(
"visibilitychange",
()=>{


    if(document.hidden){

        video.pause();

    }

    else if(theater.classList.contains("active")){


        video.play()
        .catch(()=>{});


    }


});



});