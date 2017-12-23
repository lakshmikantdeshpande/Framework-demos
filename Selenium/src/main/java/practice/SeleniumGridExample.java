package practice;

import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import java.net.MalformedURLException;
import java.net.URL;

public class SeleniumGridExample {

    private WebDriver webDriver;
    private String baseURL, nodeURL;

    @BeforeClass
    public void setup() throws MalformedURLException {
        DesiredCapabilities desiredCapabilities = DesiredCapabilities.chrome();
        ChromeOptions chromeOptions = new ChromeOptions();
        chromeOptions.setHeadless(true);
        desiredCapabilities.setCapability(ChromeOptions.CAPABILITY, chromeOptions);
        desiredCapabilities.setPlatform(Platform.LINUX);

        baseURL = "https://www.google.com";
        nodeURL = "http://localhost:4444/wd/hub";

        webDriver = new RemoteWebDriver(new URL(nodeURL), desiredCapabilities);
    }

    @Test
    public void simpleTest() {
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
