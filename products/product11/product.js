const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const num = document.querySelector(".num");

let counter = 1;


plus.addEventListener("click", ()=>{
    counter++;
    num.innerText = counter;
});

minus.addEventListener("click", ()=>{

    if(counter > 1){
    counter--;
    num.innerText = counter;
    }

});

let carts = document.querySelector('.add-cart');

let products = 
                {
                    name:'Drawer Dresser',
                    tag: 'drawer',
                    price: 599,
                    inCart: 0,
                    id: 11,
                    image: 'image/product11.jpg'

                }


carts.addEventListener('click', ()=>{
    cartNumbers(products);
});

function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers)

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
    } 
    
    else{
        localStorage.setItem('cartNumbers', 1);
    }

    setItems(product);
}

function setItems(product){
    
    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){

        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.id]: product
            }
        }
        cartItems[product.id].inCart = counter; 
    }
    
    else{
            product.inCart = 1;
            cartItems = {
                [product.id]:product
            }
        }

    localStorage.setItem("productInCart",JSON.stringify(cartItems));    
}

const description = document.querySelector(".description");
const product_tag = document.querySelector(".product-tag");
const review = document.querySelector(".review-section");

const description_wrapper = document.querySelector(".description-wrapper");
const product_wrapper = document.querySelector(".product-tag-wrapper");
const review_wrapper = document.querySelector(".review-wrapper")

description.addEventListener('click', () => {
    description.style.borderBottom = '1px solid black';
    product_tag.style.borderBottom = 'none';
    review.style.borderBottom = 'none';
    description_wrapper.style.display = 'block';
    product_wrapper.style.display = 'none';
    review_wrapper.style.display = 'none';
    whole_comment.style.display = 'none';
});

product_tag.addEventListener('click', () => {
    description.style.borderBottom = 'none';
    review.style.borderBottom = 'none';
    product_tag.style.borderBottom = '1px solid black';
    description_wrapper.style.display = 'none';
    product_wrapper.style.display = 'block';
    review_wrapper.style.display = 'none';
    whole_comment.style.display = 'none';
});

review.addEventListener('click', () => {
    description.style.borderBottom = 'none';
    product_tag.style.borderBottom = 'none';
    review.style.borderBottom = '1px solid black';
    description_wrapper.style.display = 'none';
    product_wrapper.style.display = 'none';
    review_wrapper.style.display = 'block';
    whole_comment.style.display = 'block';
});

const rating_filter = document.querySelectorAll('.rating-filter');
const whole_comment = document.querySelector('.whole-comment-system');

rating_filter.forEach(filtered => {
    
    filtered.addEventListener('click', ()=>{
        document.querySelector('.rating-filter-active')?.classList.remove('rating-filter-active');
        filtered.classList.add('rating-filter-active');

        var all_tab= rating_filter[0].classList.contains('rating-filter-active');
        var star5= rating_filter[1].classList.contains('rating-filter-active');

        if(all_tab || star5){
            whole_comment.style.display = 'block'
        }
        
        else{
            whole_comment.style.display = 'none'
        }

    })
});


const like = document.querySelectorAll('.helpful');

like.forEach(helpfulToggle => {
    
    helpfulToggle.addEventListener('click', ()=>{
        helpfulToggle.classList.toggle('heart');
        helpfulToggle.innerHTML = ""
        helpfulToggle.innerHTML += `
        <i class="fa-sharp fa-solid fa-thumbs-up"></i> Nice        
        `
    })
});

const mainImage = document.querySelector('.main-img');
const subImages = document.querySelectorAll('.sub-img img');

for (let i = 0; i < subImages.length; i++) {
 
    subImages[i].addEventListener('click', ()=>{
        console.log(subImages[i]);
        if(i==0){
            mainImage.innerHTML = "";
            mainImage.innerHTML += `
            <img src="image/productimage1.jpg" alt="">
            `
        }

        else if (i ==1){
            mainImage.innerHTML = "";
            mainImage.innerHTML += `
            <img src="image/productimage2.jpg" alt="">
            `
        }

        else{
            mainImage.innerHTML = "";
            mainImage.innerHTML += `
            <img src="image/productimage3.jpg" alt="">
            `
        }
})
}


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