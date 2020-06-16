package Pages;

import Utils.AppiumUtils;
import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import org.openqa.selenium.support.PageFactory;

import static org.junit.Assert.*;

public class SelecionarLocalizacao extends AppiumUtils {

    @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"use my location button\"]/android.widget.TextView[2]")
    private MobileElement linkUsarMinhaLocalizacao;

    public SelecionarLocalizacao(){
        PageFactory.initElements(new AppiumFieldDecorator(getMobileDriver()), this);
    }

    public SelecionarLocalizacao validarSeLinkEstaNaTela(){
        assertTrue(elementoEstaHabilitado(linkUsarMinhaLocalizacao));
        return this;
    }
}
