for(const th of document.getElementsByTagName('th')){
    if(th.childNodes.length < 1){
        
        th.setAttribute('class', 'empty');
        
    }
    
}