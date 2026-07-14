const letters = document.querySelectorAll(".envelope");

const overlay = document.getElementById("overlay");

const title = document.getElementById("letterTitle");

const body = document.getElementById("letterBody");

const closeBtn = document.getElementById("closeLetter");

const messages = {

"Open when you're happy":
`Seeing you happy makes me smile too.

Keep enjoying this moment.

You deserve happiness, and I hope today gives you many reasons to laugh.`,

"Open when you're sad":
`I wish I could sit beside you right now.

Even if today feels heavy, remember that difficult days don't last forever.

Be kind to yourself.`,

"Open when you're stressed":
`You've overcome so much already.

Take one step at a time.

You don't have to carry everything all at once.`,

"Open when you miss me":
`If you're reading this, I'm probably wishing I could spend time with you too.

Until then...

Imagine I'm giving you the biggest hug.`,

"Open when you doubt yourself":
`You are far more capable than you realize.

I've seen your strength, your kindness, and your determination.

Don't let one difficult moment convince you otherwise.`,

"Open when you can't sleep":
`Close your eyes.

Take a slow breath.

Tomorrow doesn't need to be solved tonight.

Rest.

Everything else can wait until morning.`,

"Open on your birthday":
`Happy Birthday.

Thank you for existing.

I hope this year brings you unforgettable memories and countless reasons to smile.`,

"Open anytime":
`If there isn't a special reason you opened this...

Then let this simply remind you that you're appreciated more than you know.

Thank you for being you.`

};

letters.forEach(card=>{

card.onclick=()=>{

title.textContent=card.dataset.title;

body.textContent=messages[card.dataset.title];

overlay.style.display="flex";

};

});

closeBtn.onclick=()=>{

overlay.style.display="none";

};

overlay.onclick=(e)=>{

if(e.target===overlay){

overlay.style.display="none";

}

};