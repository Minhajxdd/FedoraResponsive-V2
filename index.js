window.addEventListener('resize',checkWidth);
window.addEventListener('load',checkWidth);

function checkWidth(){
    const menuBar = document.querySelector('.dropNav');

    if(window.innerWidth >= 800){
        menuBar.style.display = 'none';
    }
}


function navbar(){
    const menuBar = document.querySelector('.dropNav');
    
    if(menuBar.style.display == 'none'){
        menuBar.style.display = 'block';
    }else{
        menuBar.style.display = 'none';
    }
    
}