var pizza_button_state = 0;
var pasta_button_state = 0;
var lasagne_button_state = 0;

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

    }

    console.log(pasta_button_state);

}
    