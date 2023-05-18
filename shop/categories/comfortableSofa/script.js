const result = document.querySelector(".num-result");
const width = document.querySelector(".container");
    
// Insert values on load of page
window.onload = function() {

  if(window.innerWidth==768){
      window.open("mobile view/shop-mobile.html")
  }

  
  //width.innerHTML = window.innerWidth;
};
  
// Change values when window is resized
window.onresize = function() {

  if(window.innerWidth==768){
      window.open("mobile view/shop-mobile.html")
  }
  //width.innerHTML = window.innerWidth;
};

const categories = document.querySelectorAll('.category');
const productWrapper = document.querySelector('.product-wrapper');

for(let i = 0; i< categories.length; i++){
    categories[i].addEventListener("click", ()=>{
        if(i == 0){

            result.innerHTML = "";

            result.innerHTML +=`
            Showing 1-2 of 2 results
        `

            productWrapper.innerHTML = "";

            productWrapper.innerHTML += `

            <!--ROW 1-->
            <div class="row">

            <!--FIRST PRODUCT-->
            <a href="../products/product5/product.html">
                <div class="product-container">

                    <div class="picture-container">
                        <img src="image/product5.jpg" alt="">
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
            <a href="../products/product6/product.html">
                <div class="product-container">

                    <div class="picture-container">
                        <img src="image/product6.jpg" alt="">
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

            const row = document.querySelector('.row');
            row.style.width = "550px";

        }

        else if(i==1){

            result.innerHTML = "";

            result.innerHTML +=`
            Showing 1-3 of 3 results
        `

                productWrapper.innerHTML = "";
    
                productWrapper.innerHTML += `
    
                <!--ROW 1-->
                <div class="row">
    
                <!--FIRST PRODUCT-->
                <a href="../products/product2/product.html">
                    <div class="product-container">
    
                        <div class="picture-container">
                            <img src="image/product2.png" alt="">
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
                <a href="../products/product4/product.html">
                    <div class="product-container">
    
                        <div class="picture-container">
                            <img src="image/product4.jpg" alt="">
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
                <a href="../products/product9/product.html">
                    <div class="product-container">
    
                        <div class="picture-container">
                            <img src="image/product9.jpg" alt="">
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
    
                const row = document.querySelector('.row');
                row.style.width = "850px";
    
            }

            else if(i==2){

                result.innerHTML = "";

                result.innerHTML +=`
                Showing 1-1 of 1 results
            `

                productWrapper.innerHTML = "";
    
                productWrapper.innerHTML += `
    
                <!--ROW 1-->
                <div class="row">
    
                <!--FIRST PRODUCT-->
                <a href="../products/product1/product.html">
                    <div class="product-container">
    
                        <div class="picture-container">
                            <img src="image/product1.jpg" alt="">
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
    
                const row = document.querySelector('.row');
                row.style.width = "300px";
    
            }

            else if(i==3){

                result.innerHTML = "";

                result.innerHTML +=`
                Showing 1-3 of 3 results
            `

                productWrapper.innerHTML = "";
    
                productWrapper.innerHTML += `
    
                <!--ROW 1-->
                <div class="row">
    
                <!--FIRST PRODUCT-->
                <a href="../products/product10/product.html">
                    <div class="product-container">
    
                        <div class="picture-container">
                            <img src="image/product10.jpg" alt="">
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
                <a href="../products/product11/product.html">
                    <div class="product-container">
    
                        <div class="picture-container">
                            <img src="image/product11.jpg" alt="">
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
                <a href="../products/product12/product.html">
                    <div class="product-container">
    
                        <div class="picture-container">
                            <img src="image/product12.jpg" alt="">
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
    
                const row = document.querySelector('.row');
                row.style.width = "850px";
    
            }

            else if(i==4){

                result.innerHTML = "";

                result.innerHTML +=`
                Showing 1-1 of 1 results
            `

                productWrapper.innerHTML = "";
    
                productWrapper.innerHTML += `
    
                <!--ROW 1-->
                <div class="row">
    
                <!--FIRST PRODUCT-->
                <a href="../products/product7/product.html">
                    <div class="product-container">
    
                        <div class="picture-container">
                            <img src="image/product7.jpg" alt="">
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
    
                const row = document.querySelector('.row');
                row.style.width = "300px";
    
            }

            else if(i==5){

                result.innerHTML = "";

                result.innerHTML +=`
                Showing 1-2 of 2 results
            `

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




function getSelectedValue(){
const sort = document.getElementById("sort").value;

        if(sort == 1){

            result.innerHTML = "";

            result.innerHTML +=`
            Showing 1-12 of 12 results
        `

            console.log("clicked");

            productWrapper.innerHTML = "";

            productWrapper.innerHTML += `

            <!--ROW 1-->
            <div class="row">

            <!--FIRST PRODUCT-->
            <a href="../products/product1/product.html">
                <div class="product-container">

                    <div class="picture-container">
                        <img src="image/product1.jpg" alt="">
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
            <!--SECOND PRODUCT-->
            <a href="../products/product2/product.html">
                <div class="product-container">

                    <div class="picture-container">
                        <img src="image/product2.png" alt="">
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

            <!--THIRD PRODUCT-->

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
            
            <!--FOURTH PRODUCT-->

            <a href="../products/product4/product.html">
                <div class="product-container">

                    <div class="picture-container">
                        <img src="image/product4.jpg" alt="">
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
        </div>

    <!--ROW 2-->
        <div class="row">

            <!--FIRST PRODUCT-->
            <a href="../products/product5/product.html">
                <div class="product-container">

                    <div class="picture-container">
                        <img src="image/product5.jpg" alt="">
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
            <a href="../products/product6/product.html">
                <div class="product-container">

                    <div class="picture-container">
                        <img src="image/product6.jpg" alt="">
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

            <!--THIRD PRODUCT-->

            <a href="../products/product7/product.html">
                <div class="product-container">

                    <div class="picture-container">
                        <img src="image/product7.jpg" alt="">
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
            
            <!--FOURTH PRODUCT-->

            <a href="../products/product8/product.html">
                <div class="product-container">

                    <div class="picture-container">
                        <img src="image/product8.jpg" alt="">
                    </div>

                    <div class="bottom-wrapper">
                        
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

         <!--ROW 3-->
         <div class="row">

            <!--FIRST PRODUCT-->
            <a href="../products/product9/product.html">
                <div class="product-container">

                    <div class="picture-container">
                        <img src="image/product9.jpg" alt="">
                    </div>

                    <div class="bottom-wrapper">
                        
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
            <!--SECOND PRODUCT-->
            <a href="../products/product10/product.html">
                <div class="product-container">

                    <div class="picture-container">
                        <img src="image/product10.jpg" alt="">
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

            <!--THIRD PRODUCT-->

            <a href="../products/product11/product.html">
                <div class="product-container">

                    <div class="picture-container">
                        <img src="image/product11.jpg" alt="">
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
            
            <!--FOURTH PRODUCT-->

            <a href="../products/product12/product.html">
                <div class="product-container">

                    <div class="picture-container">
                        <img src="image/product12.jpg" alt="">
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

        else if(sort == 2){

            result.innerHTML = "";

            result.innerHTML +=`
            Showing 1-12 of 12 results
        `

                productWrapper.innerHTML = "";
    
                productWrapper.innerHTML += `
    
                <!--ROW 1-->
                <div class="row">

                <!--FIRST PRODUCT-->
                <a href="../products/product5/product.html">
                    <div class="product-container">

                        <div class="picture-container">
                            <img src="image/product5.jpg" alt="">
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
                <a href="../products/product7/product.html">
                    <div class="product-container">

                        <div class="picture-container">
                            <img src="image/product7.jpg" alt="">
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

                <!--THIRD PRODUCT-->

                <a href="../products/product10/product.html">
                    <div class="product-container">

                        <div class="picture-container">
                            <img src="image/product10.jpg" alt="">
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
                
                <!--FOURTH PRODUCT-->

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
              
            </div>

        <!--ROW 2-->
            <div class="row">

                <!--FIRST PRODUCT-->

                <a href="../products/product11/product.html">
                <div class="product-container">

                    <div class="picture-container">
                        <img src="image/product11.jpg" alt="">
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
                
                <!--SECOND PRODUCT-->

                <a href="../products/product12/product.html">
                <div class="product-container">

                    <div class="picture-container">
                        <img src="image/product12.jpg" alt="">
                    </div>

                    <div class="bottom-wrapper">
                        
                        <div class="name-price">
                            <p class="product-name">Shoe Storager</p>
                            <p class="product-price">$699.00</p>
                        </div>

                        <div class="rate">
                            <img src="star.png" alt="">
                        </div>
                    </div>
                </div>
            </a>
               

                <!--THIRD PRODUCT-->

                <a href="../products/product6/product.html">
                <div class="product-container">

                    <div class="picture-container">
                        <img src="image/product6.jpg" alt="">
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
                
                <!--FOURTH PRODUCT-->

                <a href="../products/product8/product.html">
                <div class="product-container">

                    <div class="picture-container">
                        <img src="image/product8.jpg" alt="">
                    </div>

                    <div class="bottom-wrapper">
                        
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

             <!--ROW 3-->
             <div class="row">

                <!--FIRST PRODUCT-->
              
                <a href="../products/product2/product.html">
                <div class="product-container">

                    <div class="picture-container">
                        <img src="image/product2.png" alt="">
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
                
                <a href="../products/product4/product.html">
                    <div class="product-container">

                        <div class="picture-container">
                            <img src="image/product4.jpg" alt="">
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

                <a href="../products/product1/product.html">
                <div class="product-container">

                    <div class="picture-container">
                        <img src="image/product1.jpg" alt="">
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
                
                <!--FOURTH PRODUCT-->

                <a href="../products/product9/product.html">
                <div class="product-container">

                    <div class="picture-container">
                        <img src="image/product9.jpg" alt="">
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

            else if(sort == 3){

                result.innerHTML = "";

                result.innerHTML +=`
                Showing 1-12 of 12 results
            `

                productWrapper.innerHTML = "";
    
                productWrapper.innerHTML += `
                <!--ROW 1-->
                <div class="row">

                <!--FIRST PRODUCT-->

                <a href="../products/product9/product.html">
                <div class="product-container">

                    <div class="picture-container">
                        <img src="image/product9.jpg" alt="">
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



                <!--SECOND PRODUCT-->

                <a href="../products/product1/product.html">
                <div class="product-container">

                    <div class="picture-container">
                        <img src="image/product1.jpg" alt="">
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

                <!--THIRD PRODUCT-->

                <a href="../products/product4/product.html">
                    <div class="product-container">

                        <div class="picture-container">
                            <img src="image/product4.jpg" alt="">
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
                
                <!--FOURTH PRODUCT-->

                <a href="../products/product2/product.html">
                    <div class="product-container">

                        <div class="picture-container">
                            <img src="image/product2.png" alt="">
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

            </div>

        <!--ROW 2-->
            <div class="row">

                <!--FIRST PRODUCT-->

                <a href="../products/product8/product.html">
                    <div class="product-container">

                        <div class="picture-container">
                            <img src="image/product8.jpg" alt="">
                        </div>

                        <div class="bottom-wrapper">
                            
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

                <!--SECOND PRODUCT-->

                <a href="../products/product6/product.html">
                    <div class="product-container">

                        <div class="picture-container">
                            <img src="image/product6.jpg" alt="">
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

                <!--THIRD PRODUCT-->

                <a href="../products/product12/product.html">
                    <div class="product-container">

                        <div class="picture-container">
                            <img src="image/product12.jpg" alt="">
                        </div>

                        <div class="bottom-wrapper">
                            
                            <div class="name-price">
                                <p class="product-name">Shoe Storage</p>
                                <p class="product-price">699.00</p>
                            </div>

                            <div class="rate">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                    </div>
                </a>
                
                <!--FOURTH PRODUCT-->

                <a href="../products/product11/product.html">
                    <div class="product-container">

                        <div class="picture-container">
                            <img src="image/product11.jpg" alt="">
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

            </div>

             <!--ROW 3-->
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
               
                <a href="../products/product10/product.html">
                <div class="product-container">

                    <div class="picture-container">
                        <img src="image/product10.jpg" alt="">
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

                <!--THIRD PRODUCT-->

                <a href="../products/product7/product.html">
                    <div class="product-container">

                        <div class="picture-container">
                            <img src="image/product7.jpg" alt="">
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
                
                <!--FOURTH PRODUCT-->

                <a href="../products/product5/product.html">
                    <div class="product-container">

                        <div class="picture-container">
                            <img src="image/product5.jpg" alt="">
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
            </div>
                `

            }
        }

document.getElementById("search").addEventListener("click",() =>{
    productWrapper.innerHTML ="";
    productWrapper.innerHTML =`
    
    <!--ROW 1-->
    <div class="row">

    <!--FIRST PRODUCT-->
    <a href="../products/product1/product.html">
        <div class="product-container">

            <div class="picture-container">
                <img src="image/product1.jpg" alt="">
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
    <!--SECOND PRODUCT-->
    <a href="../products/product2/product.html">
        <div class="product-container">

            <div class="picture-container">
                <img src="image/product2.png" alt="">
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

    <!--THIRD PRODUCT-->

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
    
    <!--FOURTH PRODUCT-->

    <a href="../products/product4/product.html">
        <div class="product-container">

            <div class="picture-container">
                <img src="image/product4.jpg" alt="">
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
</div>

<!--ROW 2-->
<div class="row">

    <!--FIRST PRODUCT-->
    <a href="../products/product5/product.html">
        <div class="product-container">

            <div class="picture-container">
                <img src="image/product5.jpg" alt="">
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
    <a href="../products/product6/product.html">
        <div class="product-container">

            <div class="picture-container">
                <img src="image/product6.jpg" alt="">
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

    <!--THIRD PRODUCT-->

    <a href="../products/product7/product.html">
        <div class="product-container">

            <div class="picture-container">
                <img src="image/product7.jpg" alt="">
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
    
    <!--FOURTH PRODUCT-->

    <a href="../products/product8/product.html">
        <div class="product-container">

            <div class="picture-container">
                <img src="image/product8.jpg" alt="">
            </div>

            <div class="bottom-wrapper">
                
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

 <!--ROW 3-->
 <div class="row">

    <!--FIRST PRODUCT-->
    <a href="../products/product9/product.html">
        <div class="product-container">

            <div class="picture-container">
                <img src="image/product9.jpg" alt="">
            </div>

            <div class="bottom-wrapper">
                
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
    <!--SECOND PRODUCT-->
    <a href="../products/product10/product.html">
        <div class="product-container">

            <div class="picture-container">
                <img src="image/product10.jpg" alt="">
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

    <!--THIRD PRODUCT-->

    <a href="../products/product11/product.html">
        <div class="product-container">

            <div class="picture-container">
                <img src="image/product11.jpg" alt="">
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
    
    <!--FOURTH PRODUCT-->

    <a href="../products/product12/product.html">
        <div class="product-container">

            <div class="picture-container">
                <img src="image/product12.jpg" alt="">
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


    `;

    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    console.log(searchInput);
    let countProd = 0;
    productWrapper.innerHTML ="";
    productWrapper.innerHTML +=`
    <div class="row">
    
    </div>

    <div class="row">
    
    </div>

    <div class="row">
    
    </div>

    <div class="row">
    
    </div>
    `;
    for (let i = 0; i < elements.length; i++) {
    let rowNum = parseInt(countProd/ 4);

console.log(countProd);
console.log (rowNum);
    let row = document.querySelectorAll('.row');
        if(elements[i].innerText.includes(searchInput)){

            if(i == 0){
                row[rowNum].innerHTML += `
                <a href="../products/product1/product.html">
                <div class="product-container">

                    <div class="picture-container">
                        <img src="image/product1.jpg" alt="">
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
                `;

                countProd ++;
            }

            else if(i == 1){

                row[rowNum].innerHTML += `
                <a href="../products/product2/product.html">
                <div class="product-container">

                    <div class="picture-container">
                        <img src="image/product2.png" alt="">
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
                `;
                countProd ++;
            }

            else if(i == 2){

                row[rowNum].innerHTML += `
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
                `;
                countProd ++;
            }

            else if(i == 3){

                row[rowNum].innerHTML += `
                <a href="../products/product4/product.html">
                <div class="product-container">

                    <div class="picture-container">
                        <img src="image/product4.jpg" alt="">
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
                `;
                countProd ++;
            }

            else if(i == 4){

                row[rowNum].innerHTML += `
                <a href="../products/product5/product.html">
                <div class="product-container">

                    <div class="picture-container">
                        <img src="image/product5.jpg" alt="">
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
                `;
                countProd ++;
            }

            else if(i == 5){

                row[rowNum].innerHTML += `
                <a href="../products/product6/product.html">
                <div class="product-container">

                    <div class="picture-container">
                        <img src="image/product6.jpg" alt="">
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
                `;
                countProd ++;
            }

            else if(i == 6){

                row[rowNum].innerHTML += `
                <a href="../products/product7/product.html">
                <div class="product-container">

                    <div class="picture-container">
                        <img src="image/product7.jpg" alt="">
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
                `;
                countProd ++;
            }

            else if(i == 7){

                row[rowNum].innerHTML += `
                <a href="../products/product8/product.html">
                <div class="product-container">

                    <div class="picture-container">
                        <img src="image/product8.jpg" alt="">
                    </div>

                    <div class="bottom-wrapper">
                        
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
                `;
                countProd ++;
            }

            else if(i == 8){

                row[rowNum].innerHTML += `
                <a href="../products/product9/product.html">
                <div class="product-container">

                    <div class="picture-container">
                        <img src="image/product9.jpg" alt="">
                    </div>

                    <div class="bottom-wrapper">
                        
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
                `;
                countProd ++;
            }
            
            else if(i == 9){

                row[rowNum].innerHTML += `
                <a href="../products/product10/product.html">
                <div class="product-container">

                    <div class="picture-container">
                        <img src="image/product10.jpg" alt="">
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
                `;
                countProd ++;
            }

            else if(i == 10){

                row[rowNum].innerHTML += `

                <a href="../products/product11/product.html">
                <div class="product-container">

                    <div class="picture-container">
                        <img src="image/product11.jpg" alt="">
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
                `;
                countProd ++;
            }

            else if(i == 11){

                row[rowNum].innerHTML += `

  <a href="../products/product12/product.html">
                        <div class="product-container">

                            <div class="picture-container">
                                <img src="image/product12.jpg" alt="">
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
                `;
                countProd ++;
            }


            if(countProd == 1){
                row[0].style.width = "300px";
            }
        
            else if(countProd == 2){
                row[0].style.width = "550px";
            }
        
            else if(countProd == 3){
                row[0].style.width = "850px";
            }

            else if(countProd == 4){
                row[0].style.width = "1152px";
            }
        
            else if(countProd == 5){
                row[1].style.width = "300px";
            }
        
            else if(countProd == 6){
                row[1].style.width = "550px";
            }
        
            else if(countProd == 7){
                row[1].style.width = "850px";
            }

            else if(countProd == 8){
                row[1].style.width = "1152px";
            }
        
            else if(countProd == 9){
                row[2].style.width = "300px";
            }
        
            else if(countProd == 10){
                row[2].style.width = "550px";
            }
        
            else if(countProd == 11){
                row[2].style.width = "850px";
            }

            else if(countProd == 12){
                row[2].style.width = "1152px";
            }

        }
        
        result.innerHTML = "";

        result.innerHTML +=`
        Showing 1-${countProd} of ${countProd} results
    `

    }
})

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