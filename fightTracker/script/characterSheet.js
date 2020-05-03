
const playerList = document.getElementById("name");

playerList.addEventListener("change", getCharName);
window.addEventListener("load", getCharName);

function getCharName(){
    
        switch(playerList.selectedOptions[0].value){
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
    }
    
}
        
function loadValues(joueur){
        
    
/*-----------------------------loadSpell-------------------------------*/
    
            const DDSav = document.getElementById("DDSav");
            const bonusAtt = document.getElementById("bonusAtt");

            DDSav.value = joueur.DDSav
            bonusAtt.value = joueur.bonusAtt
        
    

/*-----------------------------loadCaract-------------------------------*/

            const force = document.getElementById("force");
            const dexterite = document.getElementById("dexterite");
            const constitution = document.getElementById("constitution");
            const intelligence = document.getElementById("intelligence");
            const sagesse = document.getElementById("sagesse");
            const charisme = document.getElementById("charisme");

            force.value = joueur.force;
            dexterite.value = joueur.dexterite;
            constitution.value = joueur.constitution;
            intelligence.value = joueur.intelligence;
            sagesse.value = joueur.sagesse;
            charisme.value = joueur.charisme;
    
/*-----------------------------loadCompet-------------------------------*/
    
/*-----------------------------loadWeapons-------------------------------*/
    
            const armesTBody=document.getElementById("armesTBody");
    
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


