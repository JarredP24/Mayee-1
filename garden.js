const flowers = document.querySelectorAll(".flower");

const popup = document.getElementById("popup");

const message = document.getElementById("message");

const close = document.getElementById("close");

flowers.forEach(flower=>{

flower.onclick=()=>{

message.textContent=flower.dataset.message;

popup.style.display="flex";

};

});

close.onclick=()=>{

popup.style.display="none";

};

popup.onclick=(e)=>{

if(e.target===popup){

popup.style.display="none";

}

};