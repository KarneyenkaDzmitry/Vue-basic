# Introduction to Vue.js


## The project has been made for step-by-step learning:

### Steps: 
1. Create new Vue instance and bind it to project.html by using css selector. Put value of product from vue-object between h1-tags by using mustache-brackets.
2. Add a description key to our existing data object with the value “A pair of warm, fuzzy socks”. Then display description using an expression in an p element, underneath the h1.
3. Add a link to your data object, and use v-bind to sync it up with an anchor tag in your HTML. Hint: you’ll be binding to the href attribute.
4. Add an onSale property to the product’s data that is used to conditionally render a span that says “On Sale!”.
5. Add an array of sizes to the data and use v-for to display them in a list.
6. Create a new button and method to decrement the value of cart.
7. Add color variants and set up a listener for moseover of color for changing image according to the color.
8. Change text of colors into colored styled boxes. 
9. If the product is out of stock, disable the add to Cart button.
10. Add feature: if button disabled incrementButton method shouldn't be run.
11. When inStock is false, bind a class to the “Out of Stock” span tag that adds text-decoration: line-through to that element.
12. Add computed property for title( brand plus productName).
13. Implement feature which will switch disability or ability of 'add to Cart' button and at the same time switch text between 'In Stock' and 'Out of Stock' in accordance to amount of things in stock.
14. Add a new boolean data property onSale and create a computed property that takes brand, product and onSale and prints out a string whenever onSale is true.
15. Rewrite the project using component.
16. The price should be displayed in accordance of a user's status. (premium - free, not - price)

<!-- ### Dependencies

The application needs to have the following dependencies:
1. npm --version 6.1.0
2. node --version 8.*.*

### Deploy

#### $ npm install

Before start the program is supposed to run the command [npm install].<br> 
It downloads needed modules and prepars the programm for starting.<br>
i.e. will be created folders : 'logs' and 'reports'.<br>
And will be run webdriver-manager update.

#### There is a list of modules and their versions:

    `"chai": "^4.1.2",
    "cucumber": "^5.0.1",
    "cucumber-json-reporter-to-html": "git+https://github.com/KarneyenkaDzmitry/cucumber-json-reporter-to-html.git",
    "protractor": "^5.4.0",
    "protractor-cucumber-framework": "^6.1.1",
    "winston": "^3.0.0",
    "yargs": "^12.0.2"`

## Structure 
### Folders: -->
<!-- 
<!DOCTYPE html>
<html lang="en" {IF CLASSES}class="classes"{/IF}>

<head>

  <meta charset="UTF-8">

  {IF PRIVATE}
  <meta name="robots" content="noindex">
  {ELSE}
  <!-- MIT License -->
  {/IF}

  <title>{TITLE}</title>

  {STUFF FOR <HEAD>}

  <link rel="stylesheet" href="{CSS RESET CHOICE}">
  {EXTERNAL CSS}
  <style>
  {EDITOR CSS}
  </style>

  {PREFIX FREE (if enabled)}
  {MODERNIZR (if enabled)}

</head>

<body>

  {EDITOR HTML}

  {JS Library (if chosen)}
  {EXTERNAL JS}

  <script>
    {EDITOR JS}
    //# sourceURL=pen.js
  </script>

</body>

</html> -->