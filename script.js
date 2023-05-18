
/*for categories*/
const categories = document.querySelectorAll('.product-container-sub');
const productWrapper = document.querySelector('.product-wrapper');

for(let i = 0; i< categories.length; i++){
    categories[i].addEventListener("click", ()=>{
        console.log("clicked");
        if(i == 0){

            productWrapper.innerHTML = "";

            productWrapper.innerHTML += `
            <!--ROW-->
            <div class="row">

            <!--PRODUCT 1-->
            <a href="../products/product1/product.html">
                <div class="product">
                    
                    
                    <div class="product-image">
                        <img src="image/product1.jpg" alt="">
                    </div>

                    <div class="product-info">
                     
                        <div class="name-price">
                            <p class="product-name">Triple Nordic Corner Sofa</p>
                            <p class="product-price">$1290.00</p>
                        </div>

                        <div class="rate">
                            <img src="star.png" alt="">
                        </div>
                    </div>
                </div>
            </a>
                <!--PRODUCT 2-->
                <a href="../products/product2/product.html">
                    <div class="product">
                        
                        
                        <div class="product-image">
                            <img src="image/product2.png" alt="">
                        </div>

                        <div class="product-info">
                         
                            <div class="name-price">
                                <p class="product-name">Mahogany Boomerang Coffee Table</p>
                                <p class="product-price">$1149.00</p>
                            </div>

                            <div class="rate">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                    </div>
                </a>

             <!--PRODUCT 3-->
               
             <a href="../products/product3/product.html">
                <div class="product">
                    
                    
                    <div class="product-image">
                        <img src="image/product3.jpg" alt="">
                    </div>

                    <div class="product-info">
                     
                        <div class="name-price">
                            <p class="product-name">Nordic Bed</p>
                            <p class="product-price">$477.00</p>
                        </div>

                        <div class="rate">
                            <img src="star.png" alt="">
                        </div>
                    </div>
                </div>
            </a>

                <!--PRODUCT 4-->

                <a href="../products/product4/product.html">
                    <div class="product">
                        
                        
                        <div class="product-image">
                            <img src="image/product4.jpg" alt="">
                        </div>

                        <div class="product-info">
                         
                            <div class="name-price">
                                <p class="product-name">Sintered Stone Top Dining Table</p>
                                <p class="product-price">$1826.00</p>
                            </div>

                            <div class="rate">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                    </div>
                </a>
            </div>

                            <!--ROW-->
            <div class="row">

            <!--PRODUCT 1-->
            <a href="../products/product5/product.html">
                <div class="product">
                    
                    
                    <div class="product-image">
                        <img src="image/product5.jpg" alt="">
                    </div>

                    <div class="product-info">
                     
                        <div class="name-price">
                            <p class="product-name">Geometric Cage Pendant Light</p>
                            <p class="product-price">$57.00</p>
                        </div>

                        <div class="rate">
                            <img src="star.png" alt="">
                        </div>
                    </div>
                </div>
            </a>
                <!--PRODUCT 2-->
                <a href="../products/product6/product.html">
                    <div class="product">
                        
                        
                        <div class="product-image">
                            <img src="image/product6.jpg" alt="">
                        </div>

                        <div class="product-info">
                         
                            <div class="name-price">
                                <p class="product-name">Raindrop Multiple Hanging Lamp</p>
                                <p class="product-price">$809.00</p>
                            </div>

                            <div class="rate">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                    </div>
                </a>

             <!--PRODUCT 3-->
               
             <a href="../products/product7/product.html">
                <div class="product">
                    
                    
                    <div class="product-image">
                        <img src="image/product7.jpg" alt="">
                    </div>

                    <div class="product-info">
                     
                        <div class="name-price">
                            <p class="product-name">LED Full Length Lighted Mirror</p>
                            <p class="product-price">$282.00</p>
                        </div>

                        <div class="rate">
                            <img src="star.png" alt="">
                        </div>
                    </div>
                </div>
            </a>

                <!--PRODUCT 4-->

                <a href="../products/product8/product.html">
                    <div class="product">
                        
                        
                        <div class="product-image">
                            <img src="image/product8.jpg" alt="">
                        </div>

                        <div class="product-info">
                         
                            <div class="name-price">
                                <p class="product-name">Monochrome Bedroom</p>
                                <p class="product-price">$852.00</p>
                            </div>

                            <div class="rate">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                    </div>
                </a>
            </div>

                            <!--ROW-->
            <div class="row">

            <!--PRODUCT 1-->
            <a href="../products/product9/product.html">
                <div class="product">
                    
                    
                    <div class="product-image">
                        <img src="image/product9.jpg" alt="">
                    </div>

                    <div class="product-info">
                     
                        <div class="name-price">
                            <p class="product-name">Office Desk</p>
                            <p class="product-price">$299.00</p>
                        </div>

                        <div class="rate">
                            <img src="star.png" alt="">
                        </div>
                    </div>
                </div>
            </a>
                <!--PRODUCT 2-->
                <a href="../products/product10/product.html">
                    <div class="product">
                        
                        
                        <div class="product-image">
                            <img src="image/product10.jpg" alt="">
                        </div>

                        <div class="product-info">
                         
                            <div class="name-price">
                                <p class="product-name">Partition Shelves</p>
                                <p class="product-price">$299.00</p>
                            </div>

                            <div class="rate">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                    </div>
                </a>

             <!--PRODUCT 3-->
               
             <a href="../products/product11/product.html">
                <div class="product">
                    
                    
                    <div class="product-image">
                        <img src="image/product11.jpg" alt="">
                    </div>

                    <div class="product-info">
                     
                        <div class="name-price">
                            <p class="product-name">Drawer Dresser</p>
                            <p class="product-price">$599.00</p>
                        </div>

                        <div class="rate">
                            <img src="star.png" alt="">
                        </div>
                    </div>
                </div>
            </a>

                <!--PRODUCT 4-->

                <a href="../products/product12/product.html">
                    <div class="product">
                        
                        
                        <div class="product-image">
                            <img src="image/product12.jpg" alt="">
                        </div>

                        <div class="product-info">
                         
                            <div class="name-price">
                                <p class="product-name">Shoe Storage</p>
                                <p class="product-price">$699.00</p>
                            </div>

                            <div class="rate">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            `

        }

        else if(i==1){

                productWrapper.innerHTML = "";
    
                productWrapper.innerHTML += `
    
            
                `
            }

            else if(i==2){

                productWrapper.innerHTML = "";
    
                productWrapper.innerHTML += `
    
                <!--ROW-->
                <div class="row">
    
                <!--PRODUCT 1-->
                <a href="../products/product2/product.html">
                    <div class="product">
                        
                        
                        <div class="product-image">
                            <img src="image/product2.png" alt="">
                        </div>
    
                        <div class="product-info">
                         
                            <div class="name-price">
                                <p class="product-name">Mahogany Boomerang Coffee Table</p>
                                <p class="product-price">$1149.00</p>
                            </div>
    
                            <div class="rate">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                    </div>
                </a>
                    <!--PRODUCT 2-->
                    <a href="../products/product4/product.html">
                        <div class="product">
                            
                            
                            <div class="product-image">
                                <img src="image/product4.jpg" alt="">
                            </div>
    
                            <div class="product-info">
                             
                                <div class="name-price">
                                    <p class="product-name">Sintered Stone Top Dining Table</p>
                                    <p class="product-price">$1826.00</p>
                                </div>
    
                                <div class="rate">
                                    <img src="star.png" alt="">
                                </div>
                            </div>
                        </div>
                    </a>
    
                 <!--PRODUCT 3-->
                   
                 <a href="../products/product11/product.html">
                    <div class="product">
                        
                        
                        <div class="product-image">
                            <img src="image/product11.jpg" alt="">
                        </div>
    
                        <div class="product-info">
                         
                            <div class="name-price">
                                <p class="product-name">Office Desk</p>
                                <p class="product-price">$299.00</p>
                            </div>
    
                            <div class="rate">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                    </div>
                </a>
    
                `
    
    
            }

            else if(i==3){

                productWrapper.innerHTML = "";
    
                productWrapper.innerHTML += `
    
                <!--ROW-->
                <div class="row">
    
                <!--PRODUCT 1-->
                <a href="../products/product3/product.html">
                    <div class="product">
                        
                        
                        <div class="product-image">
                            <img src="image/product3.jpg" alt="">
                        </div>
    
                        <div class="product-info">
                         
                            <div class="name-price">
                                <p class="product-name">Nordic Bed</p>
                                <p class="product-price">$477.00</p>
                            </div>
    
                            <div class="rate">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                    </div>
                </a>
                    <!--PRODUCT 2-->
                    <a href="../products/product8/product.html">
                        <div class="product">
                            
                            
                            <div class="product-image">
                                <img src="image/product8.jpg" alt="">
                            </div>
    
                            <div class="product-info">
                             
                                <div class="name-price">
                                    <p class="product-name">Monochrome Bedroom</p>
                                    <p class="product-price">$852.00</p>
                                </div>
    
                                <div class="rate">
                                    <img src="star.png" alt="">
                                </div>
                            </div>
                        </div>
                    </a>
                `
    
                const row = document.querySelector('.row');
                row.style.width = "680px";
    
            }

            else if(i==4){

                productWrapper.innerHTML = "";
    
                productWrapper.innerHTML += `
    
                <!--ROW-->
                <div class="row">
    
                <!--PRODUCT 1-->
                <a href="../products/product7/product.html">
                    <div class="product">
                        
                        
                        <div class="product-image">
                            <img src="image/product7.jpg" alt="">
                        </div>
    
                        <div class="product-info">
                         
                            <div class="name-price">
                                <p class="product-name">LED Full Length Lighted Mirror</p>
                                <p class="product-price">$282.00</p>
                            </div>
    
                            <div class="rate">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                    </div>
                </a>
                `
    
                const row = document.querySelector('.row');
                row.style.width = "300px";
    
            }

            else if(i==5){

                productWrapper.innerHTML = "";
    
                productWrapper.innerHTML += `
    
                <!--ROW 1-->
                <div class="row">
    
                <!--FIRST PRODUCT-->
                <a href="../products/product3/product.html">
                    <div class="product-container">
    
                        <div class="picture-container">
                            <img src="image/product3.jpg" alt="">
                        </div>
    
                        <div class="bottom-wrapper">
                            
                            <div class="name-price">
                                <p class="product-name">Nordic Bed</p>
                                <p class="product-price">$477.00</p>
                            </div>
    
                            <div class="rate">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                    </div>
                </a>

                <!--SECOND PRODUCT-->
                <a href="../products/product8/product.html">
                    <div class="product-container">
    
                        <div class="picture-container">
                            <img src="image/product8.jpg" alt="">
                        </div>
    
                        <div class="bottom-wrapper">
                            
                            <div class="name-price">
                                <p class="product-name">Monochrome Bed</p>
                                <p class="product-price">$852.00</p>
                            </div>
    
                            <div class="rate">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                    </div>
                </a>
                `
    
                const row = document.querySelector('.row');
                row.style.width = "550px";
    
            }

    });
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


/*search for mobile */
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