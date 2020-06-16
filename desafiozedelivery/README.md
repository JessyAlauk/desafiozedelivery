# Desafio Zé Delivery [ Mobile ]

Este projeto tem como objetivo automatizar a funcionalidade escolhida no desafio Zé Delivery

## Início

## Entendendo a arquitetura do framework

Package com as `.features` :
> ../src/main/resources/features/*

Package com os `Steps` :
> ../src/test/java/gluecode/*

Package com as `Pages` :
> ../src/main/pages/*

**Runner do Cucumber :** RunTest.java

> ../src/test/java/runner/RunTest.java

Editar no `Runner` a tag com o ID do CT ou da suíte desejada antes de executá-lo. 

Tags:

@login
@api

## Massa de dados

Editar na feature a massa de dados a ser utilizada. Os campos onde serão inseridas estão com aspas duplas.

Exemplo:

Quando eu informar o login "login" <- o campo "login" será o email a ser informado no teste.

## Pré Condições

Instale o apk que se encontra no caminho no celular onde será efetuado o teste: 
>../src/APK/ZeDelivery_com.cerveceriamodelo.modelonow.apk

## Tecnologias utilizadas

* [Maven](https://maven.apache.org/) - Dependency Management
* [Appium](http://appium.io/) - Open Source Mobile Test Framework
* [REST-assured](http://rest-assured.io/) - Serviços REST em Java
* [Cucumber](https://cucumber.io/) - BDD
* [JUnit](https://junit.org/junit5) - Framework Test para Java

## Versionamento

Foi utilizado [GIT](https://github.com/) para versionamento.  

