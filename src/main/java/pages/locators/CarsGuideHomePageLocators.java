package pages.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class CarsGuideHomePageLocators {
	
	
	@FindBy(how=How.XPATH,using="//a[contains(.,'buy + sell')]")
	public WebElement carsForSaleLink;
	
	@FindBy(how=How.XPATH,using="(//a[contains(.,'Sell my car')])[2]")
	public WebElement sellMyCarLink;
	
	@FindBy(how=How.LINK_TEXT,using="Car Reviews")
	public WebElement carReviewsLink;
	
	@FindBy(how=How.XPATH,using="//a[contains(.,'Search Cars')]")
	public WebElement searchCarsLink;
	
	@FindBy(how=How.XPATH,using="((//a[contains(.,'Used')])[1])")
	public WebElement usedSearchCarsLink;

}
