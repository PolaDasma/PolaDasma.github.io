
/*categories part*/
const pageNum = document.querySelectorAll('.page-num');
const container = document.querySelector('.product-container');
const result = document.querySelector('.num-result');
const categories = document.querySelectorAll('.category');
let page = document.querySelector(".page");


for (let i = 0; i < categories.length; i++) {



    categories[i].addEventListener("click", ()=>{
        page.style.display = "flex";

        if(i==0){
            container.innerHTML="";
            result.innerHTML="";
            result.innerHTML +=`
                Showing 1-2 of 2 results
            `
            
            container.innerHTML+= `
            <!--PRODUCT 1-->
            <div class="main-prod">
            <a href="../products/product5/product.html">
                    <div class="product-picture">
                        <img src="image/product5.jpg" alt="">
                    </div>
                </a>
                    <div class="info-container">

                        <div class="top-wrapper">
                            <div class="name-price">
                                <p class="product-name">Geometric Cage Pendant Light</p>
                                <p class="product-price">$57.00</p>
                            </div>

                            <div class="rate-container">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                        <p class="description">
                        A geometric cage pendant light is a stylish and modern lighting fixture that features a unique geometric design in the form of a cage or open framework around the light source. The cage is typically made from metal, such as iron or brass, and may have a variety of shapes and patterns, such as triangles, squares, or hexagons.                        </p>

                    </div>
                </div>

             <!--PRODUCT 2-->
            <div class="main-prod">
            <a href="../products/product6/product.html">
                    <div class="product-picture">
                        <img src="image/product6.jpg" alt="">
                    </div>
                </a>
                    <div class="info-container">

                        <div class="top-wrapper">
                            <div class="name-price">
                                <p class="product-name">Mahogany Boomerang Coffee Table</p>
                                <p class="product-price">$1149.00</p>
                            </div>

                            <div class="rate-container">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                        <p class="description">
                        A raindrop multiple hanging lamp is a stunning lighting fixture that features a cluster of individual pendants arranged in a descending, raindrop-like pattern. Each pendant typically consists of a glass shade in the shape of a teardrop or raindrop, which is suspended from a cord or cable.
                        </p>

                    </div>
                </div>
            `
        }

        else if(i==1){
            console.log("clicked");

            container.innerHTML="";
            result.innerHTML="";
            result.innerHTML +=`
            Showing 1-3 of 3 results
            `
            
            container.innerHTML+= `
            <!--PRODUCT 1-->
            <div class="main-prod">
            <a href="../products/product2/product.html">
                    <div class="product-picture">
                        <img src="image/product2.png" alt="">
                    </div>
                </a>
                    <div class="info-container">

                        <div class="top-wrapper">
                            <div class="name-price">
                                <p class="product-name">Mahogany Boomerang Coffee Table</p>
                                <p class="product-price">$1149.00</p>
                            </div>

                            <div class="rate-container">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                        <p class="description">
                        Mahogany coffee table is a beautiful and classic piece of furniture that is sure to add elegance and warmth to any room. The table is crafted from high-quality mahogany wood, which is known for its rich, deep color and durability.
                        <p>

                    </div>
                </div>

             <!--PRODUCT 2-->
            <div class="main-prod">
            <a href="../products/product4/product.html">
                    <div class="product-picture">
                        <img src="image/product4.jpg" alt="">
                    </div>
                </a>
                    <div class="info-container">

                        <div class="top-wrapper">
                            <div class="name-price">
                                <p class="product-name">Sintered Stone Top Dining Table</p>
                                <p class="product-price">$1826.00</p>
                            </div>

                            <div class="rate-container">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                        <p class="description">
                        A sintered stone top dining table is a modern and luxurious addition to any dining room. Sintered stone is a highly durable and strong material that is made by compressing natural minerals and pigments at high temperatures and pressure, resulting in a solid and non-porous surface that is resistant to scratches, stains, and heat.
                        </p>

                    </div>
                </div>

                <!--PRODUCT 3-->
                <div class="main-prod">
                <a href="../products/product1/product.html">
                        <div class="product-picture">
                            <img src="image/product11.jpg" alt="">
                        </div>
                    </a>
                        <div class="info-container">
    
                            <div class="top-wrapper">
                                <div class="name-price">
                                    <p class="product-name">Office Desk</p>
                                    <p class="product-price">$299.00</p>
                                </div>
    
                                <div class="rate-container">
                                    <img src="star.png" alt="">
                                </div>
                            </div>
                            <p class="description">
                            Introducing our sleek and stylish Monochrome Office Desk, designed for the modern professional who values both form and function. This minimalist desk features a clean and sophisticated design, with a monochrome color scheme that adds a touch of elegance to any office or workspace.                            </p>
    
                        </div>
                    </div>
            `
        }

        else if(i==2){

            container.innerHTML="";
            result.innerHTML="";
            result.innerHTML +=`
                Showing 1-1 of 1 results
            `

            container.innerHTML+= `

            <!--PRODUCT 1-->
            <div class="main-prod">
            <a href="../products/product1/product.html">
                    <div class="product-picture">
                        <img src="image/product1.jpg" alt="">
                    </div>
                </a>
                    <div class="info-container">

                        <div class="top-wrapper">
                            <div class="name-price">
                                <p class="product-name">Triple Nordic Corner Sofa</p>
                                <p class="product-price">$1290.00</p>
                            </div>

                            <div class="rate-container">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                        <p class="description">
                        Introducing the stylish and functional Drawer Dresser, the perfect addition to any bedroom or living space! This beautifully designed dresser features a sturdy construction with a smooth finish that adds a touch of elegance to any room.
                    </div>
                </div>  
            `
        }

        else if(i==3){

            container.innerHTML="";
            result.innerHTML="";
            result.innerHTML +=`
                Showing 1-3 of 3 results
            `

            container.innerHTML+= `

            <!--PRODUCT 1-->
            <div class="main-prod">
            <a href="../products/product10/product.html">
                    <div class="product-picture">
                        <img src="image/product10.jpg" alt="">
                    </div>
                </a>
                    <div class="info-container">

                        <div class="top-wrapper">
                            <div class="name-price">
                                <p class="product-name">Partition Shelves</p>
                                <p class="product-price">$299.00</p>
                            </div>

                            <div class="rate-container">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                        <p class="description">
                        Introducing our innovative Partition Shelves, the perfect solution for creating additional storage space and privacy in your workspace. Our Partition Shelves are designed to attach easily to any standard office partition or divider, providing a customizable storage solution that can be tailored to your specific needs.                    </div>
                </div>  

                <!--PRODUCT 2-->
                <div class="main-prod">
                <a href="../products/product1/product.html">
                        <div class="product-picture">
                            <img src="image/product11.jpg" alt="">
                        </div>
                    </a>
                        <div class="info-container">
    
                            <div class="top-wrapper">
                                <div class="name-price">
                                    <p class="product-name">Drawer Dresser</p>
                                    <p class="product-price">$599.00</p>
                                </div>
    
                                <div class="rate-container">
                                    <img src="star.png" alt="">
                                </div>
                            </div>
                            <p class="description">
                            Introducing the stylish and functional Drawer Dresser, the perfect addition to any bedroom or living space! This beautifully designed dresser features a sturdy construction with a smooth finish that adds a touch of elegance to any room.                    
                            </p>
                            </div> 
                    </div>
                        

                             <!--PRODUCT 3-->
                            <div class="main-prod">
                            <a href="../products/product12/product.html">
                                    <div class="product-picture">
                                        <img src="image/product12.jpg" alt="">
                                    </div>
                                </a>
                                    <div class="info-container">
                
                                        <div class="top-wrapper">
                                            <div class="name-price">
                                                <p class="product-name">Shoe Storage</p>
                                                <p class="product-price">$699.00</p>
                                            </div>
                
                                            <div class="rate-container">
                                                <img src="star.png" alt="">
                                            </div>
                                        </div>
                                        <p class="description">
                                        Introducing our stylish and practical shoe storage solution, designed to keep your footwear organized and easily accessible. Made from high-quality materials, this storage solution is built to last and can hold a large number of shoes, depending on the size and style.                                            </p>
                                        </div>   
                            </div>
                                      
            `
        }

        else if(i==4){

            container.innerHTML="";
            result.innerHTML="";
            result.innerHTML +=`
                Showing 1 of 1 results
            `

            container.innerHTML+= `

            <!--PRODUCT 1-->
            <div class="main-prod">
            <a href="../products/product7/product.html">
                    <div class="product-picture">
                        <img src="image/product7.jpg" alt="">
                    </div>
                </a>
                    <div class="info-container">

                        <div class="top-wrapper">
                            <div class="name-price">
                                <p class="product-name">LED Full Length Lighted Mirror</p>
                                <p class="product-price">$282.00</p>
                            </div>

                            <div class="rate-container">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                        <p class="description">
                        A white bouclé armchair typically features a plush, textured upholstery made from a soft, looped yarn that creates a cozy and inviting feel. The bouclé fabric is usually made from natural fibers like wool, which adds a luxurious touch to the chair.                </div>  
                </div>
                                    
            `
        }

        else if(i==5){

            container.innerHTML="";
            result.innerHTML="";
            result.innerHTML +=`
            Showing 1-2 of 2 results
            `

            container.innerHTML+= `

            <!--PRODUCT 1-->
            <div class="main-prod">
            <a href="../products/product3/product.html">
                    <div class="product-picture">
                        <img src="image/product3.jpg" alt="">
                    </div>
                </a>
                    <div class="info-container">

                        <div class="top-wrapper">
                            <div class="name-price">
                                <p class="product-name">Nordic Bed</p>
                                <p class="product-price">$477.00</p>
                            </div>

                            <div class="rate-container">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                        <p class="description">
                        Nordic queen size beds are known for their simplicity and understated elegance, often featuring natural wood finishes that highlight the beauty of the wood grain. They are also often paired with crisp white bedding and light-colored accents to create a bright and airy atmosphere in the bedroom.                
                        </p>
                        </div>
                        </div>


                        <!--PRODUCT 2-->
                        <div class="main-prod">
                        <a href="../products/product8/product.html">
                                <div class="product-picture">
                                    <img src="image/product8.jpg" alt="">
                                </div>
                            </a>
                                <div class="info-container">
            
                                    <div class="top-wrapper">
                                        <div class="name-price">
                                            <p class="product-name">Monochrome Bedroom</p>
                                            <p class="product-price">$852.00</p>
                                        </div>
            
                                        <div class="rate-container">
                                            <img src="star.png" alt="">
                                        </div>
                                    </div>
                                    <p class="description">
                                    A monochrome bedroom is a room that is decorated using only shades of one color, typically black, white, or gray. The goal of a monochrome bedroom is to create a serene, minimalist space that is both stylish and functional.                                    </p>
                                    </div>
                                    </div>

                                    
            `
        }
        



    });

    
}

/*page*/
for (let i = 0; i < pageNum.length; i++) {
    pageNum[i].addEventListener("click", ()=>{

        if(i==0){
            container.innerHTML="";
            result.innerHTML="";
            result.innerHTML +=`
                Showing 1-5 of 12 results
            `
            
            container.innerHTML+= `
            <!--PRODUCT 1-->
            <div class="main-prod">
            <a href="../products/product1/product.html">
                    <div class="product-picture">
                        <img src="image/product1.jpg" alt="">
                    </div>
                </a>
                    <div class="info-container">

                        <div class="top-wrapper">
                            <div class="name-price">
                                <p class="product-name">Triple Nordic Corner Sofa</p>
                                <p class="product-price">1234.00</p>
                            </div>

                            <div class="rate-container">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                        <p class="description">
                            Get a corner with an attractive modern design, and a suitable size, to immerse you in comfort and happiness with your family, and to enjoy gathering times with your loved ones.
                        </p>

                    </div>
                </div>

             <!--PRODUCT 2-->
            <div class="main-prod">
            <a href="../products/product2/product.html">
                    <div class="product-picture">
                        <img src="image/product2.png" alt="">
                    </div>
                </a>
                    <div class="info-container">

                        <div class="top-wrapper">
                            <div class="name-price">
                                <p class="product-name">Mahogany Boomerang Coffee Table</p>
                                <p class="product-price">$1149.00</p>
                            </div>

                            <div class="rate-container">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                        <p class="description">
                            Mahogany coffee table is a beautiful and classic piece of furniture that is sure to add elegance and warmth to any room. The table is crafted from high-quality mahogany wood, which is known for its rich, deep color and durability.
                        </p>

                    </div>
                </div>

            <!--PRODUCT 3-->
            <div class="main-prod">
            <a href="../products/product3/product.html">
                    <div class="product-picture">
                        <img src="image/product3.jpg" alt="">
                    </div>
                </a>
                    <div class="info-container">

                        <div class="top-wrapper">
                            <div class="name-price">
                                <p class="product-name">Nordic Bed</p>
                                <p class="product-price">$477.00</p>
                            </div>

                            <div class="rate-container">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                        <p class="description">
                            Nordic queen size beds are known for their simplicity and understated elegance, often featuring natural wood finishes that highlight the beauty of the wood grain. They are also often paired with crisp white bedding and light-colored accents to create a bright and airy atmosphere in the bedroom.
                        </p>

                    </div>
                </div>

             <!--PRODUCT 4-->
            <div class="main-prod">
            <a href="../products/product4/product.html">
                    <div class="product-picture">
                        <img src="image/product4.jpg" alt="">
                    </div>
                </a>
                    <div class="info-container">

                        <div class="top-wrapper">
                            <div class="name-price">
                                <p class="product-name">Sintered Stone Top Dining Table</p>
                                <p class="product-price">$1826.00</p>
                            </div>

                            <div class="rate-container">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                        <p class="description">
                            A sintered stone top dining table is a modern and luxurious addition to any dining room. Sintered stone is a highly durable and strong material that is made by compressing natural minerals and pigments at high temperatures and pressure, resulting in a solid and non-porous surface that is resistant to scratches, stains, and heat.
                        </p>

                    </div>
                </div>

             <!--PRODUCT 5-->
            <div class="main-prod">
            <a href="../products/product5/product.html">
                    <div class="product-picture">
                        <img src="image/product5.jpg" alt="">
                    </div>
                </a>
                    <div class="info-container">

                        <div class="top-wrapper">
                            <div class="name-price">
                                <p class="product-name">Geometric Cage Pendant Light</p>
                                <p class="product-price">$57.00</p>
                            </div>

                            <div class="rate-container">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                        <p class="description">
                            A sintered stone top dining table is a modern and luxurious addition to any dining room. Sintered stone is a highly durable and strong material that is made by compressing natural minerals and pigments at high temperatures and pressure, resulting in a solid and non-porous surface that is resistant to scratches, stains, and heat.
                        </p>

                    </div>
                </div>
            `
        }

        else if(i==1){
            console.log("clicked");

            container.innerHTML="";
            result.innerHTML="";
            result.innerHTML +=`
                Showing 6-10 of 12 results
            `

            container.innerHTML+= `

            <!--PRODUCT 1-->
            <div class="main-prod">
            <a href="../products/product6/product.html">
                    <div class="product-picture">
                        <img src="image/product6.jpg" alt="">
                    </div>
                </a>
                    <div class="info-container">

                        <div class="top-wrapper">
                            <div class="name-price">
                                <p class="product-name">Raindrop Multiple Hanging Lamp</p>
                                <p class="product-price">$809.00</p>
                            </div>

                            <div class="rate-container">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                        <p class="description">
                        A raindrop multiple hanging lamp is a stunning lighting fixture that features a cluster of individual pendants arranged in a descending, raindrop-like pattern. Each pendant typically consists of a glass shade in the shape of a teardrop or raindrop, which is suspended from a cord or cable.                        </p>

                    </div>
                </div>

             <!--PRODUCT 2-->
            <div class="main-prod">
            <a href="../products/product7/product.html">
                    <div class="product-picture">
                        <img src="image/product7.jpg" alt="">
                    </div>
                </a>
                    <div class="info-container">

                        <div class="top-wrapper">
                            <div class="name-price">
                                <p class="product-name">LED Full Length Lighted Mirror</p>
                                <p class="product-price">$282.00</p>
                            </div>

                            <div class="rate-container">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                        <p class="description">
                        A white bouclé armchair typically features a plush, textured upholstery made from a soft, looped yarn that creates a cozy and inviting feel. The bouclé fabric is usually made from natural fibers like wool, which adds a luxurious touch to the chair.                        </p>

                    </div>
                </div>

            <!--PRODUCT 3-->
            <div class="main-prod">
            <a href="../products/product1/product8.html">
                    <div class="product-picture">
                        <img src="image/product8.jpg" alt="">
                    </div>
                </a>
                    <div class="info-container">

                        <div class="top-wrapper">
                            <div class="name-price">
                                <p class="product-name">Monochrome Bedroom</p>
                                <p class="product-price">$852.00</p>
                            </div>

                            <div class="rate-container">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                        <p class="description">
                        A monochrome bedroom is a room that is decorated using only shades of one color, typically black, white, or gray. The goal of a monochrome bedroom is to create a serene, minimalist space that is both stylish and functional.                        </p>

                    </div>
                </div>

             <!--PRODUCT 4-->
            <div class="main-prod">
            <a href="../products/product9/product.html">
                    <div class="product-picture">
                        <img src="image/product9.jpg" alt="">
                    </div>
                </a>
                    <div class="info-container">

                        <div class="top-wrapper">
                            <div class="name-price">
                                <p class="product-name">Office Desk</p>
                                <p class="product-price">$1299.00</p>
                            </div>

                            <div class="rate-container">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                        <p class="description">
                        Introducing our sleek and stylish Monochrome Office Desk, designed for the modern professional who values both form and function. This minimalist desk features a clean and sophisticated design, with a monochrome color scheme that adds a touch of elegance to any office or workspace.                        </p>

                    </div>
                </div>

             <!--PRODUCT 5-->
            <div class="main-prod">
            <a href="../products/product10/product.html">
                    <div class="product-picture">
                        <img src="image/product10.jpg" alt="">
                    </div>
                </a>
                    <div class="info-container">

                        <div class="top-wrapper">
                            <div class="name-price">
                                <p class="product-name">Partition Shelves</p>
                                <p class="product-price">$299.00</p>
                            </div>

                            <div class="rate-container">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                        <p class="description">
                        Introducing our innovative Partition Shelves, the perfect solution for creating additional storage space and privacy in your workspace. Our Partition Shelves are designed to attach easily to any standard office partition or divider, providing a customizable storage solution that can be tailored to your specific needs.                        </p>

                    </div>
                </div>
            
            `
        }

        else if(i==2){

            container.innerHTML="";
            result.innerHTML="";
            result.innerHTML +=`
                Showing 11-12 of 12 results
            `

            container.innerHTML+= `

            <!--PRODUCT 1-->
            <div class="main-prod">
            <a href="../products/product11/product.html">
                    <div class="product-picture">
                        <img src="image/product11.jpg" alt="">
                    </div>
                </a>
                    <div class="info-container">

                        <div class="top-wrapper">
                            <div class="name-price">
                                <p class="product-name">Drawer Dresser</p>
                                <p class="product-price">$599.00</p>
                            </div>

                            <div class="rate-container">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                        <p class="description">
                        Introducing the stylish and functional Drawer Dresser, the perfect addition to any bedroom or living space! This beautifully designed dresser features a sturdy construction with a smooth finish that adds a touch of elegance to any room.
                    </div>
                </div>

             <!--PRODUCT 2-->
            <div class="main-prod">
            <a href="../products/product12/product.html">
                    <div class="product-picture">
                        <img src="image/product12.jpg" alt="">
                    </div>
                </a>
                    <div class="info-container">

                        <div class="top-wrapper">
                            <div class="name-price">
                                <p class="product-name">Shoe Storage</p>
                                <p class="product-price">$699.00</p>
                            </div>

                            <div class="rate-container">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                        <p class="description">
                        Introducing our stylish and practical shoe storage solution, designed to keep your footwear organized and easily accessible. Made from high-quality materials, this storage solution is built to last and can hold a large number of shoes, depending on the size and style.
                    </div>
                </div>
            
            `
        }

        else if(i==3){

            container.innerHTML="";
            result.innerHTML="";
            result.innerHTML +=`
                Showing 11-12 of 12 results
            `

            container.innerHTML+= `

            <!--PRODUCT 1-->
            <div class="main-prod">
            <a href="../products/product11/product.html">
                    <div class="product-picture">
                        <img src="image/product11.jpg" alt="">
                    </div>
                </a>
                    <div class="info-container">

                        <div class="top-wrapper">
                            <div class="name-price">
                                <p class="product-name">Drawer Dresser</p>
                                <p class="product-price">$599.00</p>
                            </div>

                            <div class="rate-container">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                        <p class="description">
                        Introducing the stylish and functional Drawer Dresser, the perfect addition to any bedroom or living space! This beautifully designed dresser features a sturdy construction with a smooth finish that adds a touch of elegance to any room.
                    </div>
                </div>

             <!--PRODUCT 2-->
            <div class="main-prod">
            <a href="../products/product12/product.html">
                    <div class="product-picture">
                        <img src="image/product12.jpg" alt="">
                    </div>
                </a>
                    <div class="info-container">

                        <div class="top-wrapper">
                            <div class="name-price">
                                <p class="product-name">Shoe Storage</p>
                                <p class="product-price">$699.00</p>
                            </div>

                            <div class="rate-container">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                        <p class="description">
                        Introducing our stylish and practical shoe storage solution, designed to keep your footwear organized and easily accessible. Made from high-quality materials, this storage solution is built to last and can hold a large number of shoes, depending on the size and style.
                    </div>
                </div>
            
            `
        }



    });
    
}


/*sort*/
function getSelectedValue(){
    const sort = document.getElementById("sort").value;
    const container = document.querySelector(".product-container");

    if(sort == 1){

        result.innerHTML="";
        result.innerHTML +=`
            Showing 1-5 of 12 results
        `;
      for (let i = 0; i < pageNum.length; i++) {
        page.style.display = "flex";
        
        container.innerHTML= "";

        container.innerHTML = `
        
        <!--PRODUCT 1-->
        <div class="main-prod">
        <a href="../products/product1/product.html">
                <div class="product-picture">
                    <img src="image/product1.jpg" alt="">
                </div>
            </a>
                <div class="info-container">

                    <div class="top-wrapper">
                        <div class="name-price">
                            <p class="product-name">Triple Nordic Corner Sofa</p>
                            <p class="product-price">1234.00</p>
                        </div>

                        <div class="rate-container">
                            <img src="star.png" alt="">
                        </div>
                    </div>
                    <p class="description">
                        Get a corner with an attractive modern design, and a suitable size, to immerse you in comfort and happiness with your family, and to enjoy gathering times with your loved ones.
                    </p>

                </div>
            </div>

         <!--PRODUCT 2-->
        <div class="main-prod">
        <a href="../products/product2/product.html">
                <div class="product-picture">
                    <img src="image/product2.png" alt="">
                </div>
            </a>
                <div class="info-container">

                    <div class="top-wrapper">
                        <div class="name-price">
                            <p class="product-name">Mahogany Boomerang Coffee Table</p>
                            <p class="product-price">$1149.00</p>
                        </div>

                        <div class="rate-container">
                            <img src="star.png" alt="">
                        </div>
                    </div>
                    <p class="description">
                        Mahogany coffee table is a beautiful and classic piece of furniture that is sure to add elegance and warmth to any room. The table is crafted from high-quality mahogany wood, which is known for its rich, deep color and durability.
                    </p>

                </div>
            </div>

        <!--PRODUCT 3-->
        <div class="main-prod">
        <a href="../products/product3/product.html">
                <div class="product-picture">
                    <img src="image/product3.jpg" alt="">
                </div>
            </a>
                <div class="info-container">

                    <div class="top-wrapper">
                        <div class="name-price">
                            <p class="product-name">Nordic Bed</p>
                            <p class="product-price">$477.00</p>
                        </div>

                        <div class="rate-container">
                            <img src="star.png" alt="">
                        </div>
                    </div>
                    <p class="description">
                        Nordic queen size beds are known for their simplicity and understated elegance, often featuring natural wood finishes that highlight the beauty of the wood grain. They are also often paired with crisp white bedding and light-colored accents to create a bright and airy atmosphere in the bedroom.
                    </p>

                </div>
            </div>

         <!--PRODUCT 4-->
        <div class="main-prod">
        <a href="../products/product4/product.html">
                <div class="product-picture">
                    <img src="image/product4.jpg" alt="">
                </div>
            </a>
                <div class="info-container">

                    <div class="top-wrapper">
                        <div class="name-price">
                            <p class="product-name">Sintered Stone Top Dining Table</p>
                            <p class="product-price">$1826.00</p>
                        </div>

                        <div class="rate-container">
                            <img src="star.png" alt="">
                        </div>
                    </div>
                    <p class="description">
                        A sintered stone top dining table is a modern and luxurious addition to any dining room. Sintered stone is a highly durable and strong material that is made by compressing natural minerals and pigments at high temperatures and pressure, resulting in a solid and non-porous surface that is resistant to scratches, stains, and heat.
                    </p>

                </div>
            </div>

         <!--PRODUCT 5-->
        <div class="main-prod">
        <a href="../products/product5/product.html">
                <div class="product-picture">
                    <img src="image/product5.jpg" alt="">
                </div>
            </a>
                <div class="info-container">

                    <div class="top-wrapper">
                        <div class="name-price">
                            <p class="product-name">Geometric Cage Pendant Light</p>
                            <p class="product-price">$57.00</p>
                        </div>

                        <div class="rate-container">
                            <img src="star.png" alt="">
                        </div>
                    </div>
                    <p class="description">
                        A sintered stone top dining table is a modern and luxurious addition to any dining room. Sintered stone is a highly durable and strong material that is made by compressing natural minerals and pigments at high temperatures and pressure, resulting in a solid and non-porous surface that is resistant to scratches, stains, and heat.
                    </p>

                </div>
            </div>
        
        `;

        pageNum[i].addEventListener("click", ()=>{

            if(i==0){
                container.innerHTML="";
                result.innerHTML="";
                result.innerHTML +=`
                    Showing 1-5 of 12 results
                `
                
                container.innerHTML+= `
                <!--PRODUCT 1-->
                <div class="main-prod">
                <a href="../products/product1/product.html">
                        <div class="product-picture">
                            <img src="image/product1.jpg" alt="">
                        </div>
                    </a>
                        <div class="info-container">
    
                            <div class="top-wrapper">
                                <div class="name-price">
                                    <p class="product-name">Triple Nordic Corner Sofa</p>
                                    <p class="product-price">$1290.00</p>
                                </div>
    
                                <div class="rate-container">
                                    <img src="star.png" alt="">
                                </div>
                            </div>
                            <p class="description">
                                Get a corner with an attractive modern design, and a suitable size, to immerse you in comfort and happiness with your family, and to enjoy gathering times with your loved ones.
                            </p>
    
                        </div>
                    </div>
    
                 <!--PRODUCT 2-->
                <div class="main-prod">
                <a href="../products/product2/product.html">
                        <div class="product-picture">
                            <img src="image/product2.png" alt="">
                        </div>
                    </a>
                        <div class="info-container">
    
                            <div class="top-wrapper">
                                <div class="name-price">
                                    <p class="product-name">Mahogany Boomerang Coffee Table</p>
                                    <p class="product-price">$1149.00</p>
                                </div>
    
                                <div class="rate-container">
                                    <img src="star.png" alt="">
                                </div>
                            </div>
                            <p class="description">
                                Mahogany coffee table is a beautiful and classic piece of furniture that is sure to add elegance and warmth to any room. The table is crafted from high-quality mahogany wood, which is known for its rich, deep color and durability.
                            </p>
    
                        </div>
                    </div>
    
                <!--PRODUCT 3-->
                <div class="main-prod">
                <a href="../products/product3/product.html">
                        <div class="product-picture">
                            <img src="image/product3.jpg" alt="">
                        </div>
                    </a>
                        <div class="info-container">
    
                            <div class="top-wrapper">
                                <div class="name-price">
                                    <p class="product-name">Nordic Bed</p>
                                    <p class="product-price">$477.00</p>
                                </div>
    
                                <div class="rate-container">
                                    <img src="star.png" alt="">
                                </div>
                            </div>
                            <p class="description">
                                Nordic queen size beds are known for their simplicity and understated elegance, often featuring natural wood finishes that highlight the beauty of the wood grain. They are also often paired with crisp white bedding and light-colored accents to create a bright and airy atmosphere in the bedroom.
                            </p>
    
                        </div>
                    </div>
    
                 <!--PRODUCT 4-->
                <div class="main-prod">
                <a href="../products/product4/product.html">
                        <div class="product-picture">
                            <img src="image/product4.jpg" alt="">
                        </div>
                    </a>
                        <div class="info-container">
    
                            <div class="top-wrapper">
                                <div class="name-price">
                                    <p class="product-name">Sintered Stone Top Dining Table</p>
                                    <p class="product-price">$1826.00</p>
                                </div>
    
                                <div class="rate-container">
                                    <img src="star.png" alt="">
                                </div>
                            </div>
                            <p class="description">
                                A sintered stone top dining table is a modern and luxurious addition to any dining room. Sintered stone is a highly durable and strong material that is made by compressing natural minerals and pigments at high temperatures and pressure, resulting in a solid and non-porous surface that is resistant to scratches, stains, and heat.
                            </p>
    
                        </div>
                    </div>
    
                 <!--PRODUCT 5-->
                <div class="main-prod">
                <a href="../products/product5/product.html">
                        <div class="product-picture">
                            <img src="image/product5.jpg" alt="">
                        </div>
                    </a>
                        <div class="info-container">
    
                            <div class="top-wrapper">
                                <div class="name-price">
                                    <p class="product-name">Geometric Cage Pendant Light</p>
                                    <p class="product-price">$57.00</p>
                                </div>
    
                                <div class="rate-container">
                                    <img src="star.png" alt="">
                                </div>
                            </div>
                            <p class="description">
                                A sintered stone top dining table is a modern and luxurious addition to any dining room. Sintered stone is a highly durable and strong material that is made by compressing natural minerals and pigments at high temperatures and pressure, resulting in a solid and non-porous surface that is resistant to scratches, stains, and heat.
                            </p>
    
                        </div>
                    </div>
                `
            }
    
            else if(i==1){
                console.log("clicked");
    
                container.innerHTML="";
                result.innerHTML="";
                result.innerHTML +=`
                    Showing 6-10 of 12 results
                `
    
                container.innerHTML+= `
    
                <!--PRODUCT 1-->
                <div class="main-prod">
                <a href="../products/product6/product.html">
                        <div class="product-picture">
                            <img src="image/product6.jpg" alt="">
                        </div>
                    </a>
                        <div class="info-container">
    
                            <div class="top-wrapper">
                                <div class="name-price">
                                    <p class="product-name">Raindrop Multiple Hanging Lamp</p>
                                    <p class="product-price">$809.00</p>
                                </div>
    
                                <div class="rate-container">
                                    <img src="star.png" alt="">
                                </div>
                            </div>
                            <p class="description">
                            A raindrop multiple hanging lamp is a stunning lighting fixture that features a cluster of individual pendants arranged in a descending, raindrop-like pattern. Each pendant typically consists of a glass shade in the shape of a teardrop or raindrop, which is suspended from a cord or cable.                        </p>
    
                        </div>
                    </div>
    
                 <!--PRODUCT 2-->
                <div class="main-prod">
                <a href="../products/product7/product.html">
                        <div class="product-picture">
                            <img src="image/product7.jpg" alt="">
                        </div>
                    </a>
                        <div class="info-container">
    
                            <div class="top-wrapper">
                                <div class="name-price">
                                    <p class="product-name">LED Full Length Lighted Mirror</p>
                                    <p class="product-price">$282.00</p>
                                </div>
    
                                <div class="rate-container">
                                    <img src="star.png" alt="">
                                </div>
                            </div>
                            <p class="description">
                            A white bouclé armchair typically features a plush, textured upholstery made from a soft, looped yarn that creates a cozy and inviting feel. The bouclé fabric is usually made from natural fibers like wool, which adds a luxurious touch to the chair.                        </p>
    
                        </div>
                    </div>
    
                <!--PRODUCT 3-->
                <div class="main-prod">
                <a href="../products/product1/product8.html">
                        <div class="product-picture">
                            <img src="image/product8.jpg" alt="">
                        </div>
                    </a>
                        <div class="info-container">
    
                            <div class="top-wrapper">
                                <div class="name-price">
                                    <p class="product-name">Monochrome Bedroom</p>
                                    <p class="product-price">$852.00</p>
                                </div>
    
                                <div class="rate-container">
                                    <img src="star.png" alt="">
                                </div>
                            </div>
                            <p class="description">
                            A monochrome bedroom is a room that is decorated using only shades of one color, typically black, white, or gray. The goal of a monochrome bedroom is to create a serene, minimalist space that is both stylish and functional.                        </p>
    
                        </div>
                    </div>
    
                 <!--PRODUCT 4-->
                <div class="main-prod">
                <a href="../products/product9/product.html">
                        <div class="product-picture">
                            <img src="image/product9.jpg" alt="">
                        </div>
                    </a>
                        <div class="info-container">
    
                            <div class="top-wrapper">
                                <div class="name-price">
                                    <p class="product-name">Office Desk</p>
                                    <p class="product-price">$1299.00</p>
                                </div>
    
                                <div class="rate-container">
                                    <img src="star.png" alt="">
                                </div>
                            </div>
                            <p class="description">
                            Introducing our sleek and stylish Monochrome Office Desk, designed for the modern professional who values both form and function. This minimalist desk features a clean and sophisticated design, with a monochrome color scheme that adds a touch of elegance to any office or workspace.                        </p>
    
                        </div>
                    </div>
    
                 <!--PRODUCT 5-->
                <div class="main-prod">
                <a href="../products/product10/product.html">
                        <div class="product-picture">
                            <img src="image/product10.jpg" alt="">
                        </div>
                    </a>
                        <div class="info-container">
    
                            <div class="top-wrapper">
                                <div class="name-price">
                                    <p class="product-name">Partition Shelves</p>
                                    <p class="product-price">$299.00</p>
                                </div>
    
                                <div class="rate-container">
                                    <img src="star.png" alt="">
                                </div>
                            </div>
                            <p class="description">
                            Introducing our innovative Partition Shelves, the perfect solution for creating additional storage space and privacy in your workspace. Our Partition Shelves are designed to attach easily to any standard office partition or divider, providing a customizable storage solution that can be tailored to your specific needs.                        </p>
    
                        </div>
                    </div>
                
                `
            }
    
            else if(i==2){
    
                container.innerHTML="";
                result.innerHTML="";
                result.innerHTML +=`
                    Showing 11-12 of 12 results
                `
    
                container.innerHTML+= `
    
                <!--PRODUCT 1-->
                <div class="main-prod">
                <a href="../products/product11/product.html">
                        <div class="product-picture">
                            <img src="image/product11.jpg" alt="">
                        </div>
                    </a>
                        <div class="info-container">
    
                            <div class="top-wrapper">
                                <div class="name-price">
                                    <p class="product-name">Drawer Dresser</p>
                                    <p class="product-price">$599.00</p>
                                </div>
    
                                <div class="rate-container">
                                    <img src="star.png" alt="">
                                </div>
                            </div>
                            <p class="description">
                            Introducing the stylish and functional Drawer Dresser, the perfect addition to any bedroom or living space! This beautifully designed dresser features a sturdy construction with a smooth finish that adds a touch of elegance to any room.
                        </div>
                    </div>
    
                 <!--PRODUCT 2-->
                <div class="main-prod">
                <a href="../products/product12/product.html">
                        <div class="product-picture">
                            <img src="image/product12.jpg" alt="">
                        </div>
                    </a>
                        <div class="info-container">
    
                            <div class="top-wrapper">
                                <div class="name-price">
                                    <p class="product-name">Shoe Storage</p>
                                    <p class="product-price">$699.00</p>
                                </div>
    
                                <div class="rate-container">
                                    <img src="star.png" alt="">
                                </div>
                            </div>
                            <p class="description">
                            Introducing our stylish and practical shoe storage solution, designed to keep your footwear organized and easily accessible. Made from high-quality materials, this storage solution is built to last and can hold a large number of shoes, depending on the size and style.
                        </div>
                    </div>
                
                `
            }
    
            else if(i==3){
    
                container.innerHTML="";
                result.innerHTML="";
                result.innerHTML +=`
                    Showing 11-12 of 12 results
                `
    
                container.innerHTML+= `
    
                <!--PRODUCT 1-->
                <div class="main-prod">
                <a href="../products/product11/product.html">
                        <div class="product-picture">
                            <img src="image/product11.jpg" alt="">
                        </div>
                    </a>
                        <div class="info-container">
    
                            <div class="top-wrapper">
                                <div class="name-price">
                                    <p class="product-name">Drawer Dresser</p>
                                    <p class="product-price">$599.00</p>
                                </div>
    
                                <div class="rate-container">
                                    <img src="star.png" alt="">
                                </div>
                            </div>
                            <p class="description">
                            Introducing the stylish and functional Drawer Dresser, the perfect addition to any bedroom or living space! This beautifully designed dresser features a sturdy construction with a smooth finish that adds a touch of elegance to any room.
                        </div>
                    </div>
    
                 <!--PRODUCT 2-->
                <div class="main-prod">
                <a href="../products/product12/product.html">
                        <div class="product-picture">
                            <img src="image/product12.jpg" alt="">
                        </div>
                    </a>
                        <div class="info-container">
    
                            <div class="top-wrapper">
                                <div class="name-price">
                                    <p class="product-name">Shoe Storage</p>
                                    <p class="product-price">$699.00</p>
                                </div>
    
                                <div class="rate-container">
                                    <img src="star.png" alt="">
                                </div>
                            </div>
                            <p class="description">
                            Introducing our stylish and practical shoe storage solution, designed to keep your footwear organized and easily accessible. Made from high-quality materials, this storage solution is built to last and can hold a large number of shoes, depending on the size and style.
                        </div>
                    </div>
                
                `
            }
    
    
    
        });
        
        }
    }

    if(sort == 2){
        result.innerHTML="";
        result.innerHTML +=`
            Showing 1-5 of 12 results
        `
        page.style.display = "flex";

        for (let i = 0; i < pageNum.length; i++) {
          
          container.innerHTML= "";
  
          container.innerHTML = `
          
          <!--PRODUCT 1-->
          <div class="main-prod">
          <a href="../products/product5/product.html">
                  <div class="product-picture">
                      <img src="image/product5.jpg" alt="">
                  </div>
              </a>
                  <div class="info-container">
  
                      <div class="top-wrapper">
                          <div class="name-price">
                              <p class="product-name">Geometric Cage Pendant Light</p>
                              <p class="product-price">$57.00</p>
                          </div>
  
                          <div class="rate-container">
                              <img src="star.png" alt="">
                          </div>
                      </div>
                      <p class="description">
                      A geometric cage pendant light is a stylish and modern lighting fixture that features a unique geometric design in the form of a cage or open framework around the light source. The cage is typically made from metal, such as iron or brass, and may have a variety of shapes and patterns, such as triangles, squares, or hexagons.                      </p>
  
                  </div>
              </div>
  
           <!--PRODUCT 2-->
          <div class="main-prod">
          <a href="../products/product7/product.html">
                  <div class="product-picture">
                      <img src="image/product7.jpg" alt="">
                  </div>
              </a>
                  <div class="info-container">
  
                      <div class="top-wrapper">
                          <div class="name-price">
                              <p class="product-name">LED Full Length Lighted Mirror</p>
                              <p class="product-price">$282.00</p>
                          </div>
  
                          <div class="rate-container">
                              <img src="star.png" alt="">
                          </div>
                      </div>
                      <p class="description">
                      A white bouclé armchair typically features a plush, textured upholstery made from a soft, looped yarn that creates a cozy and inviting feel. The bouclé fabric is usually made from natural fibers like wool, which adds a luxurious touch to the chair.                      </p>
  
                  </div>
              </div>
  
          <!--PRODUCT 3-->
          <div class="main-prod">
          <a href="../products/product10/product.html">
                  <div class="product-picture">
                      <img src="image/product10.jpg" alt="">
                  </div>
              </a>
                  <div class="info-container">
  
                      <div class="top-wrapper">
                          <div class="name-price">
                              <p class="product-name">Partition Shelves</p>
                              <p class="product-price">$299.00</p>
                          </div>
  
                          <div class="rate-container">
                              <img src="star.png" alt="">
                          </div>
                      </div>
                      <p class="description">
                      Introducing our innovative Partition Shelves, the perfect solution for creating additional storage space and privacy in your workspace. Our Partition Shelves are designed to attach easily to any standard office partition or divider, providing a customizable storage solution that can be tailored to your specific needs.  
                  </div>
              </div>
  
           <!--PRODUCT 4-->
          <div class="main-prod">
          <a href="../products/product3/product.html">
                  <div class="product-picture">
                      <img src="image/product3.jpg" alt="">
                  </div>
              </a>
                  <div class="info-container">
  
                      <div class="top-wrapper">
                          <div class="name-price">
                              <p class="product-name">Nordic Bed</p>
                              <p class="product-price">$477.00</p>
                          </div>
  
                          <div class="rate-container">
                              <img src="star.png" alt="">
                          </div>
                      </div>
                      <p class="description">
                      Nordic queen size beds are known for their simplicity and understated elegance, often featuring natural wood finishes that highlight the beauty of the wood grain. They are also often paired with crisp white bedding and light-colored accents to create a bright and airy atmosphere in the bedroom.                      </p>
  
                  </div>
              </div>
  
           <!--PRODUCT 5-->
          <div class="main-prod">
          <a href="../products/product11/product.html">
                  <div class="product-picture">
                      <img src="image/product11.jpg" alt="">
                  </div>
              </a>
                  <div class="info-container">
  
                      <div class="top-wrapper">
                          <div class="name-price">
                              <p class="product-name">Drawer Dresser</p>
                              <p class="product-price">$599.00</p>
                          </div>
  
                          <div class="rate-container">
                              <img src="star.png" alt="">
                          </div>
                      </div>
                      <p class="description">
                      Introducing the stylish and functional Drawer Dresser, the perfect addition to any bedroom or living space! This beautifully designed dresser features a sturdy construction with a smooth finish that adds a touch of elegance to any room.                      </p>
  
                  </div>
              </div>
          
          `;
  
          pageNum[i].addEventListener("click", ()=>{
  
              if(i==0){
                  container.innerHTML="";
                  result.innerHTML="";
                  result.innerHTML +=`
                      Showing 1-5 of 12 results
                  `
                  
                  container.innerHTML+= `
                  <!--PRODUCT 1-->
                  <div class="main-prod">
                  <a href="../products/product5/product.html">
                          <div class="product-picture">
                              <img src="image/product5.jpg" alt="">
                          </div>
                      </a>
                          <div class="info-container">
          
                              <div class="top-wrapper">
                                  <div class="name-price">
                                      <p class="product-name">Geometric Cage Pendant Light</p>
                                      <p class="product-price">$57.00</p>
                                  </div>
          
                                  <div class="rate-container">
                                      <img src="star.png" alt="">
                                  </div>
                              </div>
                              <p class="description">
                              A geometric cage pendant light is a stylish and modern lighting fixture that features a unique geometric design in the form of a cage or open framework around the light source. The cage is typically made from metal, such as iron or brass, and may have a variety of shapes and patterns, such as triangles, squares, or hexagons.                      </p>
          
                          </div>
                      </div>
          
                   <!--PRODUCT 2-->
                  <div class="main-prod">
                  <a href="../products/product7/product.html">
                          <div class="product-picture">
                              <img src="image/product7.jpg" alt="">
                          </div>
                      </a>
                          <div class="info-container">
          
                              <div class="top-wrapper">
                                  <div class="name-price">
                                      <p class="product-name">LED Full Length Lighted Mirror</p>
                                      <p class="product-price">$282.00</p>
                                  </div>
          
                                  <div class="rate-container">
                                      <img src="star.png" alt="">
                                  </div>
                              </div>
                              <p class="description">
                              A white bouclé armchair typically features a plush, textured upholstery made from a soft, looped yarn that creates a cozy and inviting feel. The bouclé fabric is usually made from natural fibers like wool, which adds a luxurious touch to the chair.                      </p>
          
                          </div>
                      </div>
          
                  <!--PRODUCT 3-->
                  <div class="main-prod">
                  <a href="../products/product10/product.html">
                          <div class="product-picture">
                              <img src="image/product10.jpg" alt="">
                          </div>
                      </a>
                          <div class="info-container">
          
                              <div class="top-wrapper">
                                  <div class="name-price">
                                      <p class="product-name">Partition Shelves</p>
                                      <p class="product-price">$299.00</p>
                                  </div>
          
                                  <div class="rate-container">
                                      <img src="star.png" alt="">
                                  </div>
                              </div>
                              <p class="description">
                              Introducing our innovative Partition Shelves, the perfect solution for creating additional storage space and privacy in your workspace. Our Partition Shelves are designed to attach easily to any standard office partition or divider, providing a customizable storage solution that can be tailored to your specific needs.  
                          </div>
                      </div>
          
                   <!--PRODUCT 4-->
                  <div class="main-prod">
                  <a href="../products/product3/product.html">
                          <div class="product-picture">
                              <img src="image/product3.jpg" alt="">
                          </div>
                      </a>
                          <div class="info-container">
          
                              <div class="top-wrapper">
                                  <div class="name-price">
                                      <p class="product-name">Nordic Bed</p>
                                      <p class="product-price">$477.00</p>
                                  </div>
          
                                  <div class="rate-container">
                                      <img src="star.png" alt="">
                                  </div>
                              </div>
                              <p class="description">
                              Nordic queen size beds are known for their simplicity and understated elegance, often featuring natural wood finishes that highlight the beauty of the wood grain. They are also often paired with crisp white bedding and light-colored accents to create a bright and airy atmosphere in the bedroom.                      </p>
          
                          </div>
                      </div>
          
                   <!--PRODUCT 5-->
                  <div class="main-prod">
                  <a href="../products/product11/product.html">
                          <div class="product-picture">
                              <img src="image/product11.jpg" alt="">
                          </div>
                      </a>
                          <div class="info-container">
          
                              <div class="top-wrapper">
                                  <div class="name-price">
                                      <p class="product-name">Drawer Dresser</p>
                                      <p class="product-price">$599.00</p>
                                  </div>
          
                                  <div class="rate-container">
                                      <img src="star.png" alt="">
                                  </div>
                              </div>
                              <p class="description">
                              Introducing the stylish and functional Drawer Dresser, the perfect addition to any bedroom or living space! This beautifully designed dresser features a sturdy construction with a smooth finish that adds a touch of elegance to any room.                      </p>
          
                          </div>
                      </div>
                  `
              }
      
              else if(i==1){
                  console.log("clicked");
      
                  container.innerHTML="";
                  result.innerHTML="";
                  result.innerHTML +=`
                      Showing 6-10 of 12 results
                  `
      
                  container.innerHTML+= `
      
                  <!--PRODUCT 1-->
                  <div class="main-prod">
                  <a href="../products/product12/product.html">
                          <div class="product-picture">
                              <img src="image/product12.jpg" alt="">
                          </div>
                      </a>
                          <div class="info-container">
      
                              <div class="top-wrapper">
                                  <div class="name-price">
                                      <p class="product-name">Shoe Storage</p>
                                      <p class="product-price">$699.00</p>
                                  </div>
      
                                  <div class="rate-container">
                                      <img src="star.png" alt="">
                                  </div>
                              </div>
                              <p class="description">
                              Introducing our stylish and practical shoe storage solution, designed to keep your footwear organized and easily accessible. Made from high-quality materials, this storage solution is built to last and can hold a large number of shoes, depending on the size and style.      
                          </div>
                      </div>
      
                   <!--PRODUCT 2-->
                  <div class="main-prod">
                  <a href="../products/product6product.html">
                          <div class="product-picture">
                              <img src="image/product6.jpg" alt="">
                          </div>
                      </a>
                          <div class="info-container">
      
                              <div class="top-wrapper">
                                  <div class="name-price">
                                      <p class="product-name">Raindrop Multiple Hanging Lamp</p>
                                      <p class="product-price">$809.00</p>
                                  </div>
      
                                  <div class="rate-container">
                                      <img src="star.png" alt="">
                                  </div>
                              </div>
                              <p class="description">
                              A raindrop multiple hanging lamp is a stunning lighting fixture that features a cluster of individual pendants arranged in a descending, raindrop-like pattern. Each pendant typically consists of a glass shade in the shape of a teardrop or raindrop, which is suspended from a cord or cable.      
                          </div>
                      </div>
      
                  <!--PRODUCT 3-->
                  <div class="main-prod">
                  <a href="../products/product8.html">
                          <div class="product-picture">
                              <img src="image/product8.jpg" alt="">
                          </div>
                      </a>
                          <div class="info-container">
      
                              <div class="top-wrapper">
                                  <div class="name-price">
                                      <p class="product-name">Monochrome Bedroom</p>
                                      <p class="product-price">$852.00</p>
                                  </div>
      
                                  <div class="rate-container">
                                      <img src="star.png" alt="">
                                  </div>
                              </div>
                              <p class="description">
                              A monochrome bedroom is a room that is decorated using only shades of one color, typically black, white, or gray. The goal of a monochrome bedroom is to create a serene, minimalist space that is both stylish and functional.                        </p>
      
                          </div>
                      </div>
      
                   <!--PRODUCT 4-->
                  <div class="main-prod">
                  <a href="../products/product2/product.html">
                          <div class="product-picture">
                              <img src="image/product2.PNG" alt="">
                          </div>
                      </a>
                          <div class="info-container">
      
                              <div class="top-wrapper">
                                  <div class="name-price">
                                      <p class="product-name">Mahogany Boomerang Coffee Table</p>
                                      <p class="product-price">$1149.00</p>
                                  </div>
      
                                  <div class="rate-container">
                                      <img src="star.png" alt="">
                                  </div>
                              </div>
                              <p class="description">
                              Mahogany coffee table is a beautiful and classic piece of furniture that is sure to add elegance and warmth to any room. The table is crafted from high-quality mahogany wood, which is known for its rich, deep color and durability.      
                          </div>
                      </div>
      
                   <!--PRODUCT 5-->
                  <div class="main-prod">
                  <a href="../products/product4/product.html">
                          <div class="product-picture">
                              <img src="image/product4.jpg" alt="">
                          </div>
                      </a>
                          <div class="info-container">
      
                              <div class="top-wrapper">
                                  <div class="name-price">
                                      <p class="product-name">Sintered Stone Top Dining Table</p>
                                      <p class="product-price">$1826.00</p>
                                  </div>
      
                                  <div class="rate-container">
                                      <img src="star.png" alt="">
                                  </div>
                              </div>
                              <p class="description">
                              A sintered stone top dining table is a modern and luxurious addition to any dining room. Sintered stone is a highly durable and strong material that is made by compressing natural minerals and pigments at high temperatures and pressure, resulting in a solid and non-porous surface that is resistant to scratches, stains, and heat.      
                          </div>
                      </div>
                  
                  `
              }
      
              else if(i==2){
      
                  container.innerHTML="";
                  result.innerHTML="";
                  result.innerHTML +=`
                      Showing 11-12 of 12 results
                  `
      
                  container.innerHTML+= `
      
                  <!--PRODUCT 1-->
                  <div class="main-prod">
                  <a href="../products/product1/product.html">
                          <div class="product-picture">
                              <img src="image/product1.jpg" alt="">
                          </div>
                      </a>
                          <div class="info-container">
      
                              <div class="top-wrapper">
                                  <div class="name-price">
                                      <p class="product-name">Triple Nordic Corner Sofa</p>
                                      <p class="product-price">$1290.00</p>
                                  </div>
      
                                  <div class="rate-container">
                                      <img src="star.png" alt="">
                                  </div>
                              </div>
                              <p class="description">
                              Get a corner with an attractive modern design, and a suitable size, to immerse you in comfort and happiness with your family, and to enjoy gathering times with your loved ones.                          </div>
                      </div>
      
                   <!--PRODUCT 2-->
                  <div class="main-prod">
                  <a href="../products/product9/product.html">
                          <div class="product-picture">
                              <img src="image/product9.jpg" alt="">
                          </div>
                      </a>
                          <div class="info-container">
      
                              <div class="top-wrapper">
                                  <div class="name-price">
                                      <p class="product-name">Office Desk</p>
                                      <p class="product-price">$1299.00</p>
                                  </div>
      
                                  <div class="rate-container">
                                      <img src="star.png" alt="">
                                  </div>
                              </div>
                              <p class="description">
                              Introducing our sleek and stylish Monochrome Office Desk, designed for the modern professional who values both form and function. This minimalist desk features a clean and sophisticated design, with a monochrome color scheme that adds a touch of elegance to any office or workspace.                          </div>
                      </div>
                  
                  `
              }
      
          });
          
          }
      }

      if(sort == 3){
        result.innerHTML="";
        result.innerHTML +=`
            Showing 1-5 of 12 results
        `
        page.style.display = "flex";

        for (let i = 0; i < pageNum.length; i++) {
          
          container.innerHTML= "";
  
          container.innerHTML = `
          
          <!--PRODUCT 1-->

          <div class="main-prod">
          <a href="../products/product9/product.html">
                  <div class="product-picture">
                      <img src="image/product9.jpg" alt="">
                  </div>
              </a>
                  <div class="info-container">

                      <div class="top-wrapper">
                          <div class="name-price">
                              <p class="product-name">Office Desk</p>
                              <p class="product-price">$1299.00</p>
                          </div>

                          <div class="rate-container">
                              <img src="star.png" alt="">
                          </div>
                      </div>
                      <p class="description">
                      Introducing our sleek and stylish Monochrome Office Desk, designed for the modern professional who values both form and function. This minimalist desk features a clean and sophisticated design, with a monochrome color scheme that adds a touch of elegance to any office or workspace.                          </div>
              </div>
  
           <!--PRODUCT 2-->

           <div class="main-prod">
           <a href="../products/product1/product.html">
                   <div class="product-picture">
                       <img src="image/product1.jpg" alt="">
                   </div>
               </a>
                   <div class="info-container">

                       <div class="top-wrapper">
                           <div class="name-price">
                               <p class="product-name">Triple Nordic Corner Sofa</p>
                               <p class="product-price">$1290.00</p>
                           </div>

                           <div class="rate-container">
                               <img src="star.png" alt="">
                           </div>
                       </div>
                       <p class="description">
                       Get a corner with an attractive modern design, and a suitable size, to immerse you in comfort and happiness with your family, and to enjoy gathering times with your loved ones.                          </div>
               </div>
  
          <!--PRODUCT 3-->

          <div class="main-prod">
          <a href="../products/product4/product.html">
                  <div class="product-picture">
                      <img src="image/product4.jpg" alt="">
                  </div>
              </a>
                  <div class="info-container">

                      <div class="top-wrapper">
                          <div class="name-price">
                              <p class="product-name">Sintered Stone Top Dining Table</p>
                              <p class="product-price">$1826.00</p>
                          </div>

                          <div class="rate-container">
                              <img src="star.png" alt="">
                          </div>
                      </div>
                      <p class="description">
                      A sintered stone top dining table is a modern and luxurious addition to any dining room. Sintered stone is a highly durable and strong material that is made by compressing natural minerals and pigments at high temperatures and pressure, resulting in a solid and non-porous surface that is resistant to scratches, stains, and heat.      
                  </div>
              </div>
  
           <!--PRODUCT 4-->

           <div class="main-prod">
           <a href="../products/product2/product.html">
                   <div class="product-picture">
                       <img src="image/product2.PNG" alt="">
                   </div>
               </a>
                   <div class="info-container">

                       <div class="top-wrapper">
                           <div class="name-price">
                               <p class="product-name">Mahogany Boomerang Coffee Table</p>
                               <p class="product-price">$1149.00</p>
                           </div>

                           <div class="rate-container">
                               <img src="star.png" alt="">
                           </div>
                       </div>
                       <p class="description">
                       Mahogany coffee table is a beautiful and classic piece of furniture that is sure to add elegance and warmth to any room. The table is crafted from high-quality mahogany wood, which is known for its rich, deep color and durability.      
                   </div>
               </div>
  
           <!--PRODUCT 5-->

           <div class="main-prod">
           <a href="../products/product8.html">
                   <div class="product-picture">
                       <img src="image/product8.jpg" alt="">
                   </div>
               </a>
                   <div class="info-container">

                       <div class="top-wrapper">
                           <div class="name-price">
                               <p class="product-name">Monochrome Bedroom</p>
                               <p class="product-price">$852.00</p>
                           </div>

                           <div class="rate-container">
                               <img src="star.png" alt="">
                           </div>
                       </div>
                       <p class="description">
                       A monochrome bedroom is a room that is decorated using only shades of one color, typically black, white, or gray. The goal of a monochrome bedroom is to create a serene, minimalist space that is both stylish and functional.                        </p>

                   </div>
               </div>
          
          `;
  
          pageNum[i].addEventListener("click", ()=>{
  
              if(i==0){
                  container.innerHTML="";
                  result.innerHTML="";
                  result.innerHTML +=`
                      Showing 1-5 of 12 results
                  `
                  
                  container.innerHTML+= `
                  <!--PRODUCT 1-->

                  <div class="main-prod">
                  <a href="../products/product9/product.html">
                          <div class="product-picture">
                              <img src="image/product9.jpg" alt="">
                          </div>
                      </a>
                          <div class="info-container">
      
                              <div class="top-wrapper">
                                  <div class="name-price">
                                      <p class="product-name">Office Desk</p>
                                      <p class="product-price">$1299.00</p>
                                  </div>
      
                                  <div class="rate-container">
                                      <img src="star.png" alt="">
                                  </div>
                              </div>
                              <p class="description">
                              Introducing our sleek and stylish Monochrome Office Desk, designed for the modern professional who values both form and function. This minimalist desk features a clean and sophisticated design, with a monochrome color scheme that adds a touch of elegance to any office or workspace.                          </div>
                      </div>
          
                   <!--PRODUCT 2-->

                   <div class="main-prod">
                   <a href="../products/product1/product.html">
                           <div class="product-picture">
                               <img src="image/product1.jpg" alt="">
                           </div>
                       </a>
                           <div class="info-container">
       
                               <div class="top-wrapper">
                                   <div class="name-price">
                                       <p class="product-name">Triple Nordic Corner Sofa</p>
                                       <p class="product-price">$1290.00</p>
                                   </div>
       
                                   <div class="rate-container">
                                       <img src="star.png" alt="">
                                   </div>
                               </div>
                               <p class="description">
                               Get a corner with an attractive modern design, and a suitable size, to immerse you in comfort and happiness with your family, and to enjoy gathering times with your loved ones.                          </div>
                       </div>
          
                  <!--PRODUCT 3-->

                  <div class="main-prod">
                  <a href="../products/product4/product.html">
                          <div class="product-picture">
                              <img src="image/product4.jpg" alt="">
                          </div>
                      </a>
                          <div class="info-container">
      
                              <div class="top-wrapper">
                                  <div class="name-price">
                                      <p class="product-name">Sintered Stone Top Dining Table</p>
                                      <p class="product-price">$1826.00</p>
                                  </div>
      
                                  <div class="rate-container">
                                      <img src="star.png" alt="">
                                  </div>
                              </div>
                              <p class="description">
                              A sintered stone top dining table is a modern and luxurious addition to any dining room. Sintered stone is a highly durable and strong material that is made by compressing natural minerals and pigments at high temperatures and pressure, resulting in a solid and non-porous surface that is resistant to scratches, stains, and heat.      
                          </div>
                      </div>
          
                   <!--PRODUCT 4-->

                   <div class="main-prod">
                   <a href="../products/product2/product.html">
                           <div class="product-picture">
                               <img src="image/product2.PNG" alt="">
                           </div>
                       </a>
                           <div class="info-container">
       
                               <div class="top-wrapper">
                                   <div class="name-price">
                                       <p class="product-name">Mahogany Boomerang Coffee Table</p>
                                       <p class="product-price">$1149.00</p>
                                   </div>
       
                                   <div class="rate-container">
                                       <img src="star.png" alt="">
                                   </div>
                               </div>
                               <p class="description">
                               Mahogany coffee table is a beautiful and classic piece of furniture that is sure to add elegance and warmth to any room. The table is crafted from high-quality mahogany wood, which is known for its rich, deep color and durability.      
                           </div>
                       </div>
          
                   <!--PRODUCT 5-->

                   <div class="main-prod">
                   <a href="../products/product8.html">
                           <div class="product-picture">
                               <img src="image/product8.jpg" alt="">
                           </div>
                       </a>
                           <div class="info-container">
       
                               <div class="top-wrapper">
                                   <div class="name-price">
                                       <p class="product-name">Monochrome Bedroom</p>
                                       <p class="product-price">$852.00</p>
                                   </div>
       
                                   <div class="rate-container">
                                       <img src="star.png" alt="">
                                   </div>
                               </div>
                               <p class="description">
                               A monochrome bedroom is a room that is decorated using only shades of one color, typically black, white, or gray. The goal of a monochrome bedroom is to create a serene, minimalist space that is both stylish and functional.                        </p>
       
                           </div>
                       </div>

                  `
              }
      
              else if(i==1){
                  console.log("clicked");
      
                  container.innerHTML="";
                  result.innerHTML="";
                  result.innerHTML +=`
                      Showing 6-10 of 12 results
                  `
      
                  container.innerHTML+= `
      
                  <!--PRODUCT 1-->

   <div class="main-prod">
                  <a href="../products/product6product.html">
                          <div class="product-picture">
                              <img src="image/product6.jpg" alt="">
                          </div>
                      </a>
                          <div class="info-container">
      
                              <div class="top-wrapper">
                                  <div class="name-price">
                                      <p class="product-name">Raindrop Multiple Hanging Lamp</p>
                                      <p class="product-price">$809.00</p>
                                  </div>
      
                                  <div class="rate-container">
                                      <img src="star.png" alt="">
                                  </div>
                              </div>
                              <p class="description">
                              A raindrop multiple hanging lamp is a stunning lighting fixture that features a cluster of individual pendants arranged in a descending, raindrop-like pattern. Each pendant typically consists of a glass shade in the shape of a teardrop or raindrop, which is suspended from a cord or cable.      
                          </div>
                      </div>
      
                   <!--PRODUCT 2-->

                   <div class="main-prod">
                   <a href="../products/product12/product.html">
                           <div class="product-picture">
                               <img src="image/product12.jpg" alt="">
                           </div>
                       </a>
                           <div class="info-container">
       
                               <div class="top-wrapper">
                                   <div class="name-price">
                                       <p class="product-name">Shoe Storage</p>
                                       <p class="product-price">$699.00</p>
                                   </div>
       
                                   <div class="rate-container">
                                       <img src="star.png" alt="">
                                   </div>
                               </div>
                               <p class="description">
                               Introducing our stylish and practical shoe storage solution, designed to keep your footwear organized and easily accessible. Made from high-quality materials, this storage solution is built to last and can hold a large number of shoes, depending on the size and style.      
                           </div>
                       </div>
      
                  <!--PRODUCT 3-->

                  <div class="main-prod">
                  <a href="../products/product11/product.html">
                          <div class="product-picture">
                              <img src="image/product11.jpg" alt="">
                          </div>
                      </a>
                          <div class="info-container">
          
                              <div class="top-wrapper">
                                  <div class="name-price">
                                      <p class="product-name">Drawer Dresser</p>
                                      <p class="product-price">$599.00</p>
                                  </div>
          
                                  <div class="rate-container">
                                      <img src="star.png" alt="">
                                  </div>
                              </div>
                              <p class="description">
                              Introducing the stylish and functional Drawer Dresser, the perfect addition to any bedroom or living space! This beautifully designed dresser features a sturdy construction with a smooth finish that adds a touch of elegance to any room.                      </p>
          
                          </div>
                      </div>
      
                   <!--PRODUCT 4-->

                   <div class="main-prod">
                   <a href="../products/product3/product.html">
                           <div class="product-picture">
                               <img src="image/product3.jpg" alt="">
                           </div>
                       </a>
                           <div class="info-container">
           
                               <div class="top-wrapper">
                                   <div class="name-price">
                                       <p class="product-name">Nordic Bed</p>
                                       <p class="product-price">$477.00</p>
                                   </div>
           
                                   <div class="rate-container">
                                       <img src="star.png" alt="">
                                   </div>
                               </div>
                               <p class="description">
                               Nordic queen size beds are known for their simplicity and understated elegance, often featuring natural wood finishes that highlight the beauty of the wood grain. They are also often paired with crisp white bedding and light-colored accents to create a bright and airy atmosphere in the bedroom.                      </p>
           
                           </div>
                       </div>
     
                   <!--PRODUCT 5-->

                   <div class="main-prod">
                   <a href="../products/product10/product.html">
                           <div class="product-picture">
                               <img src="image/product10.jpg" alt="">
                           </div>
                       </a>
                           <div class="info-container">
           
                               <div class="top-wrapper">
                                   <div class="name-price">
                                       <p class="product-name">Partition Shelves</p>
                                       <p class="product-price">$299.00</p>
                                   </div>
           
                                   <div class="rate-container">
                                       <img src="star.png" alt="">
                                   </div>
                               </div>
                               <p class="description">
                               Introducing our innovative Partition Shelves, the perfect solution for creating additional storage space and privacy in your workspace. Our Partition Shelves are designed to attach easily to any standard office partition or divider, providing a customizable storage solution that can be tailored to your specific needs.  
                           </div>
                       </div>
                  
                  `
              }
      
              else if(i==2){
      
                  container.innerHTML="";
                  result.innerHTML="";
                  result.innerHTML +=`
                      Showing 11-12 of 12 results
                  `
      
                  container.innerHTML+= `
      
                  <!--PRODUCT 1-->

                  <div class="main-prod">
                  <a href="../products/product7/product.html">
                          <div class="product-picture">
                              <img src="image/product7.jpg" alt="">
                          </div>
                      </a>
                          <div class="info-container">
          
                              <div class="top-wrapper">
                                  <div class="name-price">
                                      <p class="product-name">LED Full Length Lighted Mirror</p>
                                      <p class="product-price">$282.00</p>
                                  </div>
          
                                  <div class="rate-container">
                                      <img src="star.png" alt="">
                                  </div>
                              </div>
                              <p class="description">
                              A white bouclé armchair typically features a plush, textured upholstery made from a soft, looped yarn that creates a cozy and inviting feel. The bouclé fabric is usually made from natural fibers like wool, which adds a luxurious touch to the chair.                      </p>
          
                          </div>
                      </div>
      
                   <!--PRODUCT 2-->

                   <div class="main-prod">
                   <a href="../products/product5/product.html">
                           <div class="product-picture">
                               <img src="image/product5.jpg" alt="">
                           </div>
                       </a>
                           <div class="info-container">
           
                               <div class="top-wrapper">
                                   <div class="name-price">
                                       <p class="product-name">Geometric Cage Pendant Light</p>
                                       <p class="product-price">$57.00</p>
                                   </div>
           
                                   <div class="rate-container">
                                       <img src="star.png" alt="">
                                   </div>
                               </div>
                               <p class="description">
                               A geometric cage pendant light is a stylish and modern lighting fixture that features a unique geometric design in the form of a cage or open framework around the light source. The cage is typically made from metal, such as iron or brass, and may have a variety of shapes and patterns, such as triangles, squares, or hexagons.                      </p>
           
                           </div>
                       </div>
 
                  
                  `
              }
      
          });
          
          }
      }

}

/*KATAPUSAN MO NA YUGIN*/

document.getElementById("search").addEventListener("click",() =>{
    container.innerHTML ="";
    container.innerHTML =`
    
    <!--PRODUCT 1-->

    <div class="main-prod">
    <a href="../products/product9/product.html">
            <div class="product-picture">
                <img src="image/product9.jpg" alt="">
            </div>
        </a>
            <div class="info-container">

                <div class="top-wrapper">
                    <div class="name-price">
                        <p class="product-name">Office Desk</p>
                        <p class="product-price">$1299.00</p>
                    </div>

                    <div class="rate-container">
                        <img src="star.png" alt="">
                    </div>
                </div>
                <p class="description">
                Introducing our sleek and stylish Monochrome Office Desk, designed for the modern professional who values both form and function. This minimalist desk features a clean and sophisticated design, with a monochrome color scheme that adds a touch of elegance to any office or workspace.                          </div>
        </div>

     <!--PRODUCT 2-->

     <div class="main-prod">
     <a href="../products/product1/product.html">
             <div class="product-picture">
                 <img src="image/product1.jpg" alt="">
             </div>
         </a>
             <div class="info-container">

                 <div class="top-wrapper">
                     <div class="name-price">
                         <p class="product-name">Triple Nordic Corner Sofa</p>
                         <p class="product-price">$1290.00</p>
                     </div>

                     <div class="rate-container">
                         <img src="star.png" alt="">
                     </div>
                 </div>
                 <p class="description">
                 Get a corner with an attractive modern design, and a suitable size, to immerse you in comfort and happiness with your family, and to enjoy gathering times with your loved ones.                          </div>
         </div>

    <!--PRODUCT 3-->

    <div class="main-prod">
    <a href="../products/product4/product.html">
            <div class="product-picture">
                <img src="image/product4.jpg" alt="">
            </div>
        </a>
            <div class="info-container">

                <div class="top-wrapper">
                    <div class="name-price">
                        <p class="product-name">Sintered Stone Top Dining Table</p>
                        <p class="product-price">$1826.00</p>
                    </div>

                    <div class="rate-container">
                        <img src="star.png" alt="">
                    </div>
                </div>
                <p class="description">
                A sintered stone top dining table is a modern and luxurious addition to any dining room. Sintered stone is a highly durable and strong material that is made by compressing natural minerals and pigments at high temperatures and pressure, resulting in a solid and non-porous surface that is resistant to scratches, stains, and heat.      
            </div>
        </div>

     <!--PRODUCT 4-->

     <div class="main-prod">
     <a href="../products/product2/product.html">
             <div class="product-picture">
                 <img src="image/product2.PNG" alt="">
             </div>
         </a>
             <div class="info-container">

                 <div class="top-wrapper">
                     <div class="name-price">
                         <p class="product-name">Mahogany Boomerang Coffee Table</p>
                         <p class="product-price">$1149.00</p>
                     </div>

                     <div class="rate-container">
                         <img src="star.png" alt="">
                     </div>
                 </div>
                 <p class="description">
                 Mahogany coffee table is a beautiful and classic piece of furniture that is sure to add elegance and warmth to any room. The table is crafted from high-quality mahogany wood, which is known for its rich, deep color and durability.      
             </div>
         </div>

     <!--PRODUCT 5-->

     <div class="main-prod">
     <a href="../products/product8.html">
             <div class="product-picture">
                 <img src="image/product8.jpg" alt="">
             </div>
         </a>
             <div class="info-container">

                 <div class="top-wrapper">
                     <div class="name-price">
                         <p class="product-name">Monochrome Bedroom</p>
                         <p class="product-price">$852.00</p>
                     </div>

                     <div class="rate-container">
                         <img src="star.png" alt="">
                     </div>
                 </div>
                 <p class="description">
                 A monochrome bedroom is a room that is decorated using only shades of one color, typically black, white, or gray. The goal of a monochrome bedroom is to create a serene, minimalist space that is both stylish and functional.                        </p>

             </div>
         </div>

         <div class="main-prod">
         <a href="../products/product6product.html">
                 <div class="product-picture">
                     <img src="image/product6.jpg" alt="">
                 </div>
             </a>
                 <div class="info-container">

                     <div class="top-wrapper">
                         <div class="name-price">
                             <p class="product-name">Raindrop Multiple Hanging Lamp</p>
                             <p class="product-price">$809.00</p>
                         </div>

                         <div class="rate-container">
                             <img src="star.png" alt="">
                         </div>
                     </div>
                     <p class="description">
                     A raindrop multiple hanging lamp is a stunning lighting fixture that features a cluster of individual pendants arranged in a descending, raindrop-like pattern. Each pendant typically consists of a glass shade in the shape of a teardrop or raindrop, which is suspended from a cord or cable.      
                 </div>
             </div>

          <!--PRODUCT 2-->

          <div class="main-prod">
          <a href="../products/product12/product.html">
                  <div class="product-picture">
                      <img src="image/product12.jpg" alt="">
                  </div>
              </a>
                  <div class="info-container">

                      <div class="top-wrapper">
                          <div class="name-price">
                              <p class="product-name">Shoe Storage</p>
                              <p class="product-price">$699.00</p>
                          </div>

                          <div class="rate-container">
                              <img src="star.png" alt="">
                          </div>
                      </div>
                      <p class="description">
                      Introducing our stylish and practical shoe storage solution, designed to keep your footwear organized and easily accessible. Made from high-quality materials, this storage solution is built to last and can hold a large number of shoes, depending on the size and style.      
                  </div>
              </div>

         <!--PRODUCT 3-->

         <div class="main-prod">
         <a href="../products/product11/product.html">
                 <div class="product-picture">
                     <img src="image/product11.jpg" alt="">
                 </div>
             </a>
                 <div class="info-container">
 
                     <div class="top-wrapper">
                         <div class="name-price">
                             <p class="product-name">Drawer Dresser</p>
                             <p class="product-price">$599.00</p>
                         </div>
 
                         <div class="rate-container">
                             <img src="star.png" alt="">
                         </div>
                     </div>
                     <p class="description">
                     Introducing the stylish and functional Drawer Dresser, the perfect addition to any bedroom or living space! This beautifully designed dresser features a sturdy construction with a smooth finish that adds a touch of elegance to any room.                      </p>
 
                 </div>
             </div>

          <!--PRODUCT 4-->

          <div class="main-prod">
          <a href="../products/product3/product.html">
                  <div class="product-picture">
                      <img src="image/product3.jpg" alt="">
                  </div>
              </a>
                  <div class="info-container">
  
                      <div class="top-wrapper">
                          <div class="name-price">
                              <p class="product-name">Nordic Bed</p>
                              <p class="product-price">$477.00</p>
                          </div>
  
                          <div class="rate-container">
                              <img src="star.png" alt="">
                          </div>
                      </div>
                      <p class="description">
                      Nordic queen size beds are known for their simplicity and understated elegance, often featuring natural wood finishes that highlight the beauty of the wood grain. They are also often paired with crisp white bedding and light-colored accents to create a bright and airy atmosphere in the bedroom.                      </p>
  
                  </div>
              </div>

          <!--PRODUCT 5-->

          <div class="main-prod">
          <a href="../products/product10/product.html">
                  <div class="product-picture">
                      <img src="image/product10.jpg" alt="">
                  </div>
              </a>
                  <div class="info-container">
  
                      <div class="top-wrapper">
                          <div class="name-price">
                              <p class="product-name">Partition Shelves</p>
                              <p class="product-price">$299.00</p>
                          </div>
  
                          <div class="rate-container">
                              <img src="star.png" alt="">
                          </div>
                      </div>
                      <p class="description">
                      Introducing our innovative Partition Shelves, the perfect solution for creating additional storage space and privacy in your workspace. Our Partition Shelves are designed to attach easily to any standard office partition or divider, providing a customizable storage solution that can be tailored to your specific needs.  
                  </div>
              </div>

              <!--PRODUCT 1-->

              <div class="main-prod">
              <a href="../products/product7/product.html">
                      <div class="product-picture">
                          <img src="image/product7.jpg" alt="">
                      </div>
                  </a>
                      <div class="info-container">
      
                          <div class="top-wrapper">
                              <div class="name-price">
                                  <p class="product-name">LED Full Length Lighted Mirror</p>
                                  <p class="product-price">$282.00</p>
                              </div>
      
                              <div class="rate-container">
                                  <img src="star.png" alt="">
                              </div>
                          </div>
                          <p class="description">
                          A white bouclé armchair typically features a plush, textured upholstery made from a soft, looped yarn that creates a cozy and inviting feel. The bouclé fabric is usually made from natural fibers like wool, which adds a luxurious touch to the chair.                      </p>
      
                      </div>
                  </div>
  
               <!--PRODUCT 2-->

               <div class="main-prod">
               <a href="../products/product5/product.html">
                       <div class="product-picture">
                           <img src="image/product5.jpg" alt="">
                       </div>
                   </a>
                       <div class="info-container">
       
                           <div class="top-wrapper">
                               <div class="name-price">
                                   <p class="product-name">Geometric Cage Pendant Light</p>
                                   <p class="product-price">$57.00</p>
                               </div>
       
                               <div class="rate-container">
                                   <img src="star.png" alt="">
                               </div>
                           </div>
                           <p class="description">
                           A geometric cage pendant light is a stylish and modern lighting fixture that features a unique geometric design in the form of a cage or open framework around the light source. The cage is typically made from metal, such as iron or brass, and may have a variety of shapes and patterns, such as triangles, squares, or hexagons.                      </p>
       
                       </div>
                   </div>

    `;


    /*search input*/
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let countProd = 0;
    container.innerHTML ="";
    container.innerHTML +=`

    `;

for (let i = 0; i < elements.length; i++) {
    
    if (elements[i].innerText.includes(searchInput)) {

        page.style.display = "none";
        
        if(i == 0){
            container.innerHTML += `

            <!--PRODUCT 1-->

            <div class="main-prod">
            <a href="../products/product9/product.html">
                    <div class="product-picture">
                        <img src="image/product9.jpg" alt="">
                    </div>
                </a>
                    <div class="info-container">
        
                        <div class="top-wrapper">
                            <div class="name-price">
                                <p class="product-name">Office Desk</p>
                                <p class="product-price">$1299.00</p>
                            </div>
        
                            <div class="rate-container">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                        <p class="description">
                        Introducing our sleek and stylish Monochrome Office Desk, designed for the modern professional who values both form and function. This minimalist desk features a clean and sophisticated design, with a monochrome color scheme that adds a touch of elegance to any office or workspace.                          </div>
                </div>

            `;

            countProd++;
        }

        else if(i == 1){
            container.innerHTML += `

         
     <!--PRODUCT 2-->

     <div class="main-prod">
     <a href="../products/product1/product.html">
             <div class="product-picture">
                 <img src="image/product1.jpg" alt="">
             </div>
         </a>
             <div class="info-container">

                 <div class="top-wrapper">
                     <div class="name-price">
                         <p class="product-name">Triple Nordic Corner Sofa</p>
                         <p class="product-price">$1290.00</p>
                     </div>

                     <div class="rate-container">
                         <img src="star.png" alt="">
                     </div>
                 </div>
                 <p class="description">
                 Get a corner with an attractive modern design, and a suitable size, to immerse you in comfort and happiness with your family, and to enjoy gathering times with your loved ones.                          </div>
         </div>

            `;

            countProd++;
        }

        else if(i == 2){
            container.innerHTML += `

         
            <div class="main-prod">
            <a href="../products/product4/product.html">
                    <div class="product-picture">
                        <img src="image/product4.jpg" alt="">
                    </div>
                </a>
                    <div class="info-container">
        
                        <div class="top-wrapper">
                            <div class="name-price">
                                <p class="product-name">Sintered Stone Top Dining Table</p>
                                <p class="product-price">$1826.00</p>
                            </div>
        
                            <div class="rate-container">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                        <p class="description">
                        A sintered stone top dining table is a modern and luxurious addition to any dining room. Sintered stone is a highly durable and strong material that is made by compressing natural minerals and pigments at high temperatures and pressure, resulting in a solid and non-porous surface that is resistant to scratches, stains, and heat.      
                    </div>
                </div>

            `;

            countProd++;
        }

        else if(i == 3){
            container.innerHTML += `

         
            <div class="main-prod">
            <a href="../products/product2/product.html">
                    <div class="product-picture">
                        <img src="image/product2.PNG" alt="">
                    </div>
                </a>
                    <div class="info-container">
       
                        <div class="top-wrapper">
                            <div class="name-price">
                                <p class="product-name">Mahogany Boomerang Coffee Table</p>
                                <p class="product-price">$1149.00</p>
                            </div>
       
                            <div class="rate-container">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                        <p class="description">
                        Mahogany coffee table is a beautiful and classic piece of furniture that is sure to add elegance and warmth to any room. The table is crafted from high-quality mahogany wood, which is known for its rich, deep color and durability.      
                    </div>
                </div>

            `;

            countProd++;
        }

        else if(i == 4){
            container.innerHTML += `

         
            <!--PRODUCT 5-->

            <div class="main-prod">
            <a href="../products/product8.html">
                    <div class="product-picture">
                        <img src="image/product8.jpg" alt="">
                    </div>
                </a>
                    <div class="info-container">
       
                        <div class="top-wrapper">
                            <div class="name-price">
                                <p class="product-name">Monochrome Bedroom</p>
                                <p class="product-price">$852.00</p>
                            </div>
       
                            <div class="rate-container">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                        <p class="description">
                        A monochrome bedroom is a room that is decorated using only shades of one color, typically black, white, or gray. The goal of a monochrome bedroom is to create a serene, minimalist space that is both stylish and functional.                        </p>
       
                    </div>
                </div>

            `;

            countProd++;
        }

        else if(i == 5){
            container.innerHTML += `

         
            <div class="main-prod">
            <a href="../products/product6product.html">
                    <div class="product-picture">
                        <img src="image/product6.jpg" alt="">
                    </div>
                </a>
                    <div class="info-container">
   
                        <div class="top-wrapper">
                            <div class="name-price">
                                <p class="product-name">Raindrop Multiple Hanging Lamp</p>
                                <p class="product-price">$809.00</p>
                            </div>
   
                            <div class="rate-container">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                        <p class="description">
                        A raindrop multiple hanging lamp is a stunning lighting fixture that features a cluster of individual pendants arranged in a descending, raindrop-like pattern. Each pendant typically consists of a glass shade in the shape of a teardrop or raindrop, which is suspended from a cord or cable.      
                    </div>
                </div>

            `;

            countProd++;
        }

        else if(i == 6){
            container.innerHTML += `

         
            <!--PRODUCT 2-->

            <div class="main-prod">
            <a href="../products/product12/product.html">
                    <div class="product-picture">
                        <img src="image/product12.jpg" alt="">
                    </div>
                </a>
                    <div class="info-container">
  
                        <div class="top-wrapper">
                            <div class="name-price">
                                <p class="product-name">Shoe Storage</p>
                                <p class="product-price">$699.00</p>
                            </div>
  
                            <div class="rate-container">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                        <p class="description">
                        Introducing our stylish and practical shoe storage solution, designed to keep your footwear organized and easily accessible. Made from high-quality materials, this storage solution is built to last and can hold a large number of shoes, depending on the size and style.      
                    </div>
                </div>

            `;

            countProd++;
        }

        else if(i == 7){
            container.innerHTML += `

         
            <!--PRODUCT 3-->

            <div class="main-prod">
            <a href="../products/product11/product.html">
                    <div class="product-picture">
                        <img src="image/product11.jpg" alt="">
                    </div>
                </a>
                    <div class="info-container">
    
                        <div class="top-wrapper">
                            <div class="name-price">
                                <p class="product-name">Drawer Dresser</p>
                                <p class="product-price">$599.00</p>
                            </div>
    
                            <div class="rate-container">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                        <p class="description">
                        Introducing the stylish and functional Drawer Dresser, the perfect addition to any bedroom or living space! This beautifully designed dresser features a sturdy construction with a smooth finish that adds a touch of elegance to any room.                      </p>
    
                    </div>
                </div>

            `;

            countProd++;
        }

        else if(i == 8){
            container.innerHTML += `

         
            <!--PRODUCT 4-->

            <div class="main-prod">
            <a href="../products/product3/product.html">
                    <div class="product-picture">
                        <img src="image/product3.jpg" alt="">
                    </div>
                </a>
                    <div class="info-container">
    
                        <div class="top-wrapper">
                            <div class="name-price">
                                <p class="product-name">Nordic Bed</p>
                                <p class="product-price">$477.00</p>
                            </div>
    
                            <div class="rate-container">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                        <p class="description">
                        Nordic queen size beds are known for their simplicity and understated elegance, often featuring natural wood finishes that highlight the beauty of the wood grain. They are also often paired with crisp white bedding and light-colored accents to create a bright and airy atmosphere in the bedroom.                      </p>
    
                    </div>
                </div>

            `;

            countProd++;
        }

        else if(i == 9){
            container.innerHTML += `

         
            <!--PRODUCT 5-->

            <div class="main-prod">
            <a href="../products/product10/product.html">
                    <div class="product-picture">
                        <img src="image/product10.jpg" alt="">
                    </div>
                </a>
                    <div class="info-container">
    
                        <div class="top-wrapper">
                            <div class="name-price">
                                <p class="product-name">Partition Shelves</p>
                                <p class="product-price">$299.00</p>
                            </div>
    
                            <div class="rate-container">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                        <p class="description">
                        Introducing our innovative Partition Shelves, the perfect solution for creating additional storage space and privacy in your workspace. Our Partition Shelves are designed to attach easily to any standard office partition or divider, providing a customizable storage solution that can be tailored to your specific needs.  
                    </div>
                </div>
  

            `;

            countProd++;
        }

        else if(i == 10){
            container.innerHTML += `

         
            <!--PRODUCT 1-->

            <div class="main-prod">
            <a href="../products/product7/product.html">
                    <div class="product-picture">
                        <img src="image/product7.jpg" alt="">
                    </div>
                </a>
                    <div class="info-container">
    
                        <div class="top-wrapper">
                            <div class="name-price">
                                <p class="product-name">LED Full Length Lighted Mirror</p>
                                <p class="product-price">$282.00</p>
                            </div>
    
                            <div class="rate-container">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                        <p class="description">
                        A white bouclé armchair typically features a plush, textured upholstery made from a soft, looped yarn that creates a cozy and inviting feel. The bouclé fabric is usually made from natural fibers like wool, which adds a luxurious touch to the chair.                      </p>
    
                    </div>
                </div>
  

            `;

            countProd++;
        }

        else if(i == 11){
            container.innerHTML += `

         
            <!--PRODUCT 2-->

            <div class="main-prod">
            <a href="../products/product5/product.html">
                    <div class="product-picture">
                        <img src="image/product5.jpg" alt="">
                    </div>
                </a>
                    <div class="info-container">
    
                        <div class="top-wrapper">
                            <div class="name-price">
                                <p class="product-name">Geometric Cage Pendant Light</p>
                                <p class="product-price">$57.00</p>
                            </div>
    
                            <div class="rate-container">
                                <img src="star.png" alt="">
                            </div>
                        </div>
                        <p class="description">
                        A geometric cage pendant light is a stylish and modern lighting fixture that features a unique geometric design in the form of a cage or open framework around the light source. The cage is typically made from metal, such as iron or brass, and may have a variety of shapes and patterns, such as triangles, squares, or hexagons.                      </p>
    
                    </div>
                </div>
  

            `;

            countProd++;
        }

        result.innerHTML = "";

        result.innerHTML +=`
        Showing 1-${countProd} of ${countProd} results
    `
    }
    
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