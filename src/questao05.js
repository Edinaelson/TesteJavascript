// Lista de vendas
const vendas = [
    { sku: 1001, quantidade: 2, valorTotal: 50.00, data: '2021-01-01' },
    { sku: 1002, quantidade: 1, valorTotal: 20.00, data: '2021-01-01' },
    { sku: 1003, quantidade: 5, valorTotal: 100.00, data: '2021-01-02' },
    { sku: 1001, quantidade: 1, valorTotal: 25.00, data: '2021-01-02' }
];

// Função para gerar o relatório de vendas
function gerarRelatorioVendas(vendas, dataInicio, dataFim) {
    // Filtrar vendas dentro do período
    const vendasFiltradas = vendas.filter(venda => {
        const dataVenda = new Date(venda.data);
        return dataVenda >= new Date(dataInicio) && dataVenda <= new Date(dataFim);
    });

    // Agrupar resultados por SKU
    const relatorio = vendasFiltradas.reduce((acc, venda) => {
        if (!acc[venda.sku]) {
            acc[venda.sku] = {
                sku: venda.sku,
                quantidadeVendida: 0,
                valorTotalVendido: 0
            };
        }
        acc[venda.sku].quantidadeVendida += venda.quantidade;
        acc[venda.sku].valorTotalVendido += venda.valorTotal;

        return acc;
    }, {});

    // Calcular o valor total vendido no período
    const valorTotalPeriodo = vendasFiltradas.reduce((acc, venda) => acc + venda.valorTotal, 0);

    return {
        totalPorSKU: Object.values(relatorio),
        valorTotalPeriodo: valorTotalPeriodo.toFixed(2)
    };
}

// Exemplo de uso
const dataInicio = '2021-01-01';
const dataFim = '2021-01-02';

const relatorio = gerarRelatorioVendas(vendas, dataInicio, dataFim);
console.log(relatorio);
