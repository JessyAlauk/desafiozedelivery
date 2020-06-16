#language:pt
#Author: Jessica Alauk
#Version: 1.0
#Data: 15/06/2020
#Encoding: UTF-8

  @login @mobile
  Funcionalidade: Login

    Cenario: Efetuar login com sucesso
      Dado que eu esteja na tela inicial do app Ze Delivery
      Quando clicar em Entrar
      E informar email "jessica.alauk@hotmail.com" e senha "Jessy0406@"
      Entao eu irei logar no app com sucesso

    Cenario: Efetuar login com dados invalidos
      Dado que eu esteja na tela inicial do app Ze Delivery
      Quando clicar em Entrar
      E informar email "email" e senha "senha"
      Entao o app deve retornar erro informando que os dados estao incorretos

    Cenario: Efetuar login com dados em branco
      Dado que eu esteja na tela inicial do app Ze Delivery
      Quando clicar em Entrar
      E informar email "" e senha ""
      Entao o app deve retornar erro informando que os dados precisam ser preenchidos


