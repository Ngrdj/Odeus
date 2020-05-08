//Fonction Random
const randomButton=document.getElementById('random');
let resultRandom=0;
randomButton.addEventListener('click',()=>{
	resultRandom=Math.floor((Math.random()*20)+1);
	console.log(resultRandom);
})
resultRandom=Math.floor((Math.random()*20)+1);