#language:pt
#Author: Jessica Alauk
#Version: 1.0
#Data: 17/06/2020
#Encoding: UTF-8

@api
Funcionalidade: Current Weather

  Esquema do Cenario: Consultar clima atual
    Dado que eu queria consultar o clima
    Quando informo a cidade "<cidade>"
    Entao o clima da cidade eh informado
    E deve retornar o status "<status>"

    Exemplos:
    |cidade    |status|
    |Sao Paulo |200   |
#    |London    |200   |
#    |Tokio     |200   |
    |teste     |404   |