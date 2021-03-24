# app-movie
A Movies/Series Listing Application is a React Powered Client-side application that provides users with 
the access to list of series and movies.

### Hosted Url
Heroku hosted link: https://demo-stream-app.herokuapp.com/


### Features

###### App Features
- Home Page to view popular titles - Popular Series and Movies
- View All Movies page 
- View All Series page 

### Technology
- HTML
- React Library
- CSS
- Styled Component


### Installation
- Clone the repo: Run git clone https://github.com/yomigeek/app-movie.git in the folder where you want the repo to be saved.
- Navigate into the newly created folder and install the dependencies using your command line: ```cd folder_name && npm install```
- Start the app in the development environment by using ```npm run dev``` and for production use ```npm run start```
- Make a ```GET``` request to ```http://localhost:3000``` or go to your browser and use the url ```http://localhost:3000```

### Questions:

###### How did you decide on the technical and architectural choices used as part of your solution?
1. In terms of folder structure, I followed a similar to Container-View/Presentational pattern, where the components
folder contains the presentational layer such as the navigation specific components like header, footer, like so, and the Pages includes all the various features/screens.
2. Further into the design/architectural pattern, the  CSS in JavaScript is in play here, where each component is built using the styled components design pattern as it allows room for dynamic css style naming and also flexible in crafting the element designs.
3. Components which are used across multiple pages are grouped under the common folder in the component folder.
4. Axios was used for making calls to the external JSON file containing the data

###### Are there any improvements you could make to your submission?
1. Yes, add test cases to assert the pages.
2. Integrate extra features for better user experience.

###### What would you do differently if you were allocated more time?
1. Add more features such as filter, search.
2. Integrate test suites for pages assertions such as snapshot testing


### Author
Made with <3 by Yomi Olaoye ;)
