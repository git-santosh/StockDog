# Angular.js StockDog Application

Building a simple Angular.js application.
## Getting Started  

### Prerequisites   
You need to set up basic node.js installation.
    

### Installing
Front End side npm commands for Angular to get start with project.
```    
npm install -g yo  
npm install –g grunt-cli
npm install –g bower
npm install –g generator-angular@0.9.8
npm install -g generator-karma

```
Bower commands for get start with project
```
bower install angular-strap#v2.1.0 –save
bower install lodash ––save

```
After installation of all required packages you need to hit a command of yoman 

``` 
yo angular StockDog
yo angular:service Watchlist-Service
yo angular:directive stk-Watchlist-Panel
yo angular:route dashboard
yo angular:route watchlist ––uri=watchlist/:listId
yo angular:controller Main
```

## Running the tests
Go to your current working directory and hit ```grunt serve```
This launches the local development server configured by Yeoman during the scaffolding process
and opens the current skeleton application within a new tab inside your default browser.
 ``` http://localhost:9000/#/ ``` 
