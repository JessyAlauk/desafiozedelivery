package Pages;

import Utils.AppiumUtils;
import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import org.openqa.selenium.support.PageFactory;

import static org.junit.Assert.*;

public class Login extends AppiumUtils {

    @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"enter\"]")
    private MobileElement btnEntrar;

    @AndroidFindBy(xpath = "//android.widget.EditText[@content-desc=\"email\"]\n")
    private MobileElement txtEmail;

    @AndroidFindBy(xpath = "//android.widget.EditText[@content-desc=\"password\"]\n")
    private MobileElement txtSenha;

    @AndroidFindBy(xpath = "(//android.widget.TextView[@content-desc=\"message-error\"])[1]")
    private MobileElement messageEmail;

    @AndroidFindBy(xpath = "(//android.widget.TextView[@content-desc=\"message-error\"])[2]")
    private MobileElement messageSenha;

    public Login(){
        PageFactory.initElements(new AppiumFieldDecorator(getMobileDriver()), this);
    }

    public Login inserirEmail(String email){
        inserirTextoElemento(txtEmail,email);
        return this;
    }

    public Login inserirSenha(String senha){
        inserirTextoElemento(txtSenha, senha);
        return this;
    }

    public Login clicarBtnEntrar(){
        clicarElemento(btnEntrar);
        return this;
    }

    public Login validarMensagemEmailInvalido(){
        assertTrue(elementoEstaHabilitado(messageEmail));
        return this;
    }

    public Login validarMensagemSenhaInvalido(){
        assertTrue(elementoEstaHabilitado(messageSenha));
        return this;
    }


}
