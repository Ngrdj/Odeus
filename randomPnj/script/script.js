//Fonction Random
const textGenButton = document.getElementsByClassName('textGenButton');

function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

for( const button of textGenButton){
    
    button.addEventListener('click', ()=>{
        
        
        let buttonOutput = document.querySelector(`output[name=${CSS.escape(button.value)}]`);

        switch(button.value) {
            	case 'startRole':
                

                buttonOutput.innerHTML = randomRole[entierAleatoire(0, randomRole.length-1)];
                
                
                break;
                case 'startApp':
                

                buttonOutput.innerHTML = randomApp[entierAleatoire(0, randomApp.length-1)];
                
                
                break;
                case 'startInt':
                

                buttonOutput.innerHTML = randomInt[entierAleatoire(0, randomInt.length-1)];
                
                
                break;
                case 'startRace':
                

                buttonOutput.innerHTML = randomRace[entierAleatoire(0, randomRace.length-1)];
                
                
                break;
                case 'startClasse':
                

                buttonOutput.innerHTML = randomClasse[entierAleatoire(0, randomClasse.length-1)];
                
                
                break;
                case 'startHist':
                

                buttonOutput.innerHTML = randomHist[entierAleatoire(0, randomHist.length-1)];
                
                
                break;
                
        }     
    });
}
//.................................................................
//Tableaux d'élément
const randomRole=[];
const randomApp=["Bijoux dinstinctifs: boucles d'oreille, collier, bandeau,bracelets",
				 "Piercings",
				 "Vêtements extravagants ou voyants",
				 "Vêtements de cérémonie bien propres",
				 "Vêtements en haillons et sales",
				 "Balafre voyante",
				 "Edenté",
				 "Doigts en moins",
				 "Couleur d'yeux inhabituelle",
				 "Tatouages",
				 "Marque de naissance",
				 "Couleur de peau inhabituelle",
				 "Chauve",
				 "Barbe ou cheveux nattés",
				 "Couleur de cheveux inhabituelle",
				 "Cliquement d'yeux nerveux",
				 "Forme particulière du nez",
				 "Posture particulière",
				 "particulièrement beau",
				 "particulièrement affreux"];
const randomInt=["Ergoteur",
				 "Arrogant",
				 "Fanfaron",
				 "Grossier",
				 "Curieux",
				 "Amical",
				 "Honnête",
				 "Colérique",
				 "Irritable",
				 "Solennel",
				 "Calme",
				 "Suspicieux"];
const randomRace=[];
const randomClasse=[];
const randomHist=[];