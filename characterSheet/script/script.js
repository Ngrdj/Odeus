
const playerList = document.getElementById("name");

playerList.addEventListener("change",() => {
    
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
})
        
function loadValues(joueur){
        
        const armesTBody=document.getElementById("armesTBody");
    
        const sortPrep = document.getElementById("sortPrep");
        const DDSav = document.getElementById("DDSav");
        const bonusAtt = document.getElementById("bonusAtt");
    
        const force = document.getElementById("force");
        const dexterite = document.getElementById("dexterite");
        const constitution = document.getElementById("constitution");
        const intelligence = document.getElementById("intelligence");
        const sagesse = document.getElementById("sagesse");
        const charisme = document.getElementById("charisme");
        
        sortPrep.max = joueur.sortPrep
        DDSav.value = joueur.DDSav
        bonusAtt.value = joueur.bonusAtt
    
        force.value = joueur.force;
        dexterite.value = joueur.dexterite;
        constitution.value = joueur.constitution;
        intelligence.value = joueur.intelligence;
        sagesse.value = joueur.sagesse;
        charisme.value = joueur.charisme;
        
        
}
playerList.dispatchEvent(new Event('change'));
