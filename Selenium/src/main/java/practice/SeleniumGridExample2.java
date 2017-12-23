package practice;

import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import java.net.MalformedURLException;
import java.net.URL;

public class SeleniumGridExample2 {

    private WebDriver webDriver;
    private String baseURL, nodeURL;

    @BeforeClass
    public void setup() throws MalformedURLException {
        DesiredCapabilities desiredCapabilities = DesiredCapabilities.firefox();
        FirefoxOptions firefoxOptions = new FirefoxOptions();
        firefoxOptions.setHeadless(true);
        desiredCapabilities.setCapability(FirefoxOptions.FIREFOX_OPTIONS, firefoxOptions);
        desiredCapabilities.setPlatform(Platform.LINUX);

        baseURL = "https://www.google.com";
        nodeURL = "http://localhost:4444/wd/hub";

        webDriver = new RemoteWebDriver(new URL(nodeURL), desiredCapabilities);
    }

    @Test
    public void duplicateTest() {
        webDriver.get(baseURL);
        Assert.assertTrue(webDriver.getTitle().equals("Google"));
    }

    @AfterClass
    public void tearDown() {
        if (webDriver != null) {
            webDriver.quit();
        }
    }
}
