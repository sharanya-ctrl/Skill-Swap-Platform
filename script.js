function requestSwap(){
alert("✅ Skill swap request sent successfully!");
}

function searchSkills(){

let input=document.getElementById("search").value.toLowerCase();
let cards=document.getElementsByClassName("card");

for(let i=0;i<cards.length;i++){

let text=cards[i].innerText.toLowerCase();

if(text.includes(input)){
cards[i].style.display="block";
}
else{
cards[i].style.display="none";
}

}

}

function addUser(){

let name=document.getElementById("name").value;
let teach=document.getElementById("teach").value;
let want=document.getElementById("want").value;

let card=document.createElement("div");
card.className="card";

card.innerHTML=
"<h3>"+name+"</h3>"+
"<p>Teaches: "+teach+"</p>"+
"<p>Wants: "+want+"</p>"+
"<button onclick='requestSwap()'>Request Swap</button>";

document.getElementById("users").appendChild(card);

}