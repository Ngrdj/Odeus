const pnjSelect = document.getElementById("pnjSelect");

const forcePnj = document.getElementById("forcePnj");
const dexteritePnj = document.getElementById("dexteritePnj");
const constitutionPnj = document.getElementById("constitutionPnj");
const intelligencePnj = document.getElementById("intelligencePnj");
const sagessePnj = document.getElementById("sagessePnj");
const charismePnj = document.getElementById("charismePnj");

const pnjClassOutput=document.getElementById("pnjClassOutput");

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
        case 'mageE': 
            loadPnjValues(mageE);
        break;
        case 'mageT': 
            loadPnjValues(mageT);
        break;
        case 'mageA': 
            loadPnjValues(mageA);
        break;
        case 'ogre': 
            loadPnjValues(ogre);
        break;
        case 'noble': 
            loadPnjValues(noble);
        break;
        case 'paysan': 
            loadPnjValues(paysan);
        break;
        case 'orque': 
            loadPnjValues(orque);
        break;
        case 'pretre': 
            loadPnjValues(pretre);
        break;
        case 'marchand': 
            loadPnjValues(marchand);
        break;
        case 'roi': 
            loadPnjValues(roi);
        break;
        case 'prince': 
            loadPnjValues(prince);
        break;
        case 'princesse': 
            loadPnjValues(princesse);
        break;
        case 'druide': 
            loadPnjValues(druide);
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
    
/*-----------------------------loadClasse-------------------------------*/
    
            pnjClassOutput.value = pnj.classe;
    
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