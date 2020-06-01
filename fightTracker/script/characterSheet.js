

const sortsFrame = document.getElementById("sortsFrame");
 /* const sortFrameContent = (sortsFrame.contentWindow || sortsFrame.contentDocument);


    const mageTab = sortFrameContent.querySelector("#mageTab");
    const druideTab = sortFrameContent.querySelector("#druideTab");
    const rodeurTab = sortFrameContent.querySelector("#rodeurTab");
    const guerrierTab = sortFrameContent.querySelector("#guerrierTab");*/
/*-----------------------------portrait/classe-------------------------------*/
const charSelect = document.getElementById("charSelect");
const charClassOutput = document.getElementById("charClassOutput");
const portraitChar = document.getElementById("portraitChar");
/*-----------------------------Sorts-------------------------------*/

const DDSav = document.getElementById("DDSav");
const bonusAtt = document.getElementById("bonusAtt");

const sortsList = document.getElementById("sortsList");

/*-----------------------------Caract-------------------------------*/

const force = document.getElementById("force");
const dexterite = document.getElementById("dexterite");
const constitution = document.getElementById("constitution");
const intelligence = document.getElementById("intelligence");
const sagesse = document.getElementById("sagesse");
const charisme = document.getElementById("charisme");

/*-----------------------------Compet-------------------------------*/

const acrobaties = document.getElementById("acrobaties");
const arcanes = document.getElementById("arcanes");
const athlethisme = document.getElementById("athlethisme");
const discretion = document.getElementById("discretion");
const dressage = document.getElementById("dressage");
const escamotage = document.getElementById("escamotage");
const histoire = document.getElementById("histoire");
const intimidation = document.getElementById("intimidation");
const investigation = document.getElementById("investigation");
const medecine = document.getElementById("medecine");
const nature = document.getElementById("nature");
const perception = document.getElementById("perception");
const perspicacite = document.getElementById("perspicacite");
const persuasion = document.getElementById("persuasion");
const religion = document.getElementById("religion");
const representation = document.getElementById("representation");
const survie = document.getElementById("survie");
const tromperie = document.getElementById("tromperie");

/*-----------------------------Weapons-------------------------------*/

const armesTBody=document.getElementById("armesTBody");

/*--------------------------------------------Evenements------------------------------------------------*/

charSelect.addEventListener("change", getCharName);


window.addEventListener("load", reloadValues);


/*--------------------------------------------Fonctions------------------------------------------------*/

function getCharName(){
    
        switch(charSelect.selectedOptions[0].value){
        case 'namas': 
            loadValues(Namas);
        break;
        case 'esus': 
            loadValues(Esus);
        break;
        case 'kyra': 
            loadValues(Kyra);
        break;
        case 'grudu': 
            loadValues(Grudu);
        break;
        case 'lyre': 
            loadValues(Lyre);
        break;
                
        default:
                reloadValues();
    }
    
}
        
function loadValues(joueur){
        
/*-----------------------------loadPortrait-------------------------------*/
    
            portraitChar.style.background=`url(${joueur.portrait})`;
            portraitChar.style.backgroundSize= "100% 100%"; 
            portraitChar.style.backgroundRepeat="no-repeat";
    
/*-----------------------------loadClasse-------------------------------*/
    
            charClassOutput.value = joueur.classe;
/*-----------------------------loadSpell-------------------------------*/
    
            DDSav.value = joueur.DDSav
            bonusAtt.value = joueur.bonusAtt
                

            sortsList.textContent = '';
    
                if(joueur.classe === 'mage'){

                    const newFireItem = document.createElement('li');
                    const newWaterItem = document.createElement('li');
                    const newAirItem = document.createElement('li');
                    const newEarthItem = document.createElement('li');
                    const newArcaItem = document.createElement('li');

                    const newFireName = document.createElement('label');
                    const newWaterName = document.createElement('label');
                    const newAirName = document.createElement('label');
                    const newEarthName = document.createElement('label');
                    const newArcaName = document.createElement('label');

                    const newFireValue = document.createElement('output');
                    const newWaterValue = document.createElement('output');
                    const newAirValue = document.createElement('output');
                    const newEarthValue = document.createElement('output');
                    const newArcaValue = document.createElement('output');

                    newFireItem.append(newFireName, newFireValue);
                    newWaterItem.append(newWaterName, newWaterValue);
                    newAirItem.append(newAirName, newAirValue);
                    newEarthItem.append(newEarthName, newEarthValue);
                    newArcaItem.append(newArcaName, newArcaValue);

                    sortsList.append(newFireItem,newWaterItem,newAirItem,newEarthItem,newArcaItem);

                    newFireName.textContent = "Feu";
                    newWaterName.textContent = "Eau";
                    newAirName.textContent = "Air";
                    newEarthName.textContent = "Terre";
                    newArcaName.textContent = "Arcanes";

                    newFireValue.textContent = joueur.feu;
                    newWaterValue.textContent = joueur.eau;
                    newAirValue.textContent = joueur.air;
                    newEarthValue.textContent = joueur.terre;
                    newArcaValue.textContent = joueur.arcane;

                }else{

                    const newSortItem = document.createElement('li');
                    const newSortName = document.createElement('label');
                    const newSortValue = document.createElement('output');

                    newSortItem.append(newSortName, newSortValue);

                    sortsList.append(newSortItem);

                    newSortName.textContent = "Niveau"
                    newSortValue.textContent = joueur.sortLvl;
                }
/*-----------------------------loadCaract-------------------------------*/

            force.value = joueur.force;
            dexterite.value = joueur.dexterite;
            constitution.value = joueur.constitution;
            intelligence.value = joueur.intelligence;
            sagesse.value = joueur.sagesse;
            charisme.value = joueur.charisme;
    
/*-----------------------------loadCompet-------------------------------*/
    
            acrobaties.value = joueur.acrobaties[0];
            arcanes.value = joueur.arcanes[0];
            athlethisme.value = joueur.athletisme[0];
            discretion.value = joueur.discretion[0];
            dressage.value = joueur.dressage[0];
            escamotage.value = joueur.escamotage[0];
            histoire.value = joueur.histoire[0];
            intimidation.value = joueur.intimidation[0];
            investigation.value = joueur.investigation[0];
            medecine.value = joueur.médecine[0];
            nature.value = joueur.nature[0];
            perception.value = joueur.perception[0];
            perspicacite.value = joueur.perspicacite[0];
            persuasion.value = joueur.persuasion[0];
            religion.value = joueur.religion[0];
            representation.value = joueur.représentation[0];
            survie.value = joueur.survie[0];
            tromperie.value = joueur.tromperie[0];
            
    
            /*function competChecked(property){
                
                if(property.includes('checked')){
                    
                    
                }
                
            }*/
    
/*-----------------------------loadWeapons-------------------------------*/
    

            if(armesTBody.hasChildNodes()){
                
               while (armesTBody.firstChild) {

                armesTBody.removeChild(armesTBody.lastChild) 

                } 
                
            }
    
    
            joueur.armes.forEach(element => {
                
            const newRow = document.createElement('tr');
            const newNameVal = document.createElement('td');
            const newBonusVal = document.createElement('td');
            const newDegatsVal = document.createElement('td');
    
            newNameVal.innerHTML = element.nom;
            newBonusVal.innerHTML = element.bonusAtt;
            newDegatsVal.innerHTML = element.degats;
    
            newRow.append(newNameVal,newBonusVal,newDegatsVal);
            armesTBody.appendChild(newRow);
                
            });
            
}

function reloadValues(){
    
    charSelect.selectedIndex = 0;
    
    DDSav.value = '0'
    bonusAtt.value = '0'
    
    force.value = '0';
    dexterite.value = '0';
    constitution.value = '0';
    intelligence.value = '0';
    sagesse.value = '0';
    charisme.value = '0';
    
    acrobaties.value = '0';
    arcanes.value = '0';
    athlethisme.value = '0';
    discretion.value = '0';
    dressage.value = '0';
    escamotage.value = '0';
    histoire.value = '0';
    intimidation.value = '0';
    investigation.value = '0';
    medecine.value = '0';
    nature.value = '0';
    perception.value = '0';
    perspicacite.value = '0';
    persuasion.value = '0';
    religion.value = '0';
    representation.value = '0';
    survie.value = '0';
    tromperie.value = '0';
    
}


