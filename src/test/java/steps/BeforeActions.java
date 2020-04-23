package steps;

import java.io.IOException;

import cucumber.api.java.Before;
import utils.SeleniumDriver;

public class BeforeActions  {
	

	@Before   // Define Hook
	
    public static void setUp() throws IOException {
		//ExtentCucumberFormatter.initiateExtentCucumberFormatter();
    	System.out.println("Before");
       SeleniumDriver.setUpDriver();  // This will setup driver and then selenium driver object will be created and then chrome driver will be initialized.
       
	
	}
}
