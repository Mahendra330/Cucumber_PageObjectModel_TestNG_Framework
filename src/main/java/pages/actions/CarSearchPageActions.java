package pages.actions;

import org.openqa.selenium.By;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import pages.locators.CarSearchPageLocators;
import utils.SeleniumDriver;

public class CarSearchPageActions {

	// WebDriver driver=null;

	CarSearchPageLocators CarSearchPageLocators = null;  // Creating object and so we can access all elements

	public CarSearchPageActions() { // Creating constructor
		// this.driver=driver;
		this.CarSearchPageLocators = new CarSearchPageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), CarSearchPageLocators); // Initializing page factory
	}

	public void selectCarMaker(String carBrand) {

		SeleniumDriver.getDriver().findElement(By.xpath(".//*[@id='block-system-main']/div/div/div/div/div/form"))
				.click();
		Select selectCarMaker = new Select(CarSearchPageLocators.carMakerDropDown); //Here we have to select from Menu. So I am using select class here
		selectCarMaker.selectByVisibleText(carBrand);

	}

	public void selectCarModel(String carModel) {
		// SeleniumDriver.getDriver().findElement(By.xpath(".//*[@id='models']")).click();
		//SeleniumDriver.getDriver().findElement(By.xpath(".//*[@id='block-system-main']/div/div/div/div/div/form"))
				//.click();
		Select selectCarModel = new Select(CarSearchPageLocators.selectModelDropDown);
		selectCarModel.selectByVisibleText(carModel);
	}

	public void selectLocation(String location) {
		// SeleniumDriver.getDriver().findElement(By.xpath(".//*[@id='locations']")).click();
		SeleniumDriver.getDriver().findElement(By.xpath(".//*[@id='block-system-main']/div/div/div/div/div/form"))
				.click();
		Select selectLocation = new Select(CarSearchPageLocators.selectLocation);
		selectLocation.selectByVisibleText(location);
	}

	public void selectPrice(String price) {
		// SeleniumDriver.getDriver().findElement(By.xpath(".//*[@id='price-max']")).click();
		SeleniumDriver.getDriver().findElement(By.xpath(".//*[@id='block-system-main']/div/div/div/div/div/form"))
				.click();
		Select selectPrice = new Select(CarSearchPageLocators.priceList);
		selectPrice.selectByVisibleText(price);
	}

	public void clickOnFindMyNextCarButton() {
		SeleniumDriver.getDriver().findElement(By.xpath(".//*[@id='block-system-main']/div/div/div/div/div/form"))
				.click();
		CarSearchPageLocators.findMyNextCarButton.click();

	}

}
