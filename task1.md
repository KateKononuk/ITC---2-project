Milestone 1

Features
<!-- Create a website that has a simple search input, with a search button -->
<!-- When the button is clicked, the website should load and present 10 search results from the company search in the Free Stock API, when searching in Nasdaq -->
<!-- The endpoint looks like this: https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=AA&limit=10&exchange=NASDAQ, where query=AA is where you put the input from the user
Present the result as a list to the user -->
<!-- Add loading indicator when making the search -->
<!-- Each item in the list should show the company name and symbol (AAPL for Apple) -->
<!-- Each item should link to /company.html?symbol=AAPL, where AAPL should be replaced with the company symbol you received from the API request.
Show loading indicator when searching. -->


Milestone 2

Features
<!-- In the project folder, create a new file called company.html - this where your browser will look for when you click a company link from the main page (index.html) -->
<!-- In this page, you should extract the symbol string from the url (for example, if the user clicked a link for /company.html?symbol=GOOG, you should have a variable in your JS code with “GOOG” as a string. -->
<!-- The information after the question mark in your url is called “query string” (sometimes it is called “query params” or “search”, but it means the same). To access it in your JavaScript you can follow this guide: Get Query String Parameters with JavaScript -->
  <!-- Then, get the company profile with the following endpoint: https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${symbol} where symbol is the company symbol extracted from the query params -->
<!-- Present the company information in the screen (no design provided, go wild), with the company image, name, description and link -->
<!-- Also, present the company stock price, and changes in percentages - if the change is negative, the changes in percentages should be in red, else in light green. -->
<!-- After that, you should fetch the history of stock price of the company, using the following endpoint: https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/historical-price-full/${symbol}?serietype=line -->
<!-- Use Chart.js | Open source HTML5 Charts for your website to present this data in a chart (read the documentation, understand how to use it, and how to pass the data from the stock price history endpoint) -->
<!-- Show loading indicator, when loading company data and stock price history. -->


Milestone 3

Features
<!-- Add extra information to search results - image and stock change (percentage) -->




\Milestone 4

Features
<!-- Create a marquee at the top of the main page showing current stock information -->
<!-- Search in the API docs (link in the summary), for the endpoint you need to use to get a list of companies and their current stock price -->
<!-- Animate the the marquee, to look like in a stock market (example below) -->
<!-- We recommend you will use keyframes and animation property in CSS, you can learn about it here animation	 -->
Also, add favicon to the website (you can look for icons online)
You can present only a subset of the items if the browser stuck when trying to present too many items
<!-- Do not use the <marquee> tag. (see the alert here: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/marquee) -->


