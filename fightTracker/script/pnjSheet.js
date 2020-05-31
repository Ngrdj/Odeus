const pnjSheet = document.getElementById("pnjSheet");

const pnjClassOutput=document.getElementById("pnjClassOutput");
const pnjTypeOutput=document.getElementById("pnjTypeOutput");
const pnjNameOutput=document.getElementById("pnjNameOutput");
const portraitPnj=document.getElementById("portraitPnj");

const forcePnj = document.getElementById("forcePnj");
const dexteritePnj = document.getElementById("dexteritePnj");
const constitutionPnj = document.getElementById("constitutionPnj");
const intelligencePnj = document.getElementById("intelligencePnj");
const sagessePnj = document.getElementById("sagessePnj");
const charismePnj = document.getElementById("charismePnj");

const pnjDetails=document.getElementById("pnjDetails");

//............................................................................................

window.addEventListener("load", reloadValues);

pnjSheet.addEventListener("drop",(event)=>{
    
    loadPnjValues(event);
    
});


//............................................................................................

function loadPnjValues(){
    
    console.log(event.dataTransfer.files[0]);
    
    let getFile = event.dataTransfer.files[0];
    let xmlFile = new FileReader();
        
    xmlFile.readAsText(getFile);
        
        
    xmlFile.addEventListener('load', () =>{
            
        parser = new DOMParser();
            
        const xmlContent = parser.parseFromString(xmlFile.result,"text/xml");
        
        //XML content
        /*-----------*/
        
        
            pnjClassOutput.value = `${xmlContent.getElementsByTagName('class')[0].textContent}`;
            pnjTypeOutput.value = `${xmlContent.getElementsByTagName('type')[0].textContent}`;
            pnjNameOutput.value = `${xmlContent.getElementsByTagName('name')[0].textContent}`;
        
            portraitPnj.style.background = `url(${xmlContent.getElementsByTagName('portrait')[0].textContent})`;
            portraitPnj.style.backgroundSize= "100% 100%"; 
            portraitPnj.style.backgroundRepeat="no-repeat";
        
            forcePnj.value = `${xmlContent.getElementsByTagName('str')[0].textContent}`;
            dexteritePnj.value = `${xmlContent.getElementsByTagName('dex')[0].textContent}`;
            constitutionPnj.value = `${xmlContent.getElementsByTagName('con')[0].textContent}`;
            intelligencePnj.value = `${xmlContent.getElementsByTagName('int')[0].textContent}`;
            sagessePnj.value = `${xmlContent.getElementsByTagName('wis')[0].textContent}`;
            charismePnj.value = `${xmlContent.getElementsByTagName('cha')[0].textContent}`;
            
            pnjDetails.innerHTML = `${xmlContent.getElementsByTagName('description')[0].textContent}`;
        
        /*----------*/

    })
    
}

function reloadPnjValues(){
    

    forcePnj.value = '0';
    dexteritePnj.value = '0';
    constitutionPnj.value = '0';
    intelligencePnj.value = '0';
    sagessePnj.value = '0';
    charismePnj.value = '0';
    
    pnjDetails.value = '';
    
}
reloadPnjValues();