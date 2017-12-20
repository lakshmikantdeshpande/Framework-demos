/*
    Assumption: chromedriver and geckodriver are placed in /usr/bin
 */

package practice;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class HelloWorld {

    private static String baseUrl = "https://www.google.co.in";

    public static void main(String[] args) throws InterruptedException {

        WebDriver webDriver = new FirefoxDriver();
        webDriver.get(baseUrl);
        Thread.sleep(2);
        webDriver.quit();

    }

}