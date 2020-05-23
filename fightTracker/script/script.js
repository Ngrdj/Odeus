
//Lancer de Dés
let des = document.getElementById('des');
let lancer = document.getElementById('lancer');
let result = document.getElementById('resultat');

lancer.addEventListener("click", () => {
    
	switch(des.selectedOptions[0].value){
            
		case"d4": result.value=Math.floor(Math.random()*5);
		break;

		case"d6":result.value=Math.floor(Math.random()*7);
		break;

		case"d8":result.value=Math.floor(Math.random()*9);
		break;

		case"d10":result.value=Math.floor(Math.random()*11);
		break;

		case"d12":result.value=Math.floor((Math.random()*10)+3);
		break;

		case"d20":result.value=Math.floor((Math.random()*20)+1);
		break;

		case"d100":result.value=Math.floor((Math.random()*100)+1);
		break;

	} 
})

/*...........................Calcul de l'initiative.............................*/

let init = document.getElementById("init");

init.addEventListener('click', () => {

	for(const itemPerso of perso){

		let initPerso=itemPerso.querySelector(".initPerso");
        
		initPerso.value=Math.floor((Math.random()*20)+1);
}
})

/*...........................Ajouter personnage.............................*/

const ajouter = document.getElementById('ajouter');
const persoList = document.getElementById('persoList');

let perso = persoList.children;

ajouter.addEventListener('click', () => {

 	const newPerso = document.querySelector('.Perso.hidden').cloneNode(true);

 	newPerso.classList.remove('hidden');
 	persoList.appendChild(newPerso); 
    
    const supprimer = newPerso.querySelector('.supprimer');
    
    supprimer.addEventListener('click',()=>{
            newPerso.remove();
	       });
    
    
    /*...........................PersoPlus.............................*/
    
    //ShowHide persoPlus
    
    const showHidePlus = newPerso.querySelector('.showHidePlus');
    
    let persoPlus = showHidePlus.parentElement.querySelector('.persoPlus');
    
    
    showHidePlus.addEventListener('click',()=>{
                
        if(persoPlus.classList.contains('hidden')){
            
            persoPlus.classList.remove('hidden');
            
        }else{
            
            persoPlus.classList.add('hidden');
            
        }
        
    });
    
    //Add/Del bonus/malus
    
    const bonusButton = persoPlus.querySelector('.bonusButton');
    const malusButton = persoPlus.querySelector('.malusButton');
    
    let bonusItemNumber = persoPlus.querySelectorAll('.bonusItem').length-1;
    let malusItemNumber = persoPlus.querySelectorAll('.malusItem').length-1;
    
    bonusButton.addEventListener('click',()=>{
        
        const newBonusItem = persoPlus.querySelector('.bonusItem.hidden').cloneNode(true);

        newBonusItem.classList.remove('hidden');
        bonusButton.parentElement.appendChild(newBonusItem);
        
        bonusItemNumber = persoPlus.querySelectorAll('.bonusItem').length-1;
        
        const removeItem = newBonusItem.querySelector('.removeItem');
    
        removeItem.addEventListener('click',()=>{
            
                newBonusItem.remove();
                bonusItemNumber = persoPlus.querySelectorAll('.bonusItem').length-1;
                showHidePlusRefresh(showHidePlus) ;
        });   
        
        showHidePlusRefresh(showHidePlus) ;      
    });
    
    malusButton.addEventListener('click',()=>{
        
        const newMalusItem = persoPlus.querySelector('.malusItem.hidden').cloneNode(true);

        newMalusItem.classList.remove('hidden');
        malusButton.parentElement.appendChild(newMalusItem);      
        
        malusItemNumber = persoPlus.querySelectorAll('.malusItem').length-1;
        
        const removeItem = newMalusItem.querySelector('.removeItem');
    
        removeItem.addEventListener('click',()=>{
            
                newMalusItem.remove();
                malusItemNumber = persoPlus.querySelectorAll('.malusItem').length-1;
                showHidePlusRefresh(showHidePlus) ;
        });
        
        
        showHidePlusRefresh(showHidePlus) ;
        
    });
    
    function showHidePlusRefresh(button){
        
        if(bonusItemNumber === 0 && malusItemNumber ===0){
            
            button.innerHTML =  'v v v ';
            
        }else{
            
            button.innerHTML =  'v v v ' + `(<span style='color:green'>${bonusItemNumber}</span>|<span style='color:red'>${malusItemNumber}</span>)`;
            
        }
        
        
    }
    
});

/*...........................Tri des personnage par l'initiative.............................*/

let trier = document.getElementById('trier');

trier.addEventListener('click', () => {

	let tabPerso = Array.from(perso);
    
	tabPerso.sort( function(a, b) {
        
        return b.querySelector('.initPerso').value - a.querySelector('.initPerso').value;
        
    })
    
	tabPerso.forEach( element => {
        
		let deleted = persoList.removeChild(element);
        
		persoList.appendChild(deleted);

	})
})

/*...........................Compteur de round.............................*/

const roundButton = document.getElementById('roundButton');
const roundInput = document.getElementById('roundInput');
let i=0;

    roundButton.addEventListener('click', () => {
        if(perso.length > 1 ){

            perso[i].classList.add('selected');

            if(i>0){
                perso[i-1].classList.remove('selected');
            }
            if(i==0){
                roundInput.value++;
                if(perso[perso.length-1].classList.contains('selected')){
                    perso[perso.length-1].classList.remove('selected');
                }
            }
            if(i==perso.length-1){
                i=0;	
            }else{
                i++;
            }

        }else{
            
            alert('Il faut au moins 2 personnages pour commencer un combat');
        }
        
        
    });
/*...........................Show/HideButtons.............................*/

const sortsTab = document.getElementById('sortsTab');
const showButtons = document.querySelectorAll('.showButton');
const hideButtons = document.querySelectorAll('.hideButton');
const showHideButton = document.querySelectorAll('.showHideButton');

const filterFreeze = document.querySelectorAll('.filterFreeze');

for(const button of showButtons){

    button.addEventListener('click', ()=>{
        
        const showElement = document.getElementById(button.getAttribute('value'));
        if(showElement.classList.contains('hidden')){
            showElement.classList.remove('hidden');
        }
    });    
}
for(const button of hideButtons){

    button.addEventListener('click', ()=>{

        const hideElement = button.parentElement;
     
            hideElement.classList.add('hidden')
    });    
}

for(const button of showHideButton){

    button.addEventListener('click', ()=>{
        
        const showHideElement = document.getElementById(button.getAttribute('value'));
                 

        if(showHideElement.classList.contains('hidden')){
            showHideElement.classList.remove('hidden');
        }else{
            showHideElement.classList.add('hidden')
        }
    });    
}
for(const button of filterFreeze){

    button.addEventListener('click', ()=>{

        const showHideElement = button.parentElement;
     
            showHideElement.classList.add('hidden')
    });    
}
/*...........................jitsi test.............................*/
/*const domain = 'meet.jit.si';
const options = {
    roomName: 'ODEUS',
    width: '500px',
    height: '100%',
    parentNode: document.querySelector('#meet')
};
const api = new JitsiMeetExternalAPI(domain, options);*/

/*...........................BackgroundSelect.............................*/

const backgroundValidButton = document.getElementById('backgroundValidButton');

const backgroundSelectType = document.getElementById('backgroundSelectType');

const backgroundUrlInput = document.getElementById('backgroundUrlInput');

const backgroundFileInput = document.getElementById('backgroundFileInput');

const backgroundSelect = document.getElementById('backgroundSelect');

const body = document.getElementsByTagName('body')[0];

backgroundSelectType.addEventListener('change', ()=>{
    
    switch(backgroundSelectType.options[backgroundSelectType.selectedIndex].value){
        
    case 'select':
            
        backgroundFileInput.setAttribute('class','hidden');
        backgroundUrlInput.setAttribute('class','hidden');
            
        if(backgroundSelect.classList.contains('hidden')){
                
            backgroundSelect.classList.remove('hidden')
                
        };
            
        break;
            
    case 'url':
        
        backgroundFileInput.setAttribute('class','hidden');
        backgroundSelect.setAttribute('class','hidden');
            
        if(backgroundUrlInput.classList.contains('hidden')){
                
            backgroundUrlInput.classList.remove('hidden')
                
        };
            
        break;
    case 'browse':
        
        backgroundUrlInput.setAttribute('class','hidden');
        backgroundSelect.setAttribute('class','hidden');
            
        if(backgroundFileInput.classList.contains('hidden')){
                
            backgroundFileInput.classList.remove('hidden')
                
        };
            
        break;
}
    
    
})

backgroundValidButton.addEventListener('click',()=>{
    
    switch(backgroundSelectType.options[backgroundSelectType.selectedIndex].value){
        
    case 'select':
            
        body.style.background = '';
        body.style.background = `url(img/backgrounds/${backgroundSelect.options[backgroundSelect.selectedIndex].value}.jpg)`;
            
        break;
            
    case 'url':
            
        function isValidUrl(string) {
            try {
                new URL(string);
            } 
            catch (_) {
                return false;  
            }

                return true;
        }
        if(isValidUrl(backgroundUrlInput.value)){
            body.style.background = '';
            body.style.background = `url(${backgroundUrlInput.value})`;
        
        }else{
        
            alert('veuillez entrer un URL valide !');
        
        }
          
        break;
            
    case 'browse':
        
           let fileURL =  window.URL.createObjectURL(backgroundFileInput.files[0]);
            
            body.style.background = '';
            body.style.background = `url(${fileURL})`;
            
        break;
    }
body.style.backgroundSize = '105vw 105vh';
body.style.backgroundRepeat = 'no-repeat'; 
body.style.animationName = 'background';
    
});


/*...........................MusicSelect.............................*/

const play=document.getElementById('playMusic');
const stop=document.getElementById('stopMusic');
let music= document.getElementById('choixMusic');
let sourceMusic=document.getElementById('sourceMusic');
let musicBar=document.getElementById('musicBar');

play.addEventListener('click',()=>{

 sourceMusic.src=`sounds/music/${music.selectedOptions[0].value}.mp3`;
    musicBar.load();
    
})
stop.addEventListener('click',()=>{

    musicBar.pause();    
})
/*...........................volumeBar.............................*/

const volumeControl = document.getElementById('volumeControl');

volumeControl.addEventListener('input',()=>{
    
    musicBar.volume = volumeControl.value/100;
    
})



/*...........................SoundIcon.............................*/

let icons= document.getElementsByClassName('soundIcon');

for(const icon of icons){

    let audio= new Audio(`sounds/effects/${icon.getAttribute('data-name')}.mp3`);
    icon.addEventListener('click',()=>{
    audio.play();
})
}

/*...........................Masque.............................*/
/*
const allBodyElements = document.querySelectorAll("body > :not(main), main > *");

for(const element of allBodyElements){
    
    element.style.opacity = "0.5";
    element.addEventListener('mouseover',()=>{
        
        element.style.opacity = "1";
        
        
    });
    element.addEventListener('mouseleave',()=>{
        
        element.style.opacity = "0.2";
        
        
    });
}
*/
/*...........................timer.............................*/
const timerButton=document.getElementById("timerButton");
const timerInput=document.getElementById("timerInput");
const timerOutput=document.getElementById('timerOutput');
let timer;
timerButton.addEventListener('click',()=>{

    timerOutput.innerHTML=timerInput.value+'s';
    
    clearInterval(timer);
    let cpt=timerInput.value;
    timer=setInterval(function(){
        if(cpt>0){
            --cpt;
            timerOutput.innerHTML=cpt+"s";

        }else{
            clearInterval(timer);
        }
    }, 1000);
    
  
})
/*...........................search.............................*/

const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const click = new Event('click');
    

searchButton.addEventListener('click',()=>{
    
    searchButton.href = `https://www.aidedd.org/search/?q=${searchInput.value}`;
    
    
});

searchInput.addEventListener('keydown', (e) => {
        
        if(e.keyCode === 13 ){
            
            searchButton.dispatchEvent(click);
            console.log('clicked');
            
        } 
});

/*...........................Réinitialisation des valeurs.............................*/

function reloadValues(){
    
    backgroundUrlInput.value = '';
    roundInput.value = 0;
    result.value = 0;
    document.querySelector('.initPerso').value = 0;
    
    backgroundSelectType.selectedIndex= 0;
    music.selectedIndex= 0;
    searchInput.value = '';
    
}
reloadValues();
