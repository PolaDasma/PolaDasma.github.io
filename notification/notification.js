/* SEARCH BAR HEADER*/
    
const searchProd = document.querySelector(".header-search-container");
const box = document.querySelector(".box");
const searchInput = document.querySelector(".box input");
const searchProdContainer = document.querySelector(".search-product-container");

searchInput.addEventListener("click", ()=>{
    searchProdContainer.style.display = "block";
    box.classList.add("boxActive");
    searchInput.style.width = "200px";
});

function showProduct(){
    searchProdContainer.style.display = "block";
    box.classList.add("boxActive");
    searchInput.style.width = "200px";
}

function hideProduct(){
    searchProdContainer.style.display = "none";
    box.classList.remove("boxActive");
    searchInput.style.width = "";
}

const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product-list");
    const productSearch = document.querySelectorAll(".product-search");
    const pname = storeitems.getElementsByTagName("h2");

    for(var i = 0; i< pname.length; i++){
        let match = productSearch[i].getElementsByTagName('h2')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                productSearch[i].style.display = "";
            }

            else{
                productSearch[i].style.display = "none";
            }
        }
    }
}

const searchMobile = () =>{
    const searchbox = document.getElementById("search-item-mobile").value.toUpperCase();
    const storeitems = document.getElementById("product-holder");
    const productSearch = document.querySelectorAll(".product-search-mobile");
    const pname = storeitems.getElementsByTagName("h2");

    for(var i = 0; i< pname.length; i++){
        let match = productSearch[i].getElementsByTagName('h2')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                productSearch[i].style.display = "";
            }

            else{
                productSearch[i].style.display = "none";
            }
        }
    }
}

const searchContainer = document.querySelector(".search-bar-container");
const searchItem = document.getElementById("search-item-mobile");
const prodHolder = document.querySelector(".product-holder");

searchItem.addEventListener("click", ()=>{
    prodHolder.style.display = "block";
    searchContainer.classList.add("search-bar-active");
});

function hideProductMobile(){
    prodHolder.style.display = "none";
    searchContainer.classList.remove("search-bar-active");
}

/*dito*/

let orderedItemContainer = localStorage.getItem("orderedItem");
orderedItemContainer = JSON.parse(orderedItemContainer);

for(let i = 0 ; i <orderedItemContainer.length; i++){

    const container = document.querySelector(".container");

        container.innerHTML += `

        <div class="product-wrapper">

        <h2>ORDER NO. ${i + 1}</h2>

                <hr>

                <div class="product-container">
                </div>

        </div>
        `
}


for(let i = 0; i < orderedItemContainer.length; i++){
    let orderedItem = JSON.parse(orderedItemContainer[i]);
    const productContainer = document.querySelectorAll(".product-container");

    Object.values(orderedItem).map(item=>{
        productContainer[i].innerHTML += `

        <div class="product">
                    <div class="image">
                        <img src="${item.image}" alt="">
                    </div>

                    <div class="product-details">
                        <h5>${item.name}</h5>
                        <p>x${item.inCart}</p>
                    </div>

                    <div class="price-container">
                        <span>₱</span><span class="price">${item.inCart * item.price}</span>
                    </div>
                </div>
        `

        
    })

    const priceContainer = document.querySelectorAll(".price");

    let totalPrice = 0;
    for (let i = 0; i < priceContainer.length; i++) {
        let priceHolder = parseInt(priceContainer[i].textContent);
        totalPrice = totalPrice + priceHolder; 
    }
    
    

    productContainer[i].innerHTML += `
            <hr>

        <div class="total">
            <span class="order-total">Order Total: </span> <span class ="peso-sign">₱</span> <span class="total-price">${totalPrice}</span>
        </div>
    `
}

const totalPriceContainer = document.querySelectorAll(".total-price");

for(i = totalPriceContainer.length-1; i > 0 ; i --){

if(i!=0){
    const productContainer = document.querySelectorAll(".product-container");
    let totalPriceHolder = parseInt(totalPriceContainer[i].textContent);
    let previousPrice = parseInt(totalPriceContainer[i-1].textContent);

    totalPrice = totalPriceHolder - previousPrice;

    totalPriceContainer[i].innerHTML = `

        <span class="total-price">${totalPrice}</span>

    `
}
}

const navigationOrder = document.querySelectorAll(".navigation-order div");
const container = document.querySelector(".container");
const noOrder = document.querySelector(".no-order")

navigationOrder.forEach(navigateClicked => {
    
    navigateClicked.addEventListener('click', ()=>{
        document.querySelector('.navigation-order-active')?.classList.remove('navigation-order-active');
        navigateClicked.classList.add('navigation-order-active');

        navigationOrder[0].classList.contains('navigation-order-active');

        if(navigationOrder[0].classList.contains('navigation-order-active')||navigationOrder[1].classList.contains('navigation-order-active')){
            container.style.display = "block";
            noOrder.style.display = "none";
            console.log("clicked");
        }

        else{
            container.style.display = "none";
            noOrder.style.display = "flex";
        }

    })
});



let theEnd = 0;
const navbar = document.querySelector(".header-container header");

window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if(scrollTop > theEnd){
        navbar.style.top = "-500px";
    }

    else{
        navbar.style.top = "0";
    }

    theEnd = scrollTop;
})