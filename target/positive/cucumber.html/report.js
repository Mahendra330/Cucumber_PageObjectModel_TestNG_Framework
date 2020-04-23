$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SearchCars.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance testing to validate Search Cars Page is working.",
  "description": "In order to validate that \r\nthe Search Cars page is working\r\nDoing the Acceptance Testing",
  "id": "acceptance-testing-to-validate-search-cars-page-is-working.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Search-Cars"
    }
  ]
});
formatter.before({
  "duration": 10320094100,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Validate Search Cars Page",
  "description": "",
  "id": "acceptance-testing-to-validate-search-cars-page-is-working.;validate-search-cars-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Search-Cars-Positive"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on the Home Page \"https://www.carsguide.com.au\" of CarsGuide Website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I move to Car For Sale Menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ],
      "line": 11
    },
    {
      "cells": [
        "Cars For Sale"
      ],
      "line": 12
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "click on \"Search Cars\" link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "select carbrand as \"BMW\" from AnyMake dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "select  car model",
  "rows": [
    {
      "cells": [
        "carModel"
      ],
      "line": 16
    },
    {
      "cells": [
        "1 Series"
      ],
      "line": 17
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "select location as \"ACT - All\" from SelectLocation dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "select \"$1,000\" as price",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click on Find_My_Next_Car button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should see list of searched cars",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "the page title should be \"Bmw 1 Series Under 1000 for Sale ACT | carsguide\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au",
      "offset": 23
    }
  ],
  "location": "SearchCarsSteps.i_am_on_the_Home_Page_of_CarsGuide_Website(String)"
});
formatter.result({
  "duration": 2832405600,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_move_to_Car_For_Sale_Menu(String\u003e)"
});
formatter.result({
  "duration": 403032200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Cars",
      "offset": 10
    }
  ],
  "location": "SearchCarsSteps.click_on_link(String)"
});
formatter.result({
  "duration": 3374658100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 20
    }
  ],
  "location": "SearchCarsSteps.select_from_dropdown(String)"
});
formatter.result({
  "duration": 5336977700,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSearchSteps.select_car_model(String\u003e)"
});
formatter.result({
  "duration": 203151300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACT - All",
      "offset": 20
    }
  ],
  "location": "SearchCarsSteps.select_location_from_dropdown(String)"
});
formatter.result({
  "duration": 5319073800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$1,000",
      "offset": 8
    }
  ],
  "location": "SearchCarsSteps.select_price(String)"
});
formatter.result({
  "duration": 5309380600,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.click_on_Button()"
});
formatter.result({
  "duration": 7959095600,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_should_see_list_of_searched_cars()"
});
formatter.result({
  "duration": 121000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bmw 1 Series Under 1000 for Sale ACT | carsguide",
      "offset": 26
    }
  ],
  "location": "SearchCarsSteps.the_page_title_should_be(String)"
});
formatter.result({
  "duration": 71901200,
  "status": "passed"
});
formatter.after({
  "duration": 4800064600,
  "status": "passed"
});
formatter.uri("UsedCarSaleSearch.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance testing to validate Search Cars Page is working.",
  "description": "In order to validate that \r\nthe Used Search Cars page is working\r\nPerforming the Acceptance Testing",
  "id": "acceptance-testing-to-validate-search-cars-page-is-working.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Used-Car-Search"
    }
  ]
});
formatter.before({
  "duration": 9395907600,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Validate Used  Search Cars Page",
  "description": "",
  "id": "acceptance-testing-to-validate-search-cars-page-is-working.;validate-used--search-cars-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Used-Car-SearchPositive"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I navigate to the  Home Page \"https://www.carsguide.com.au\" of CarsGuide Website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I move to Car-For-Sale Menu",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "click on submenu Used Cars Search link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "select carMaker from AnyMake dropdown",
  "rows": [
    {
      "cells": [
        "carMaker"
      ],
      "line": 13
    },
    {
      "cells": [
        "Audi"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "select  car model",
  "rows": [
    {
      "cells": [
        "carModel"
      ],
      "line": 16
    },
    {
      "cells": [
        "A4"
      ],
      "line": 17
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "select location  from SelectLocation dropdown",
  "rows": [
    {
      "cells": [
        "location"
      ],
      "line": 19
    },
    {
      "cells": [
        "SA - All"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "select price",
  "rows": [
    {
      "cells": [
        "price"
      ],
      "line": 22
    },
    {
      "cells": [
        "$1,000"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click on Find_My_Car button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should see list of Used cars",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "the page title should match expected title  \"Used Audi A4 Under 1000 for Sale SA | carsguide\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au",
      "offset": 30
    }
  ],
  "location": "UsedCarSearchSteps.i_navigate_to_the_Home_Page_of_CarsGuide_Website(String)"
});
formatter.result({
  "duration": 3653761200,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSearchSteps.i_move_to_Car_For_Sale_Menu()"
});
formatter.result({
  "duration": 65156800,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSearchSteps.click_on_submenu_Used_Cars_Search_link()"
});
formatter.result({
  "duration": 2870927500,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSearchSteps.select_carMaker_from_AnyMake_dropdown(String\u003e)"
});
formatter.result({
  "duration": 436189900,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSearchSteps.select_car_model(String\u003e)"
});
formatter.result({
  "duration": 140539100,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSearchSteps.select_location_from_SelectLocation_dropdown(String\u003e)"
});
formatter.result({
  "duration": 163984500,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSearchSteps.select_price(String\u003e)"
});
formatter.result({
  "duration": 221442400,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSearchSteps.click_on_Find_My_Car_button()"
});
formatter.result({
  "duration": 2825213000,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSearchSteps.i_should_see_list_of_Used_cars()"
});
formatter.result({
  "duration": 69200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Audi A4 Under 1000 for Sale SA | carsguide",
      "offset": 45
    }
  ],
  "location": "UsedCarSearchSteps.the_page_title_should_match_expected_title(String)"
});
formatter.result({
  "duration": 68899800,
  "status": "passed"
});
formatter.after({
  "duration": 831762400,
  "status": "passed"
});
});