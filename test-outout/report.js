$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/truckToolsRentals.feature");
formatter.feature({
  "name": "Check out the truck and tools rental web site",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Check out the concrete grinder",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "url to the hoem page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepTruckToolsRentals.url_to_the_hoem_page()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: home page title fail expected [The Home Depot] but found [1The Home Depot]\n\tat org.testng.Assert.fail(Assert.java:97)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\n\tat org.testng.Assert.assertEquals(Assert.java:118)\n\tat org.testng.Assert.assertEquals(Assert.java:575)\n\tat stepDefinitions.stepTruckToolsRentals.url_to_the_hoem_page(stepTruckToolsRentals.java:27)\n\tat ✽.url to the hoem page(file:///Users/surajgurung/Documents/java/INTELLIJ/homedepot/Features/truckToolsRentals.feature:4)\n",
  "status": "failed"
});
formatter.step({
  "name": "go to the truck and rentals",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepTruckToolsRentals.go_to_the_truck_and_rentals()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "check the tital",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.stepTruckToolsRentals.check_the_tital()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "secoond test",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "given2 givenTwo",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepTruckToolsRentals.given2_givenTwo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "then2 thenTwo",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepTruckToolsRentals.then2_thenTwo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "and2 andTwo",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.stepTruckToolsRentals.and2_andTwo()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "third test",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "given3 givenThree",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepTruckToolsRentals.given3_givenThree()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "then3 ThenThree",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepTruckToolsRentals.then3_ThenThree()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "and3 andThree",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.stepTruckToolsRentals.and3_andThree()"
});
formatter.result({
  "status": "passed"
});
});