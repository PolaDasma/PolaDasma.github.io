

function displayCart(){
    localStorage.setItem('totalCost', 0);
    let cartItems = localStorage.getItem("productInCart");
    cartItems = JSON.parse(cartItems);

    let cartExist=[];

    for(let i = 0; i < 100; i++){
        let id = i.toString();

        if(cartItems[id]!=undefined){
            cartExist[i] = i;
            console.log(cartExist);
        }
    }

    const filteredCart = cartExist.filter((a) => a);
console.log(filteredCart);
    let productContainer = document.querySelector(".product");
    if(cartItems && productContainer){
        

        productContainer.innerHTML ="";
        Object.values(cartItems).map(item=>{
            productContainer.innerHTML += `
            <div class="products">
                    <div class= "product-image"><img src="${item.image}" alt=""></div>
                    <div class= "product-name"><p>${item.name}</p></div>
                    <div class="product-price"><p >${item.price}</p></div>

                <div class ="product-quantity">
                    <div class="counter">
                        <span class="minus">-</span>
                        <span class="num">${item.inCart}</span>
                        <span class="plus">+</span>
                    </div>
                </div>

                    <div class="product-total"><p>${item.inCart * item.price}</p></div>
                    <div class="product-remove"><p><i class="fa-sharp fa-regular fa-circle-xmark"></i></p></div>
            </div>
            `
            const plus = document.querySelectorAll(".plus");
            const minus = document.querySelectorAll(".minus");
            const remove = document.querySelectorAll(".product-remove");
            let total = 0;

        for(let i = 0; i< plus.length; i++){
            plus[i].addEventListener("click", ()=>{
                let id = filteredCart[i];
                addItems(id);
                window.location.reload();
            });
        }

        for(let i = 0; i< minus.length; i++){
            minus[i].addEventListener("click", ()=>{
                let id = filteredCart[i];
                minusItems(id);
                window.location.reload();
            });
        }

        for(let i = 0; i < plus.length; i++){
            let id = filteredCart[i];
            id = id.toString();

            total = total + (cartItems[id].inCart * cartItems[id].price);
            localStorage.setItem("totalCost", total);
        }

        for(let i = 0; i< minus.length; i++){
            remove[i].addEventListener("click", ()=>{
                let id = filteredCart[i];
                removeItem(id);
                window.location.reload();
            });
        }


        })

        let cartCost = localStorage.getItem('totalCost');
        let subTotal = document.querySelector(".sub-total-price");
        if(cartItems && subTotal){
    
            subTotal.innerHTML ="";
                subTotal.innerHTML += `
                $ ${cartCost}.00
                `
    }

    let Total = document.querySelector(".total-price");
    if(cartItems && Total){ 

        Total.innerHTML ="";
        Total.innerHTML += `
            $ ${cartCost}.00
            `
}
}
}

function addItems(id){

    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);
    
        cartItems[id].inCart += 1;


    localStorage.setItem("productInCart",JSON.stringify(cartItems));    
}

function minusItems(i){
    
    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);
    let id = i.toString();

        cartItems[id].inCart-= 1;

    localStorage.setItem("productInCart",JSON.stringify(cartItems));    
}

function removeItem(i){
    
    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);
    let id = i.toString();

    delete cartItems[id];

    localStorage.setItem("productInCart",JSON.stringify(cartItems));    
}

displayCart();

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