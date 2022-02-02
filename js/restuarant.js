// import keys from './apikeys';
// import {mapsJsKey, geocodeKey} from "./apikeys.js";

//geocodeKey = "AIzaSyBW7U1_AI9SepPAOaT3gQGPaFYEoIwwn9I" JUNJIE GOOGLE API (not work)
geocodeKey = "AIzaSyATpxOUw9zQ_zM7ZoygDMWTvIjJoG2BcM4"


const italian = document.getElementById('italian');
const mexican = document.getElementById('mexican');
const japanese = document.getElementById('japanese');
const middleEastern = document.getElementById('middle-eastern');
const indian = document.getElementById('indian');

const textBox = document.getElementById('user-input');
const zipCodeBtn = document.getElementById('search-zipcode');
const gMap = document.getElementById('google-map');





//junjieAdd~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var restName = [];
var restAddress = [];

var restNameGet = [];
var restAddressGet = [];

function get() {
  restNameGet = JSON.parse(localStorage.getItem("restName"));
  restAddressGet = JSON.parse(localStorage.getItem("restAddress"));
}
get()

function restShow() {
  if (restNameGet === null) {
    return;
  }

  //junjie add -------------------------------------------------------------------------------------------------
  for (var i = 0; i < restNameGet.length; i++) {
    $("<p>").text(restNameGet[i]+ "---" + restAddressGet[i]).addClass("saveName flow-text").appendTo(".menu-content")
  }


}
restShow()

//junjieAdd~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~







//listen for submit zip code 

zipCodeBtn.addEventListener('click', geoCode);


//geocoding hard coding 

function geoCode(e) {
  let zipCode = textBox.value;
  //prevent submit 
  e.preventDefault();

  let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=` + geocodeKey;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      //log full response
      ZipCodetoLatlong(data.results[0].geometry.location.lat, data.results[0].geometry.location.lng);

      console.log('text-box value=', textBox.value)
      console.log(data)
      console.log('zip code entered=', data.results[0].address_components[0].long_name);
      console.log('lat', data.results[0].geometry.location.lat);
      console.log('long', data.results[0].geometry.location.lng);
    })
    .catch(err => console.warn(err.message));

  //let formattedZipCode = data.results[0].address_components[0].long_name;

  //junjie add -------------------------------------------------------------------------------------------------


  //junjie add -------------------------------------------------------------------------------------------------



}
//junjie add -------------------------------------------------------------------------------------------------
var restNameSave = []
//junjie add -------------------------------------------------------------------------------------------------

let ZipCodetoLatlong = function (lat, long) {

  var location = new google.maps.LatLng(lat, long);

  var request = {
    location: location,
    radius: '500',
    type: ['restaurant']
  };

  let service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);

  function callback(results) {
    console.log(results)



    //junjie add -------------------------------------------------------------------------------------------------
    $(".menu-content").remove();
    $("<div>").addClass("menu-content").appendTo(".menu")
    restNameSave = results

    for (var i = 0; i < restNameSave.length; i++) {
      $("<p>").text(restNameSave[i].name + "---" + restNameSave[i].vicinity).addClass("saveName flow-text").appendTo(".menu-content")


      restName.push(restNameSave[i].name)
      localStorage.setItem('restName', JSON.stringify(restName))


      restAddress.push(restNameSave[i].vicinity)
      localStorage.setItem('restAddress', JSON.stringify(restAddress))
    }
    //junjie add -------------------------------------------------------------------------------------------------

  }

};







//get dropdown list values

function getSelectedValue() {
  let selectedValue = document.getElementById('dropdown1').value;
  //console.log(selectedValue);
}

//dropdown button 

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var options = {};
  var instances = M.Dropdown.init(elems, options);
});

let zipValue = [];
let cuisineValue = [];

let zipCodeAndCuisine = function () {

  let addZipCode = function (event) {
    let zipCode = {
      location: textBox.value
    }

    zipValue.push(zipCode);

    //console.log(zipValue);

  };
  addZipCode();

  let addCuisine = function (event) {

    let cuisineContent = {
      cuisine: '2'
    }
    cuisineValue.push(cuisineContent);
    // console.log(cuisineValue);

  }
  addCuisine();
}

//conditional to make sure user chooses a valid zip code and cuisine

let validZipCodeChecker = function () {

  textBox.addEventListener('click', function () {

    if (isNaN(textBox.value)) {
      //console.log('this is not a number');
    } else {
      //console.log('this is a number');
    }
  });
}
validZipCodeChecker();

//conditionals checking for what food type you choose 

let optionsClick = function () {

  italian.addEventListener('click', function () {
    if (this) {
      console.log('you choose italian food');
      cuisineValue.push()
      //call displayItalian();
    }
  });
  mexican.addEventListener('click', function () {
    if (this) {
      console.log('you choose mexican food');

      //call displayMexican();
    }
  });
  japanese.addEventListener('click', function () {
    if (this) {
      console.log('you choose japanese food');
    }

    //call displayJapanese();
  });
  middleEastern.addEventListener('click', function () {
    if (this) {
      console.log('you choose middleEastern food');
    }

    //call displayMiddleEastern();
  });
  indian.addEventListener('click', function () {
    if (this) {
      console.log('you choose indian food');
    }

    //call displayIndian();
  });

};

optionsClick();


//conditionals on url queries 


//listen for zip code button search
let searchZipCode = function () {

  zipCodeBtn.addEventListener('click', function () {
    //console.log('clicked');
    zipCodeAndCuisine();

    //fetchGoogleAPI();
  })
};
searchZipCode();

//listen for map click
google.maps.event.addListener(map, 'click', function (event) {
  console.log('map clicked');
});


//fetch Google api hard code

let fetchGoogleAPI = function () {

  fetch('https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyATpxOUw9zQ_zM7ZoygDMWTvIjJoG2BcM4')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });


};

function initMap() {

  // Map options
  var options = {
    zoom: 12,
    center: { lat: 40.7128, lng: -74.0060 },
    disableDefaultUI: true,
  }

  // new map
  var map = new google.maps.Map(document.getElementById('map'), options);

  //function called addMarker to pass in values based on dynamic lat long input 
  //add marker function 


  addMarker({
    coords: { lat: 40.7128, lng: -74.0060 }

  });

  function addMarker(props) {

    var marker = new google.maps.Marker({
      position: props.coords,
      map: map,
      icon: props.iconImage
    });
  }

  /* 
    //add marker 

    var marker = new google.maps.Marker({
      position: options.center ,
      map: map
    })

    const infoWindow = new google.maps.InfoWindow({
      content: '<h6>New York, NY</h6>'
    });

    marker.addListener('click', function () {
      infoWindow.open(map, marker);
    });
  */
}


initMap();

$(document).ready(function () {
  var sel = document.querySelectorAll('select');
  $('select').formSelect(sel);
});





