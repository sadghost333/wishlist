const clickBtn = document.querySelector('.wish-btn');
const wishList = document.querySelector('.central-img-wrapper');
const image = document.querySelector(".central-img");

let isOpen = false;

function activateAccordion() {
    if(isOpen){
        wishList.style.width = "446px";
        image.style.rotate = '';
        return
    }
    wishList.style.width = "800px";
    image.style.rotate = "360deg";
}

function activateBtn() {
    if(isOpen){
        clickBtn.style.width = '200px';
        clickBtn.style.marginLeft = '40%';
        return
    }
    clickBtn.style.width = '500px';
    clickBtn.style.marginLeft = '25%';
}


clickBtn.addEventListener ('click', function (){
    if(isOpen){
        isOpen = false;
        activateAccordion();
        //activateBtn()
        return
    }
    isOpen = true
    //activateBtn();
    activateAccordion();
})