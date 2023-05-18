

function displayCart(){
    let cartItems = localStorage.getItem("productInCart");
    cartItems = JSON.parse(cartItems);

    let productContainer = document.querySelector(".product-list");
    if(cartItems && productContainer){
        

        productContainer.innerHTML ="";
        Object.values(cartItems).map(item=>{
            productContainer.innerHTML += `

            <div class="product">
                <p class ="product-name">${item.name}</p>
                <p class ="product-price">$ ${item.price}.00</p>
            </div>
            <hr class="line">
            `

        })

        let cartCost = localStorage.getItem('totalCost');
        let subTotal = document.querySelector(".subtotal-fee");
    
            subTotal.innerHTML ="";
                subTotal.innerHTML += `
                $ ${cartCost}.00
                `
        
    let Total = document.querySelector(".total-price");
        Total.innerHTML ="";
        Total.innerHTML += `
            $ ${parseInt(cartCost) + 100}.00
            `
}
}

function val(){
    var checkbox = document.getElementsByName('validate[]');
    var checked = false;

  for (var i = 0; i < checkbox.length; i++){
    console.log(i);
    if (checkbox[i].checked){
        checked = true;


        var new_data = localStorage.getItem("productInCart");


        if(localStorage.getItem("orderedItem")== null){
            localStorage.setItem("orderedItem","[]");
        }

        var old_data = JSON.parse(localStorage.getItem("orderedItem"));

        old_data.push(new_data);

        localStorage.removeItem("productInCart");

        let orderedItem = localStorage.setItem("orderedItem", JSON.stringify(old_data));
        localStorage.setItem("orderedItem",JSON.parse(orderedItem));
        break;
    }
}
    if(checked == false){
        alert("Select a Payment Method.");
        return false;
    }
}

controlCheck = document.querySelectorAll('.control-checkbox');

    controlCheck.forEach(oneCheck => {
        
        oneCheck.addEventListener('click',function(){

            controlCheck.forEach(oneCheck => {
                oneCheck.checked = false;
            });

            oneCheck.checked = true;
        })
    });

displayCart();

function diffAdd(){
    var diffAdd = document.getElementById("changeAdd");
    var orderContainer = document.getElementById('order-details-container');

if(diffAdd.checked == false){
    orderContainer.style.display = "none";
}

else{
    orderContainer.style.display = "block";
}
}

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

let orderedItem = localStorage.getItem("orderedItem");
orderedItem = JSON.parse(orderedItem);

let cartItems = localStorage.getItem("orderedItem");
cartItems = JSON.parse(cartItems);

let cartItems1 = cartItems[0];
cartItems1 = JSON.parse(cartItems1);
console.log(cartItems1);

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
