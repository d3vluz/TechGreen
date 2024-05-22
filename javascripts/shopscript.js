var startIndex = 0; // Índice do primeiro produto a ser exibido
var productsPerPage = 10; // Número de produtos por página

function showNextProducts() {
    var productList = document.querySelector(".n-conteudo");
    var products = Array.from(productList.children);
    var endIndex = startIndex + productsPerPage;

  
    for (var i = startIndex; i < endIndex && i < products.length; i++) {
        products[i].style.display = "block";
    }

  
    startIndex = endIndex;
}

function sortByRating() {
    var sortBy = document.getElementById("sortByselect").value;
    var productList = document.querySelector(".n-conteudo");
    var products = Array.from(productList.children);

    if (sortBy === "melhor_avaliado") {
        products.sort((a, b) => {
            var ratingA = parseFloat(a.dataset.rating);
            var ratingB = parseFloat(b.dataset.rating);
            return ratingB - ratingA;
        });
    }

    productList.innerHTML = "";
    products.forEach(product => {
        productList.appendChild(product);
    });
}


document.getElementById('sortByselect').addEventListener('change', function() {
    document.getElementById('sortForm').submit();
});

