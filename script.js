document.addEventListener("DOMContentLoaded", function() {
    const productsList = document.getElementById("productsList");
    const products = [
        { name: "ASUS Vivobook 15", price: "₹65,599", image: "https://m.media-amazon.com/images/I/71c0GSxtEEL._AC_UF1000,1000_QL80_.jpg" },
        { name: "HP Victus", price: "₹ 78,599", image: "https://m.media-amazon.com/images/I/61VIIUttpzL._AC_UF1000,1000_QL80_.jpg" },
        { name: "LENOVO Ideapad", price: "₹ 80,599", image: "https://m.media-amazon.com/images/I/71--IQUHVwL._AC_UF1000,1000_QL80_.jpg" },
    ];

    products.forEach((product) => {
        const productElement = document.createElement("div");
        productElement.className = "product";
        const imageElement = document.createElement("img");
        imageElement.src = product.image; // Corrected from "scr"
        imageElement.alt = product.name;
        const nameElement = document.createElement("h3");
        nameElement.textContent = product.name;
        const priceElement = document.createElement("p");
        priceElement.textContent = product.price;
        productElement.appendChild(imageElement);
        productElement.appendChild(nameElement);
        productElement.appendChild(priceElement);

        productsList.appendChild(productElement);
    });

    const scrollToProductsLink = document.getElementById("scrollToProducts");
    const featuredProducts = document.getElementById("featuredproducts");

    scrollToProductsLink.addEventListener("click", function(event) {
        event.preventDefault();
        featuredProducts.scrollIntoView({ behavior: "smooth" });
    });
});
