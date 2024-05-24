/* NavBar button */ 
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidebar").style.width = "0px";
}
window.addEventListener('resize', function() {
    let sideBar = document.getElementById("mySidebar");
    if ((this.window.innerWidth <= 1300 || this.window.innerWidth > 1300) && sideBar.style.width !== '0px') {
        sideBar.style.width = "0px";
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const productContainer = document.getElementById('productContainer');
    const products = Array.from(productContainer.getElementsByClassName('row'));
    let currentIndex = 0;
    const productsPerPage = 10;

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

  
    showNextProducts();

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