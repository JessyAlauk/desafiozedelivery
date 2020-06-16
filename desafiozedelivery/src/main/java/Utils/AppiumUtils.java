package Utils;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

public class AppiumUtils {

    private static AndroidDriver<MobileElement> mobileDriver;
    private final static int timeOut = 60;
    private static WebDriverWait wait;

    public static void inicializaApp() {

        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability("deviceName", getDeviceSerialNumber());
        capabilities.setCapability(CapabilityType.PLATFORM_NAME, "Android");
        capabilities.setCapability("platformVersion", getAndroidVersionDevice());
        capabilities.setCapability("appPackage", "com.cerveceriamodelo.modelonow");
        capabilities.setCapability("appActivity", "com.cerveceriamodelo.modelonow.MainActivity");
        capabilities.setCapability("automationName", "UiAutomator2");
        capabilities.setCapability("newCommandTimeout", 60000);
        capabilities.setCapability("autoGrantPermissions", true);
        capabilities.setCapability("unicodeKeyboard", true);
        capabilities.setCapability("resetKeyboard", true);
        try {
            mobileDriver = new AndroidDriver<MobileElement>(new URL("http://0.0.0.0:4723/wd/hub"), capabilities);
            mobileDriver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        } catch (MalformedURLException e) {

            System.out.println(e.getMessage());
            e.printStackTrace();
        }

    }

    public static void closeAppium() {
        mobileDriver.quit();
    }

    public static AndroidDriver getMobileDriver(){
        return mobileDriver;
    }


    public static String getAndroidVersionDevice() {
        String s = null;
        try {
            Process p = Runtime.getRuntime().exec("adb shell getprop | grep ro.build.version.release");
            BufferedReader stdInput = new BufferedReader(new InputStreamReader(p.getInputStream()));
            s = stdInput.readLine();

        } catch (IOException e1) {
            e1.printStackTrace();
        }
        return s.trim().replace("[ro.build.version.release]: [", "").replace("]", "");
    }


    public static String getDeviceSerialNumber() {
        String s = null;
        try {
            Process p = Runtime.getRuntime().exec("adb shell getprop | grep ro.boot.serialno");
            BufferedReader stdInput = new BufferedReader(new InputStreamReader(p.getInputStream()));
            s = stdInput.readLine();

        } catch (IOException e1) {
            e1.printStackTrace();
        }
        return s.trim().replace("[ro.boot.serialno]: [", "").replace("]", "");
    }

    //Comandos

    public static void aguardaElementoHabilitado(MobileElement element) {
        wait = new WebDriverWait(mobileDriver, timeOut);
        wait.until(ExpectedConditions.visibilityOf(element));
    }

    public static void aguardarElementoClicavel(MobileElement element){
        wait = new WebDriverWait(mobileDriver, timeOut);
        wait.until(ExpectedConditions.elementToBeClickable(element));
    }

    public static void clicarElemento(MobileElement elemento){
        aguardarElementoClicavel(elemento);
        elemento.click();
    }

    public static void clicarXpath(String xpath){
        wait = new WebDriverWait(mobileDriver, timeOut);
        WebElement elemento = wait.until(ExpectedConditions.elementToBeClickable(By.xpath(xpath)));
        elemento.click();
    }

    public static void inserirTextoElemento(MobileElement elemento, String texto){
        aguardaElementoHabilitado(elemento);
        elemento.clear();
        elemento.sendKeys(texto);
    }

    public static void killallChromeDriver() throws IOException {
        String sistemaOperacional = System.getProperty("os.name");
        if (sistemaOperacional.equalsIgnoreCase("mac os x")) {
            Runtime.getRuntime().exec(new String[]{"/bin/bash", "-l", "-c", "killall chromedriver"});
        }
        else if (sistemaOperacional.equalsIgnoreCase("linux")) {
            Runtime.getRuntime().exec(new String[]{"ps","aux","killall chromedriver"});
        }
        else {
            Runtime.getRuntime().exec(new String[]{"powershell", "-c", "tskill chromedriver"});
        }
    }

    public boolean elementoEstaHabilitado(MobileElement elemento) {
        aguardaElementoHabilitado(elemento);
        return elemento.isEnabled();
    }
}
