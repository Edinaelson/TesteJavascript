function calcularValorTotalFinanciamento(valorParcela, numParcelas, taxaJurosMensal) {
    // Convertendo a taxa de juros de porcentagem para decimal
    const i = taxaJurosMensal / 100;

    // Aplicando a fórmula
    const valorTotal = valorParcela * ((Math.pow(1 + i, numParcelas) - 1) / i);

    return valorTotal.toFixed(2); // Retornando o valor total com duas casas decimais
}

// Exemplo de uso:
const valorParcela = 100; // Valor da parcela
const numParcelas = 12; // Quantidade de parcelas
const taxaJurosMensal = 2; // Taxa de juros mensal em %

const totalAPagar = calcularValorTotalFinanciamento(valorParcela, numParcelas, taxaJurosMensal);
console.log("Valor total a ser pago: R$ " + totalAPagar);
