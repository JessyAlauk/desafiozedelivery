$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/features/login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@mobile"
    }
  ]
});
formatter.scenario({
  "name": "Efetuar login com sucesso",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@mobile"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu esteja na tela inicial do app Ze Delivery",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginStep.que_eu_esteja_na_tela_inicial_do_app_Ze_Delivery()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em Entrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginStep.clicar_em_Entrar()"
});
formatter.result({
  "error_message": "org.openqa.selenium.StaleElementReferenceException: androidx.test.uiautomator.StaleObjectException\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MacBook-Air-de-Yaman-5.local\u0027, ip: \u0027fe80:0:0:0:c31:77b3:3761:786d%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002712.0.1\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {appActivity: com.cerveceriamodelo.modelo..., appPackage: com.cerveceriamodelo.modelonow, autoGrantPermissions: true, automationName: UiAutomator2, databaseEnabled: false, desired: {appActivity: com.cerveceriamodelo.modelo..., appPackage: com.cerveceriamodelo.modelonow, autoGrantPermissions: true, automationName: UiAutomator2, deviceName: ce10182a4b20551403, newCommandTimeout: 60000, platformName: android, platformVersion: 9, resetKeyboard: true, unicodeKeyboard: true}, deviceApiLevel: 28, deviceManufacturer: samsung, deviceModel: SM-G950F, deviceName: ce10182a4b20551403, deviceScreenDensity: 480, deviceScreenSize: 1080x2220, deviceUDID: ce10182a4b20551403, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, newCommandTimeout: 60000, pixelRatio: 3, platform: LINUX, platformName: Android, platformVersion: 9, resetKeyboard: true, statBarHeight: 72, takesScreenshot: true, unicodeKeyboard: true, viewportRect: {height: 2004, left: 0, top: 72, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 23ed772c-1dc3-4e1b-b9ed-2244e78a9fca\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat io.appium.java_client.DefaultGenericMobileElement.execute(DefaultGenericMobileElement.java:45)\n\tat io.appium.java_client.MobileElement.execute(MobileElement.java:1)\n\tat io.appium.java_client.android.AndroidElement.execute(AndroidElement.java:1)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat io.appium.java_client.pagefactory.ElementInterceptor.getObject(ElementInterceptor.java:40)\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:60)\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.click(\u003cgenerated\u003e)\n\tat Utils.AppiumUtils.clicarElemento(AppiumUtils.java:99)\n\tat Pages.TelaInicial.clicarBotaoEntrar(TelaInicial.java:27)\n\tat gluecode.LoginStep.clicar_em_Entrar(LoginStep.java:29)\n\tat ✽.clicar em Entrar(file:src/main/resources/features/login.feature:12)\n",
  "status": "failed"
});
formatter.step({
  "name": "informar email \"jessica.alauk@hotmail.com\" e senha \"Jessy0406@\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginStep.informar_email_e_senha(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "eu irei logar no app com sucesso",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginStep.eu_irei_logar_no_app_com_sucesso()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Efetuar login com dados invalidos",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@mobile"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu esteja na tela inicial do app Ze Delivery",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginStep.que_eu_esteja_na_tela_inicial_do_app_Ze_Delivery()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em Entrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginStep.clicar_em_Entrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar email \"email\" e senha \"senha\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginStep.informar_email_e_senha(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Located by By.chained({By.xpath: //android.widget.EditText[@content-desc\u003d\"email\"]\n}) (tried for 60 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat Utils.AppiumUtils.aguardaElementoHabilitado(AppiumUtils.java:89)\n\tat Utils.AppiumUtils.inserirTextoElemento(AppiumUtils.java:109)\n\tat Pages.Login.inserirEmail(Login.java:33)\n\tat gluecode.LoginStep.informar_email_e_senha(LoginStep.java:34)\n\tat ✽.informar email \"email\" e senha \"senha\"(file:src/main/resources/features/login.feature:19)\nCaused by: org.openqa.selenium.NoSuchElementException: Can\u0027t locate an element by this strategy: By.chained({By.xpath: //android.widget.EditText[@content-desc\u003d\"email\"]\n})\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:126)\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:59)\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.isDisplayed(\u003cgenerated\u003e)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\n\tat Utils.AppiumUtils.aguardaElementoHabilitado(AppiumUtils.java:89)\n\tat Utils.AppiumUtils.inserirTextoElemento(AppiumUtils.java:109)\n\tat Pages.Login.inserirEmail(Login.java:33)\n\tat gluecode.LoginStep.informar_email_e_senha(LoginStep.java:34)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:45)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:122)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:64)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:131)\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\nCaused by: org.openqa.selenium.TimeoutException: Expected condition failed: waiting for io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction@46292372 (tried for 1 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:304)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.waitFor(AppiumElementLocator.java:99)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:119)\n\t... 51 more\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.chained({By.xpath: //android.widget.EditText[@content-desc\u003d\"email\"]\n})\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MacBook-Air-de-Yaman-5.local\u0027, ip: \u0027fe80:0:0:0:c31:77b3:3761:786d%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002712.0.1\u0027\nDriver info: driver.version: AndroidDriver\n\tat io.appium.java_client.pagefactory.bys.builder.ByChained.findElement(ByChained.java:74)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat io.appium.java_client.pagefactory.bys.ContentMappedBy.findElement(ContentMappedBy.java:50)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.lambda$0(AppiumElementLocator.java:120)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:172)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:1)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\n\t... 53 more\n",
  "status": "failed"
});
formatter.step({
  "name": "o app deve retornar erro informando que os dados estao incorretos",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginStep.o_app_deve_retornar_erro_informando_que_os_dados_estao_incorretos()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Efetuar login com dados em branco",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@mobile"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu esteja na tela inicial do app Ze Delivery",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginStep.que_eu_esteja_na_tela_inicial_do_app_Ze_Delivery()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em Entrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginStep.clicar_em_Entrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar email \"\" e senha \"\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginStep.informar_email_e_senha(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o app deve retornar erro informando que os dados precisam ser preenchidos",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginStep.o_app_deve_retornar_erro_informando_que_os_dados_precisam_ser_preenchidos()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});