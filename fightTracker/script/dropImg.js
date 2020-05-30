window.addEventListener("dragover",(event) => {
  event.preventDefault();
});
window.addEventListener("drop",(event) => {
  event.preventDefault();
    
   let imageUrl;
    
    if(Array.from(event.dataTransfer.types).includes('Files')){
        
        imageUrl = window.URL.createObjectURL( event.dataTransfer.files[0]);
        
    }else{
        
        imageUrl = event.dataTransfer.getData('URL');
        
    }
    
    
    body.style.background = '';
    body.style.background = `url(${imageUrl})`;
    body.style.backgroundSize = '100vw 100vh';
    body.style.backgroundRepeat = 'no-repeat'; 

    
});