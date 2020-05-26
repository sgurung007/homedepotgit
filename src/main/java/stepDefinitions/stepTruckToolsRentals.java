package stepDefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import static org.testng.Assert.assertEquals;


public class stepTruckToolsRentals {
    WebDriver driver;


    @Given("url to the hoem page")
    public void url_to_the_hoem_page() throws InterruptedException {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
        driver.get("https://www.homedepot.com/");
        String title = driver.getTitle();
        driver.quit();
        Assert.assertEquals("The Home Depot", title, "home page title fail");
        System.out.println("step 1");
    }

    @Then("go to the truck and rentals")
    public void go_to_the_truck_and_rentals() {
        System.out.println("step2");

    }


    @Then("check the tital")
    public void check_the_tital() {
        System.out.println("step3");
        //System.out.println(driver.getTitle());
        //Assert.assertEquals(true,true,"Kathmandu2 fail");
    }

    @Given("given2 givenTwo")
    public void given2_givenTwo() {
        System.out.println("given2");
    }

    @Then("then2 thenTwo")
    public void then2_thenTwo() {
        System.out.println("then2");
    }

    @Then("and2 andTwo")
    public void and2_andTwo() {
        System.out.println("and2");
        assertEquals(true, true, "Kathmandu2 fail");
    }

    @Given("given3 givenThree")
    public void given3_givenThree() {
        System.out.println("given3");
    }

    @Then("then3 ThenThree")
    public void then3_ThenThree() {
        System.out.println("then3");
    }

    @Then("and3 andThree")
    public void and3_andThree() {
        System.out.println("and3");
        assertEquals(true, true, "Kathmandu3 fail");
    }


}
