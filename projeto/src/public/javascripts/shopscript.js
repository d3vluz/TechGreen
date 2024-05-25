document.addEventListener('DOMContentLoaded', function() {
    const productContainer = document.getElementById('productContainer');
    const products = Array.from(productContainer.getElementsByClassName('row'));
    const productsPerPage = 10;
    let currentIndex = 0;
    
    function showNextProducts() {
        const nextProducts = products.slice(currentIndex, currentIndex + productsPerPage);
        nextProducts.forEach(product => {
            product.style.display = 'block';
        });
        currentIndex += productsPerPage;

        if (currentIndex >= products.length) {
            document.getElementById('ver-mais').style.display = 'none';
        }
    }

   
    products.forEach((product, index) => {
        if (index >= productsPerPage) {
            product.style.display = 'none';
        }
    });

    document.getElementById('ver-mais').addEventListener('click', function(e) {
        e.preventDefault();
        showNextProducts();
    });

    const sortBySelect = document.getElementById('sortByselect');

    sortBySelect.addEventListener('change', function() {
        const sortOption = sortBySelect.value;

        let sortedProducts;

        if (sortOption === 'preco_menor') {
            sortedProducts = products.sort((a, b) => {
                const priceA = parseFloat(a.querySelector('.row-right h6').innerText.replace('R$', '').replace(',', '.'));
                const priceB = parseFloat(b.querySelector('.row-right h6').innerText.replace('R$', '').replace(',', '.'));
                return priceA - priceB;
            });
        } else if (sortOption === 'preco_maior') {
            sortedProducts = products.sort((a, b) => {
                const priceA = parseFloat(a.querySelector('.row-right h6').innerText.replace('R$', '').replace(',', '.'));
                const priceB = parseFloat(b.querySelector('.row-right h6').innerText.replace('R$', '').replace(',', '.'));
                return priceB - priceA;
            });
        } else if (sortOption === 'melhor_avaliado') {
            sortedProducts = products.sort((a, b) => {
                const ratingA = parseFloat(a.querySelector('.product-rating').dataset.rating);
                const ratingB = parseFloat(b.querySelector('.product-rating').dataset.rating);
                return ratingB - ratingA;
            });
        } 
        productContainer.innerHTML = '';
        sortedProducts.forEach(product => {
            product.style.display = 'none';
            productContainer.appendChild(product);
        });

        currentIndex = 0;
        showNextProducts();
        document.getElementById('ver-mais').style.display = currentIndex < products.length ? 'block' : 'none';
    });
});