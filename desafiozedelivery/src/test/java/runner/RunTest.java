package runner;


import Utils.AppiumUtils;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {
//                "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html",
                "pretty", "html:src/main/report",
                "json:src/main/report/cucumber.json",
                "junit:src/main/report/cucumber.xml"
        },
        features = {
                "src/main/resources"
        },
        glue = {
                "gluecode", "hooks"
        },

        tags = "@api"


)

public class RunTest {

    @BeforeClass
    public static void setUp() {


    }

    @AfterClass
    public static void tearDown() throws Exception {
        AppiumUtils.killallChromeDriver();

    }
}
