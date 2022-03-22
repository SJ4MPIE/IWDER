var pizza_button_state = 0;
var pasta_button_state = 0;
var lasagne_button_state = 0;
var favorite_button_state = 0;
const cardList = document.getElementsByClassName('js--card')
const favoriteButton = document.getElementsByClassName('checkbox_fav');
let favoriteCards = document.querySelectorAll(['[data-favorite="favorite"]']);

window.onload = () => {
    //evenrtlistener aanmaken voor buttonclicks
    document.querySelectorAll("[data-button]").forEach(button => {
        button.addEventListener("click", (e) => {
            filter(button.attributes["data-button"].value)
        })
    })
}
 
function filter(type) {

    if (type == "pizza" && pizza_button_state == 0) {
      var element =  document.querySelectorAll("[data-dish='pizza']");
      var button = document.querySelectorAll("[data-button='pizza']");
      element.forEach(pizza => {
          pizza.style.display = 'none';
      })

      button.forEach(button => {
        button.style.backgroundColor = '#c2213c';
        
    })
    
        pizza_button_state = 1 
    } 

    else if (type == "pasta" && pasta_button_state == 0) { 
        var element =  document.querySelectorAll("[data-dish='pasta']");
        var button = document.querySelectorAll("[data-button='pasta']");
        element.forEach(pasta => {
            pasta.style.display = 'none';
        })
        button.forEach(button => {
            button.style.backgroundColor = '#c2213c';
        })
        pasta_button_state = 1 
    }

    else if (type == "lasagne" && lasagne_button_state == 0 ) {
        var element =  document.querySelectorAll("[data-dish='lasagne']");
        var button = document.querySelectorAll("[data-button='lasagne']");
        element.forEach(lasagne => {
            lasagne.style.display = 'none';
        })
        button.forEach(button => {
            button.style.backgroundColor = '#c2213c';
        })
        lasagne_button_state = 1
    }
    
    else if (type == "pizza" && pizza_button_state == 1) {
        var element =  document.querySelectorAll("[data-dish='pizza']");
        var button = document.querySelectorAll("[data-button='pizza']");
        element.forEach(pizza => {
            pizza.style.display = 'block';
        })
        button.forEach(button => {
            button.style.backgroundColor = '#323232';
        })
        pizza_button_state = 0
    }

    else if (type == "pasta" && pasta_button_state == 1) {
    
        var element =  document.querySelectorAll("[data-dish='pasta']");
        var button = document.querySelectorAll("[data-button='pasta']");
        element.forEach(pasta => {
            pasta.style.display = 'block';
        })
        button.forEach(button => {
            button.style.backgroundColor = '#323232';
        })
        pasta_button_state = 0
    }

    else if (type == "lasagne" && lasagne_button_state == 1) {
        var element =  document.querySelectorAll("[data-dish='lasagne']");
        var button = document.querySelectorAll("[data-button='lasagne']");
        element.forEach(lasagne => {
            lasagne.style.display = 'block';
        })
        button.forEach(button => {
            button.style.backgroundColor = '#323232';
        })
        lasagne__button_state = 0
    }

    else if (type == "favorite" && favorite_button_state == 0 ) {
        var unfavorite = document.querySelectorAll('[data-favorite="unfavorite"]');
        var button = document.querySelectorAll("[data-button='favorite']");
        unfavorite.forEach(fav => {
            fav.style.display = 'none';
        })
        button.forEach(button => {
            button.style.backgroundColor = '#c2213c';
        })
        favorite_button_state = 1
    }

    else if (type == "favorite" && favorite_button_state == 1){
        console.log('hoi')
        var unfavorite = document.querySelectorAll('[data-favorite="unfavorite"]');
        var button = document.querySelectorAll("[data-button='favorite']");
        unfavorite.forEach(fav => {
            fav.style.display = 'block';
        })
        button.forEach(button => {
            button.style.backgroundColor = '#323232';
        })
        favorite_button_state = 0
    }

    }

function addFavourite() {

    const checkboxes = document.querySelectorAll("[data-cb]");

    for(let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            cardList[i].setAttribute("data-favorite", "favorite")
        } else {
            cardList[i].setAttribute("data-favorite", "unfavorite")
        }
    }
}
