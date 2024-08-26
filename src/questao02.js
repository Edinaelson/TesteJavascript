// Lista de produtos no estoque
const produtos = [
    { sku: 1001, nome: 'Camiseta', quantidade: 5 },
    { sku: 1002, nome: 'Calça', quantidade: 10 },
    { sku: 1003, nome: 'Vestido', quantidade: 3 }
];

// Função para verificar disponibilidade de um produto no estoque
function verificarDisponibilidade(sku, produtos) {
    // Procura o produto na lista pelo SKU
    const produtoEncontrado = produtos.find(produto => produto.sku === sku);
    
    // Verifica se o produto foi encontrado e se tem quantidade disponível
    if (produtoEncontrado && produtoEncontrado.quantidade > 0) {
        return true; // Produto disponível
    } else {
        return false; // Produto indisponível
    }
}

// Exemplo de uso
const skuBusca = 1002;
const disponivel = verificarDisponibilidade(skuBusca, produtos);

if (disponivel) {
    console.log("Produto disponível no estoque.");
} else {
    console.log("Produto indisponível no estoque.");
}
