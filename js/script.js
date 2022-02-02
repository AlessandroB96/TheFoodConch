const restaurantBtn = document.getElementById('restaurants');
const recipesBtn = document.getElementById('recipes');


//junjieAdd~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const restaurantFavBtn = document.getElementById('restaurantsFav');
const recipesFavBtn = document.getElementById('recipesFav');




var recipeNameGet = [];
var recipeImageUrlGet = [];
var recipeUrlGet = [];
var recipeSourceGet = [];
var recipeTotalTimeGet = [];
var recipeIgredientsGet = [];

// function get() {
//     recipeNameGet = JSON.parse(localStorage.getItem("Name"));
//     recipeImageUrlGet = JSON.parse(localStorage.getItem("ImageUrl"));
//     recipeUrlGet = JSON.parse(localStorage.getItem("Url"));
//     recipeSourceGet = JSON.parse(localStorage.getItem("Source"));
//     recipeTotalTimeGet = JSON.parse(localStorage.getItem("Time"));
//     recipeIgredientsGet = JSON.parse(localStorage.getItem("Igredients"));
// }



//junjieAdd~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




$(document).ready(function () {
    fetchRestaurantPage();
    fetchRecipesPage();

});


let fetchRestaurantPage = function () {

    restaurantBtn.addEventListener('click', function () {
        document.location.href = './restaurants.html';
    });

    // restaurantFavBtn.addEventListener('click', function () {
    //     document.location.href = './restaurants.html';
    // });

};

let fetchRecipesPage = function () {

    recipesBtn.addEventListener('click', function () {
        document.location.href = './recipes.html';
    });

    // recipesFavBtn.addEventListener('click', function () {
    //     document.location.href = './recipes.html';
     
    // });
};



