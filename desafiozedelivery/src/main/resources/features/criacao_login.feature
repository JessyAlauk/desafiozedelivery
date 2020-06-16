#language:pt
#Author: Jessica Alauk
#Version: 1.0
#Data: 17/06/2020
#Encoding: UTF-8

  Funcionalidade: Criação de login

    Cenario: Validar criação do login com sucesso
      Dado que eu esteja na tela inicial do app Ze Delivery
      E queira criar uma nova conta
      Quando preencho os campos solicitados "nome_sobrenome", "email", "senha", "cpf", "telefone", "idade"
      E clico em Continuar
      E valido a conta
      Entao uma nova conta foi criada com sucesso

    Cenario: Validar criação do login com sucesso - Facebook
      Dado que eu esteja na tela inicial do app Ze Delivery
      E queira criar uma nova conta
      Quando Clico no botao Entrar com Facebook
      E confirmo as permissoes no Facebook
      E clico em Continuar
      E valido a conta
      Entao uma nova conta foi criada com sucesso