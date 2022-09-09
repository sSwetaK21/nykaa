
$(document).ready(function () {
    $('.slider').slick({
        dots:true,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev"> < </button>',
        nextArrow: '<button class="slick-next"> > </button>',
    });
});



$(" .filters input[type='radio']").click(function(){
  var radioValue = $("input[name='product-radio']:checked").val();
  if(radioValue){
    $('.productEl').hide();
    $(`.${radioValue}`).show();
  }
});

let sortBtn = document.querySelector(".sortBtn")
let sortDiv = document.querySelector(".sortDiv")
let downArr = document.querySelector(".downArr")

sortBtn.addEventListener("click" , showSort)

let showSortFlag = true

function showSort() {
  if(showSortFlag) {
    sortDiv.style.display = "flex"
    sortDiv.style.flexDirection = "column"
    showSortFlag = false
  }else {

    sortDiv.style.display = "none"
    downArr.style.display = "block"
    showSortFlag = true

  }

}


//Price multi here

let FPRICE = document.querySelector(".FPRICE")
let PRICEMULTI = document.querySelector(".PRICEMULTI")
let PriDOWN = document.querySelector(".PriDOWN")
let PriCUT = document.querySelector(".PriCUT")

FPRICE.addEventListener("click" , SHOWPriceFil)

let FPRICEflag = true

function SHOWPriceFil() {
  if(FPRICEflag) {
    PRICEMULTI.style.display = "flex"
    PriDOWN.style.display = "none"
    PriCUT.style.display = "block"
    FPRICEflag = false
  }else {

    PRICEMULTI.style.display = "none"
    PriDOWN.style.display = "block"
    PriCUT.style.display = "none"
    FPRICEflag = true

  }

}

//category
let categery = document.querySelector(".categery")
let catOptions = document.querySelector(".catOptions")
let CATDOWN = document.querySelector(".CATDOWN")
let CATCUT = document.querySelector(".CATCUT")

categery.addEventListener("click" , showCat)

let categoryflag = true

function showCat() {
  if(categoryflag) {
    catOptions.style.display = "flex"
    catOptions.style.flexDirection = "column"
    CATDOWN.style.display = "none"
    CATCUT.style.display = "block"
    categoryflag = false
  }else {

    catOptions.style.display = "none"
    CATDOWN.style.display = "block"
    CATCUT.style.display = "none"
    categoryflag = true

  }

}


// wishlsit

let shades = document.querySelector(".shades");
let hoverbtn = document.querySelector(".hoverbtn")
let hoverFlag = true

shades.addEventListener("click", showDDiv);

function showDDiv(){
    if(hoverFlag){
        hoverbtn.style.display = "flex"
        hoverbtn.style.width = "100%"

        shades.style.display = "none"

    } else{
        hoverbtn.style.display = "none"
        shades.style.display = "block"


    }

}

//heart fill

let heartBtn = document.querySelector(".heartBtn")
let fillBtn = document.querySelector(".fillBtn")

let heartflag = true

heartBtn.addEventListener("click", function (){
    if(heartflag){
        heartBtn.style.display = "none"
        fillBtn.style.display = "block"
    } else{
        heartBtn.style.display = "block"
        fillBtn.style.display = "none"
    }
   
   
})