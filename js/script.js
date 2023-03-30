document.addEventListener('DOMContentLoaded', function(){

const navi = document.querySelector('.navbar');
const nItem = document.querySelector('.navbar');
const hamMenu = document.querySelector('.navbar-collapse');


function addShadow(){
    if( window.scrollY >= 1){
    navi.classList.add('shadow-bg')
    nItem.classList.remove('remove')
    }
    else{
    navi.classList.remove('shadow-bg')
    nItem.classList.add('remove')
    }

}

function homeHide(){

    nItem.classList.add('remove')
}

function hideMenu(){
    hamMenu.classList.remove('show');
}




homeHide();

window.addEventListener('scroll', addShadow)

window.addEventListener('click', hideMenu)




})





