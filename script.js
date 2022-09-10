let buttonEl=document.querySelector('.btn');
let paragrapheEl=document.querySelector('p');

var randomElement=["Jeder sollte vor seiner eigenen Tür kehren",
                   "Wenn zwei sich streiten, freut sich der Dritte",
                   "Wer ernten will, muss säen",
                   "Jeder Topf findet seinen Deckel",
                   "Liebe geht durch den Magen",
                   "Pünktlichkeit ist die Höflichkeit der Könige",
                   "Die Welt ist ein Dorf",
                  "Ist die Katze aus dem Haus, tanzen die Mäuse auf dem Tisch"];
let randomElementlenght=randomElement.length;
buttonEl.addEventListener('click',()=>{
let i=Math.floor(Math.random()*randomElementlenght);
paragrapheEl.innerHTML=randomElement[i];

})
