const focusZone = document.querySelectorAll(".focusZone");

const asideRight  = document.getElementById("aside-right");
const asideLeft  = document.getElementById("aside-left");
const headerBar = document.getElementById("headerBar");
const footerBar = document.getElementById("footerBar");

asideRight.style.marginRight = `-${asideRight.offsetWidth}`+"px";
asideLeft.style.marginLeft = `-${asideLeft.offsetWidth}`+"px";
headerBar.style.marginTop = `-${headerBar.offsetHeight}`+"px";
footerBar.style.bottom = `-${footerBar.offsetHeight}`+"px";

document.getElementById("fightTracker").style.marginTop = `${document.getElementById("upFocus").offsetHeight}`+"px";


for(const child of body.children){
    
    if(!child.classList.contains("focusZone")){
        
        child.style.zIndex = "2";
        
    }
}

for(const zone of focusZone){
    
    zone.addEventListener('mouseenter', ()=>{
        
        
        switch(zone.id){
                
            case("upFocus"):
                console.log("upFocus");
                headerBar.style.marginTop = "20px";
                break;
            case("downFocus"):
                console.log("downFocus");
                footerBar.style.bottom = "50px";
                break;
            case("leftFocus"):
                console.log("leftFocus");
                asideLeft.style.marginLeft = "0px";
                break;
            case("rightFocus"):
                console.log("rightFocus");
                asideRight.style.marginRight = "0px"; 
                break;
                
        }

    });
    zone.addEventListener('mouseleave', ()=>{
        
        
        switch(zone.id){
                
            case("upFocus"):
                console.log("upFocus");
                headerBar.style.marginTop = `-${headerBar.offsetHeight}`+"px";
                break;
            case("downFocus"):
                console.log("downFocus");
                footerBar.style.bottom = `-${footerBar.offsetHeight}`+"px";
                break;
            case("leftFocus"):
                console.log("leftFocus");
                asideLeft.style.marginLeft = `-${asideLeft.offsetWidth}`+"px";
                break;
            case("rightFocus"):
                console.log("rightFocus");

               asideRight.style.marginRight = `-${asideRight.offsetWidth}`+"px";
                
                break;
                
        }

    });
    
    
}