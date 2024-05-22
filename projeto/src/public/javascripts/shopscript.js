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

/*document.getElementById('ver-mais').addEventListener('click', async function(event) {
    event.preventDefault(); // Evita a ação padrão do link
    
    // Lógica para enviar uma solicitação ao servidor e obter mais produtos
    try {
        const response = await fetch('/shoppage');
        if (!response.ok) {
            throw new Error('Erro ao obter produtos adicionais');
        }
        const data = await response.json();
        
        // Renderizar os novos produtos na página
        const produtosContainer = document.querySelector('.n-conteudo');
        data.products.forEach(product => {
            const row = document.createElement('div');
            row.classList.add('row');
            row.innerHTML = `
                <div class="row-img">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <h3>${product.name}</h3>
                <div class="row-in">
                    <div class="row-left">
                        <a href="#">
                            Adicione ao carrinho
                            <i class="ri-shopping-cart-2-line"></i>
                        </a>
                    </div>
                    <div class="row-right">
                        <h6>R$ ${product.price}</h6>
                    </div>
                </div>
            `;
            produtosContainer.appendChild(row);
        });
        
        // Ocultar o botão "Ver Mais" se não houver mais produtos para carregar
        if (!data.hasMore) {
            document.getElementById('ver-mais').style.display = 'none';
        }
    } catch (error) {
        console.error('Erro:', error);
    }
});*/
