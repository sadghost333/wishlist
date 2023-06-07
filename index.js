const clickBtn = document.querySelector('.click-block');
const wishList =document.querySelector('.wish-list');

let isOpen = false;

function activateAccordion() {
    if(isOpen){
        wishList.style.height = 0;
        wishList.style.paddingTop = 0;
        return
    }
    wishList.style.height = "550px";
    wishList.style.paddingTop = '30px';
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