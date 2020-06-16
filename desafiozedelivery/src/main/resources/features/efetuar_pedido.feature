#language:pt
#Author: Jessica Alauk
#Version: 1.0
#Data: 17/06/2020
#Encoding: UTF-8

Funcionalidade: Efetuar Pedido

  Cenario: Efetuar pedido com sucesso
    Dado que eu queria efetuar um pedido
    Quando eu adicionar os produtos desejados
    E ir ate a sacola de compras
    E selecionar a forma de pagamento
    E finalizo a compra
    Entao meu pedido será efetuado com sucesso

  Cenario: Efetuar pedido com valor mínimo estipulado
    Dado que eu queria efetuar um pedido
    Quando eu adicionar os produtos desejados com valor abaixo do estipulado
    E ir ate a sacola de compras
    Entao o app nao habilita o botao de escolher forma de pagamento
    E informa qual valor está faltando para o valor minimo do pedido


