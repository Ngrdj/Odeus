
const Namas = {
    
    armes : ["1","2","3"],
    
    sortPrep : 1,
    DDSav : "+1",
    bonusAtt : "+1",
    
    force : "+1",
    dexterite : "+1",
    constitution : "+1",
    intelligence : "+1",
    dexterite : "+1",
    sagesse : "+1",
    charisme : "+1"
    
    
    
}
const Esus = {
    
    sortPrep : 2,
    DDSav : "+2",
    bonusAtt : "+2",
    
    force : "+2",
    dexterite : "+2",
    constitution : "+2",
    intelligence : "+2",
    dexterite : "+2",
    sagesse : "+2",
    charisme : "+2"
    
}
const Kyra = {
    
    sortPrep : 3,
    DDSav : "+3",
    bonusAtt : "+3",
    
    force : "+3",
    dexterite : "+3",
    constitution : "+3",
    intelligence : "+3",
    dexterite : "+3",
    sagesse : "+3",
    charisme : "+3"
    
}
const Grudu = {
    
    sortPrep : 4,
    DDSav : "+4",
    bonusAtt : "+4",
    
    force : "+4",
    dexterite : "+4",
    constitution : "+4",
    intelligence : "+4",
    dexterite : "+4",
    sagesse : "+4",
    charisme : "+4"
    
}
const Lyre = {
    
    sortPrep : 5,
    DDSav : "+5",
    bonusAtt : "+5",
    
    force : "+5",
    dexterite : "+5",
    constitution : "+5",
    intelligence : "+5",
    dexterite : "+5",
    sagesse : "+5",
    charisme : "+5"
    
}
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
