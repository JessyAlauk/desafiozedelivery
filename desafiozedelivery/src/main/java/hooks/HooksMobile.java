package hooks;


import cucumber.api.java.After;
import cucumber.api.java.Before;
import Utils.AppiumUtils;


public class HooksMobile {

    @Before(value = "@mobile")
    public void beforeMobile() {
        AppiumUtils.inicializaApp();
    }

    @After(value = "@mobile")

    public void afterMobile() {
        AppiumUtils.closeAppium();
    }

}