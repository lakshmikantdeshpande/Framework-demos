package practice;

import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import java.net.MalformedURLException;
import java.net.URL;

public class SeleniumGridExample {

    private WebDriver webDriver;
    private String baseURL, nodeURL;

    @BeforeTest
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
    public void simpleTest() throws InterruptedException {
        webDriver.get(baseURL);
        Thread.sleep(2000);
        Assert.assertTrue(webDriver.getTitle().equals("Google"));
    }

    @AfterTest
    public void tearDown() {
        if (webDriver != null) {
            webDriver.quit();
        }
    }
}
