<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="Travel_advisor" />

  &#xa0;

  <!-- <a href="https://travel_advisor.netlify.app">Demo</a> -->
</div>

<h1 align="center">Travel Advisor</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/cynthiachiu/travel_advisor?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/cynthiachiu/travel_advisor?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/cynthiachiu/travel_advisor?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/cynthiachiu/travel_advisor?color=56BEB8">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/cynthiachiu/travel_advisor?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/cynthiachiu/travel_advisor?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/cynthiachiu/travel_advisor?color=56BEB8" /> -->
</p>

<!-- Status -->

<!-- <h4 align="center"> 
	🚧  Travel_advisor 🚀 Under construction...  🚧
</h4> 

<hr> -->

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/cynthiachiu" target="_blank">Author</a>
</p>

<br>

## :dart: About ##

Finds and visualizes the surrounding restaurants, hotels, and attractions based on your location and specified locations in real-time, using markers, popups, and supplementary information accurately. When you first load the page, allow the browser to detect your location. 

![Alt Text](./demo.gif)

You can interact with the map in real-time by dragging the map and seeing the surrounding attractions appear in the map. You can also search a particular address or city in the search bar, and the map automatically adjust to that region. Clicking on a particular marker will bring up the corresponding information in a popup and scroll to a card on the left-hand side with further details.

![Alt Text](./demo_640.gif)

## :sparkles: Features ##

:heavy_check_mark: Real-time mapping using LeafletJS;\
:heavy_check_mark: Location-based queries to find and visualize nearby restaurants, hotels, and attractions;\
:heavy_check_mark: Ability to change locations and interact directly with the map via dragging and zooming;\
:heavy_check_mark: Searchbar to search and find locations with autocomplete;\
:heavy_check_mark: Filter results by ratings;

## :rocket: Technologies ##

The following tools were used in this project:

- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [Leaflet](https://leafletjs.com/)
- [Geosearch](https://www.npmjs.com/package/leaflet-geosearch)
- [MaterialUI](https://mui.com/)
- [RapidAPI](https://rapidapi.com/)

## :white_check_mark: Requirements ##

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone https://github.com/cynthiachiu/travel_advisor

# Sign up with RapidAPI and subscribe to the Travel Advisor API. An API key will be created for you

# Create a .env file following the .env.example and enter your API key

# Access
$ cd travel_advisor

# Install dependencies
$ npm install

# Run the project
$ npm start

# The server will initialize in the <http://localhost:3000>

# The browser will ask you to allow it to detect you location, click ALLOW and proceed
```

## :memo: License ##

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.


Made with :heart: by <a href="https://github.com/cynthiachiu" target="_blank">cynthiachiu</a>

&#xa0;

<a href="#top">Back to top</a>
