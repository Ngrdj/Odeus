for(const th of document.getElementsByTagName('th')){
    if(th.childNodes.length < 1){
        
        th.setAttribute('class', 'empty');
        
    }
    
}
const showButtons = document.querySelectorAll('.showButton');

for(const button of showButtons){
    
    button.addEventListener('click',() => {
        
        let nextTab = button.parentElement.nextElementSibling;
        
        if(nextTab.classList.contains('hidden')){
            
            nextTab.classList.remove('hidden');
            button.textContent = "↑";
            
        }else{
            
            nextTab.classList.add('hidden');
            button.textContent = "↓";
        }
        
    })
    
}