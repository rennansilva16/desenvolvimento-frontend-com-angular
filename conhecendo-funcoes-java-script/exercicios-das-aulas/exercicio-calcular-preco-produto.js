/*3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

Objetivo: Separar programa em funções
*/
function aplicarDesconto(precoEtiqueta, desconto) {
    return precoEtiqueta - (precoEtiqueta * desconto / 100);
};

function aplicarJuros(precoEtiqueta, juros) {
    return precoEtiqueta + (precoEtiqueta * juros / 100);
};

function escolherFormaDePagamento(precoEtiqueta, condicao) {
    if (condicao === 1) {
       return valorTotal = aplicarDesconto(precoEtiqueta, 10);
    } else if (condicao === 2) {
        return valorTotal = aplicarDesconto(precoEtiqueta, 15);
    } else if (condicao === 3) {
        return precoEtiqueta;
    } else {
        return valorTotal = aplicarJuros(precoEtiqueta, 10);
    }
};

function main(precoEtiqueta, condicaoDePagamento) {
    valorTotal = escolherFormaDePagamento(precoEtiqueta, condicaoDePagamento);
    console.log('O valor total do produto é ' + valorTotal);
};

main(100, 10);