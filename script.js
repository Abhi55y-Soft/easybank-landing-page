const toggle_btn = document.querySelector('.burger-icon');
const navigation = document.querySelector('header .nav');
const img = document.querySelector('#imgClickAndChange');

toggle_btn.addEventListener('click',()=>{
    if(navigation.classList.contains('visible')){
        navigation.classList.remove('visible');
        img.src = "./images/icon-hamburger.svg";
    }
    else {
        navigation.classList.add('visible');
        img.src = "./images/icon-close.svg";
    }

})


document.querySelector('.height').innerHTML = window.innerWidth;