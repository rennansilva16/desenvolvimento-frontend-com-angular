/*3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
let produto = 'Chinela';
let precoProduto = 10;
let formaDePagamentoAVista = 'Debito';
let formaDePagamentoParcelado = 2;
let valorTotal = 0;

if (formaDePagamentoAVista === 'Debito') {
    valorTotal = precoProduto - (precoProduto * 10 / 100);
} else if (formaDePagamentoAVista != 'Debito') {
    valorTotal = precoProduto - (precoProduto * 15 / 100);
} else if (formaDePagamentoParcelado <= 2) {
    valorTotal = precoProduto
} else if (formaDePagamentoParcelado >= 3) {
    valorTotal = precoProduto + (precoProduto * 10 / 100);
}
console.log('O valor Total e: ', valorTotal.toFixed(2));