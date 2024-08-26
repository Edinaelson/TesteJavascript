// Lista de itens vendidos
const itensVendidos = [
    { sku: 1001, quantidade: 2 },
    { sku: 1002, quantidade: 1 },
    { sku: 1003, quantidade: 5 }
];

// Estoque atual
const estoque = [
    { sku: 1001, quantidade: 5 },
    { sku: 1002, quantidade: 2 },
    { sku: 1003, quantidade: 5 }
];

// Função para atualizar o estoque após uma venda
function atualizarEstoque(itensVendidos, estoque) {
    // Percorre cada item vendido
    itensVendidos.forEach(itemVendido => {
        // Encontra o produto correspondente no estoque
        const produtoEstoque = estoque.find(produto => produto.sku === itemVendido.sku);

        // Se o produto foi encontrado no estoque, subtrai a quantidade vendida
        if (produtoEstoque) {
            produtoEstoque.quantidade -= itemVendido.quantidade;
        }
    });

    return estoque;
}

// Atualizando o estoque
const estoqueAtualizado = atualizarEstoque(itensVendidos, estoque);
console.log(estoqueAtualizado);
