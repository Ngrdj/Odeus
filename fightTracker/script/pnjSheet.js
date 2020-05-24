const pnjSelect = document.getElementById("pnjSelect");

const forcePnj = document.getElementById("forcePnj");
const dexteritePnj = document.getElementById("dexteritePnj");
const constitutionPnj = document.getElementById("constitutionPnj");
const intelligencePnj = document.getElementById("intelligencePnj");
const sagessePnj = document.getElementById("sagessePnj");
const charismePnj = document.getElementById("charismePnj");

const portraitPnj=document.getElementById("portraitPnj");
//............................................................................................
pnjSelect.addEventListener("change", getPnjName);


window.addEventListener("load", reloadValues);
//............................................................................................
function getPnjName(){
    
        switch(pnjSelect.selectedOptions[0].value){
        case 'loup': 
            loadPnjValues(Loup);
        break;
        case 'gobelin': 
            loadPnjValues(Gobelin);
        break;
        case 'hobgobelin': 
            loadPnjValues(Hobgobelin);
        break;
        case 'brigand': 
            loadPnjValues(Brigand);
        break;
        case 'tavernier': 
            loadPnjValues(Tavernier);
        break;
                
        default:
                reloadPnjValues();
    }
    
}
//............................................................................................
function reloadPnjValues(){
    
    pnjSelect.selectedIndex = 0;

    forcePnj.value = '0';
    dexteritePnj.value = '0';
    constitutionPnj.value = '0';
    intelligencePnj.value = '0';
    sagessePnj.value = '0';
    charismePnj.value = '0';
}
//............................................................................................
function loadPnjValues(pnj){
        

/*-----------------------------loadCaract-------------------------------*/

            forcePnj.value = pnj.force;
            dexteritePnj.value = pnj.dexterite;
            constitutionPnj.value = pnj.constitution;
            intelligencePnj.value = pnj.intelligence;
            sagessePnj.value = pnj.sagesse;
            charismePnj.value = pnj.charisme;
    
/*-----------------------------loadPortrait-------------------------------*/
    
            portraitPnj.style.background=`url(${pnj.portrait})`;
            portraitPnj.style.backgroundSize= "100% 100%"; 
            portraitPnj.style.backgroundRepeat="no-repeat";
            
}
