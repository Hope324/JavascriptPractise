function createProductCard(product) {
    console.log(product.id, product.name, product.imageUrl);
    var productCard = document.createElement("div"); 
    var productLabel = document.createElement("p");
    var productLabel1 = document.createElement("p");
    productLabel.textContent = product.name;
    productLabel1.textContent=product.price;
    var productImage = document.createElement("img");
    productImage.classList.add("product-card-img");
    productImage.src = product.imageUrl;
    console.log(productImage);
    productCard.appendChild(productImage);
    productCard.appendChild(productLabel);
    productCard.appendChild(productLabel1);
    productCard.classList.add("product-card");
    productCard.addEventListener("click", function () {
      window.location.href = "productDesc.html?productId=" + product.id;
    });
    return productCard;
  }

  function createCategoryCard(categary) {
    console.log(categary.id, categary.label, categary.imageUrl);
    var categorycard=document.createElement("div");
    var categoryLabel=document.createElement("p");
    
    categoryLabel.textContent=categary.label;
    
    var CategoryImage = document.createElement("img");
    CategoryImage.classList.add("category-card-img");
    CategoryImage.src = categary.imageUrl;
    console.log(CategoryImage);
    categorycard.appendChild(CategoryImage);
    categorycard.appendChild(categoryLabel);
    categorycard.classList.add("category-card");

   return categorycard;
    
    
  }
  
  // iterate over the product list and append every product to section
  function displayProducts() {
    for (var i = 0; i < productList.length; i++) {
      var product = productList[i];
      var productRef = document.querySelector("#product-list");
      // create a product card
      var productCard = createProductCard(product);
      productRef.appendChild(productCard);
    }
  }

  function displayCategories() {
    for (var i = 0; i < categories.length; i++) {
      var categary = categories[i];
      var categoryRef = document.querySelector("#category-list");
      
      var categorycard = createCategoryCard(categary);
      categoryRef.appendChild(categorycard);
    }
  }
  
  // Redirect to product page
  // function redirectToProductDescriptionPage() {}
  
  // iterate over the categories and display the categories
  
  
  //Render the categories and products
  displayCategories();
  displayProducts();
  