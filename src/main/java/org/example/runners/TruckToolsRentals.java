package org.example.runners;


import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(
        features = {"Features/truckToolsRentals.feature"},
        glue = {"stepDefinitions"},
        //tags= {"@bbc"},
        monochrome = true,
        dryRun = false,
        strict = true,
        plugin = {"pretty","html:test-outout","json:target/cucumber-reports/CucumberTestReport.json"})
public class TruckToolsRentals extends AbstractTestNGCucumberTests {
}
