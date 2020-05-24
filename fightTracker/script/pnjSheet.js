const pnjSelect = document.getElementById("pnjSelect");

const forcePnj = document.getElementById("forcePnj");
const dexteritePnj = document.getElementById("dexteritePnj");
const constitutionPnj = document.getElementById("constitutionPnj");
const intelligencePnj = document.getElementById("intelligencePnj");
const sagessePnj = document.getElementById("sagessePnj");
const charismePnj = document.getElementById("charismePnj");

const portraitPnj=document.getElementById("portraitPnj");

const pnjDetails=document.getElementById("pnjDetails");

//............................................................................................
pnjSelect.addEventListener("change", getPnjName);


window.addEventListener("load", reloadValues);


//............................................................................................

function getPnjName(){
    
        switch(pnjSelect.selectedOptions[0].value){
        case 'loup': 
            loadPnjValues(loup);
        break;
        case 'gobelin': 
            loadPnjValues(gobelin);
        break;
        case 'hobgobelin': 
            loadPnjValues(hobgobelin);
        break;
        case 'brigand':  
            loadPnjValues(brigand);
        break;
        case 'tavernier': 
            loadPnjValues(tavernier);
        break;
        case 'zombi': 
            loadPnjValues(zombi);
        break;
        case 'araignée': 
            loadPnjValues(araignéeG);
        break;
        case 'archer': 
            loadPnjValues(archer);
        break;
        case 'mageP': 
            loadPnjValues(mageP);
        break;
        case 'ogre': 
            loadPnjValues(ogre);
        break;
                
        default:reloadPnjValues();
    }
    
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
            
/*-----------------------------loadDetails-------------------------------*/
    
            pnjDetails.value = pnj.details;
            
            pnjDetails.addEventListener("blur",()=>{

            pnj.details = pnjDetails.value;

            });
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
    
    pnjDetails.value = '';
}
reloadPnjValues();