package Pages;

import Utils.AppiumUtils;
import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import org.openqa.selenium.support.PageFactory;

public class TelaInicial extends AppiumUtils {

    @AndroidFindBy(xpath = "//android.widget.TextView[@content-desc=\"already-have-an-account\"]")
    private MobileElement btnEntrar;

    @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"create-account\"]")
    private MobileElement btnCriarUmaConta;

    public TelaInicial(){
        PageFactory.initElements(new AppiumFieldDecorator(getMobileDriver()), this);
    }

    public TelaInicial clicarBotaoCriarUmaConta(){
        clicarElemento(btnCriarUmaConta);
        return this;
    }

    public TelaInicial clicarBotaoEntrar(){
        clicarElemento(btnEntrar);
        return this;
    }


}
