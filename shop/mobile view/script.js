const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
progress = document.querySelector(".slider .progress")

let priceGap = 300;

priceInput.forEach(input=>{
    input.addEventListener("input", e =>{

        //getting two inputs value and parsing them to number
        let minVal = parseInt(priceInput[0].value),
        maxVal = parseInt(priceInput[1].value);

        if((maxVal - minVal >= priceGap) && maxVal <= 10000){
            if(e.target.className === "input-min"){ //if active input is min input
            rangeInput[0].value = minVal;
            progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            }
            else{
                rangeInput[1].value = maxVal;
                progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input=>{
    input.addEventListener("input", e =>{

        //getting two ranges value and parsing them to number
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

        if(maxVal - minVal < priceGap){
            if(e.target.className === "range-min"){ //if active slider is min slider
            rangeInput[0].value = maxVal - priceGap;
            }
            else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
        progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
        progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    } 
    });
});

const categories = document.querySelectorAll('.category');
const productWrapper = document.querySelector('.product-wrapper');

for(let i = 0; i< categories.length; i++){
    categories[i].addEventListener("click", ()=>{
        console.log("clicked");
        if(i == 0){

            productWrapper.innerHTML = "";

            productWrapper.innerHTML += `

            <!--ROW 1-->
            <div class="row">

            <!--FIRST PRODUCT-->
            <a href="../../products/product5/product.html">
                <div class="product-container">

                    <div class="picture-container">
                        <img src="../image/product5.jpg" alt="">
                    </div>

                    <div class="bottom-wrapper">
                        
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
            <!--SECOND PRODUCT-->
            <a href="../../products/product6/product.html">
                <div class="product-container">

                    <div class="picture-container">
                        <img src="../image/product6.jpg" alt="">
                    </div>

                    <div class="bottom-wrapper">
                        
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

        </div>
            `

        }

        else if(i==1){

                productWrapper.innerHTML = "";
    
                productWrapper.innerHTML += `
    
                <!--ROW 1-->
                <div class="row">
    
                <!--FIRST PRODUCT-->
                <a href="../../products/product2/product.html">
                    <div class="product-container">
    
                        <div class="picture-container">
                            <img src="../image/product2.png" alt="">
                        </div>
    
                        <div class="bottom-wrapper">
                            
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

                <!--SECOND PRODUCT-->
                <a href="../../products/product4/product.html">
                    <div class="product-container">
    
                        <div class="picture-container">
                            <img src="../image/product4.jpg" alt="">
                        </div>
    
                        <div class="bottom-wrapper">
                            
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

                <!--THIRD PRODUCT-->
                <a href="../../products/product9/product.html">
                    <div class="product-container">
    
                        <div class="picture-container">
                            <img src="../image/product9.jpg" alt="">
                        </div>
    
                        <div class="bottom-wrapper">
                            
                            <div class="name-price">
                                <p class="product-name">Office Desk</p>
                                <p class="product-price">$1299.00</p>
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

            else if(i==2){

                productWrapper.innerHTML = "";
    
                productWrapper.innerHTML += `
    
                <!--ROW 1-->
                <div class="row">
    
                <!--FIRST PRODUCT-->
                <a href="../../products/product1/product.html">
                    <div class="product-container">
    
                        <div class="picture-container">
                            <img src="../image/product1.jpg" alt="">
                        </div>
    
                        <div class="bottom-wrapper">
                            
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
                `

    
            }

            else if(i==3){

                productWrapper.innerHTML = "";
    
                productWrapper.innerHTML += `
    
                <!--ROW 1-->
                <div class="row">
    
                <!--FIRST PRODUCT-->
                <a href="../../products/product10/product.html">
                    <div class="product-container">
    
                        <div class="picture-container">
                            <img src="../image/product10.jpg" alt="">
                        </div>
    
                        <div class="bottom-wrapper">
                            
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

                <!--SECOND PRODUCT-->
                <a href="../../products/product11/product.html">
                    <div class="product-container">
    
                        <div class="picture-container">
                            <img src="../image/product11.jpg" alt="">
                        </div>
    
                        <div class="bottom-wrapper">
                            
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

                <!--THIRD PRODUCT-->
                <a href="../../products/product12/product.html">
                    <div class="product-container">
    
                        <div class="picture-container">
                            <img src="../image/product12.jpg" alt="">
                        </div>
    
                        <div class="bottom-wrapper">
                            
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

            else if(i==4){

                productWrapper.innerHTML = "";
    
                productWrapper.innerHTML += `
    
                <!--ROW 1-->
                <div class="row">
    
                <!--FIRST PRODUCT-->
                <a href="../../products/product7/product.html">
                    <div class="product-container">
    
                        <div class="picture-container">
                            <img src="../image/product7.jpg" alt="">
                        </div>
    
                        <div class="bottom-wrapper">
                            
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

    
            }

            else if(i==5){

                productWrapper.innerHTML = "";
    
                productWrapper.innerHTML += `
    
                <!--ROW 1-->
                <div class="row">
    
                <!--FIRST PRODUCT-->
                <a href="../../products/product3/product.html">
                    <div class="product-container">
    
                        <div class="picture-container">
                            <img src="../image/product3.jpg" alt="">
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
                <a href="../../products/product8/product.html">
                    <div class="product-container">
    
                        <div class="picture-container">
                            <img src="../image/product8.jpg" alt="">
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
    

            }

    });
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
