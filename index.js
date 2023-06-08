const clickBtn = document.querySelector('.wish-btn');
const wishList = document.querySelector('.central-img-wrapper');
const image = document.querySelector(".central-img");
const container = document.querySelector(".container");

let isOpen = false;

function activateAccordion() {
    if(!isOpen){
        if(container.offsetWidth < 1140){
            image.style.width= '100%';
            return 
        }
        wishList.style.width = `${(image.offsetWidth)}px`;
        wishList.style.height = `${(image.offsetHeight)}px`;
        image.style.rotate = '';
        return
    }
    if(container.offsetWidth < 1140){
        image.style.width= '0%';
        return
    }
    wishList.style.width = "80%";
    image.style.rotate = "360deg";
}


clickBtn.addEventListener ('click', function (){
    if(isOpen){
        isOpen = false;
        activateAccordion();
        return
    }
    isOpen = true;
    activateAccordion();
})