# GitHubUserInterface

An app where a normal user can search any github repository user and have a look at repository of selected user.
A list of user and repository will be fetched from  APIs.

The list is showing 20 repos at a time, but able to scroll through all, without fetching all at once.
Scrollbar is not using any existing library. Its a custom made scrollbar :)
Application is only using basic styling but obviously UI can be improved further.

I have saved all urls in url.js file.

## infinite scroll
steps to implement scroll

1) When user scrolls down the list of repository and arrives at last element of list,  have stored the current position of scrollTop.
2) At the same time data for next page is fetched from service and appended to existing list of repository
3) when final view is rendered, have set scrollTop back to previously stored position.
this gives an illusion of infinite scroll to user.

### Pagination

Have also implemented pagination on user search to provide the difference between pagination and scroll. 

## Stack information

Front end - HTML5, LESS, ES6, Bootstrap library(3+) , React, Redux, lodash, axios etc
Module binder(task runner) - Webpack

API - GitHub API v3 
EX : 1) to fetch users : https://api.github.com/search/users?q=David&page=1&per_page=12
2) to fetch repositories: https://api.github.com/users/davidfowl/repos?page=1&per_page=20

#### to run code locally
open  terminal window and install all client dependencies:
Navigate to the application root directory and run:
```shell
npm install
```
After all installations are finished, run client with command:
```shell
npm start
```
Then open your app on http://localhost:8080

##### Attaching screenshot for your references