const searchForm = document.querySelector(".search-form");

const cartItem = document.querySelector(".cart-items-container");

// console.log(cartItem);
// // console.log(cardBtn);
// console.log(searchBtn);

//! Buttons

const searchBtn = document.querySelector("#search-btn");

const cardBtn = document.querySelector("card-btn");


searchBtn.addEventListener("click",function(){
    searchForm.classList.toggle("active");
    document.addEventListener("click",function(e){

        if(
            !e.composedPath().includes(searchBtn) && 
            !e.composedPath().includes(searchForm)
            // composedPath() tıkladığımızı bulmamıza yarıyor
            ) {
            searchForm.classList.remove("active");
        }
    });
});


cardBtn.addEventListener("click",function(){

    cartItem.classList.toggle("active");
    document.addEventListener("click",function(e) {

        if(
            !e.composedPath().includes(cardBtn) && 
            !e.composedPath().includes(cartItem)) 
            {
            cartItem.classList.remove("active");
        }
    })
})