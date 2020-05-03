for(const th of document.getElementsByTagName('th')){
    if(th.childNodes.length < 1){
        
        th.setAttribute('class', 'empty');
        
    }
    
}
const showButtons = document.querySelectorAll('.showButton');

for(const button of showButtons){
    
    button.addEventListener('click',() => {
        
        let nextTab = button.parentElement.nextElementSibling;
        console.log(nextTab);
        if(nextTab.style.display === 'none'){
            
            nextTab.style.display = 'table';
            button.textContent = "↑";
            
        }else{
            
            nextTab.style.display = 'none';
            button.textContent = "↓";
        }
        
    })
    
}