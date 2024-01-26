const context = {
  title: 'Welcome to Musicon',
  body: 'Musicon is a budding musical storefront with a mission to share the joy of music. These magnificent auditory tools are designed with musical creators, like you, in mind. Hobbyists, beginners, and experts alike can appreciate the resplendent sounds supplied by each and every instrument we carry. Join us in delivering the euphoric vibrations of melodia to the citizens of the world!',
  instruments: [
    {
      image: 'https://content.codecademy.com/courses/learn-handlebars/musicon/electronic-keyboard.png',
      name: 'Electronic Keyboard',
      description: 'A piano welcomed to the 21st century. Pianists celebrate the compact form factor and the diversity of synthesized rhythms all in one masterful musical machine.',
      price: '$1,999.00',
      sale: '$1,699.89',
      buyable: true 
    },
    {
      image: 'https://content.codecademy.com/courses/learn-handlebars/musicon/electric-guitar.png',
      name: 'Electric Guitar',
      description: 'Join the legends of the \'50s and \'60s when the marriage of guitar and electricity created the most influential instrument of a generation. Note: picks sold separately.',
      price: '$599.99',
      buyable: true 
    },
    {
      image: 'https://content.codecademy.com/courses/learn-handlebars/musicon/bass-guitar.png',
      name: 'Bass Guitar',
      description: 'Experience the embodiment of funkadelic frequencies that is the bass guitar. Let the deep low notes of the bass guitar resonate with heartbeats everywhere.',
      price: '$624.99',
      buyable: true 
    },
    {
      image: 'https://content.codecademy.com/courses/learn-handlebars/musicon/drum-kit.png',
      name: 'Drum Kit',
      description: 'Ever thought, "one instrument isn\'t enough?" Find an answer in the drum kit. Coordinate a collection of drums and cymbals to dictate the rhythm of a musical masterpiece.',
      price: '$649.00',
      sale: '$349.00',
      buyable: true 
    }
  ]
};
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.buy-now').forEach(function(button) {
    button.addEventListener('click', function(event) {
      const instrumentName = event.target.getAttribute('data-name');
      const instrumentPrice = event.target.getAttribute('data-price');
      
    });
  });
});
// SHOPPING CART LOGIC 

document.addEventListener('DOMContentLoaded', function() {
  const shoppingCart = [];

  
  function addToCart(name, price) {
    
    const numericPrice = parseFloat(price.replace('$', ''));
  
    
    shoppingCart.push({ name, price: numericPrice });
  
    updateCart();
  }
  

  
  function updateCart() {

    const cartItemsElement = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");
    cartItemsElement.innerHTML = "";
    let total = 0;
    shoppingCart.forEach(item => {
      total += parseFloat(item.price);
      const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - $${item.price}`;
    cartItemsElement.appendChild(listItem);
    });
    cartTotalElement.textContent = total.toFixed(2);
  }

  // Add click event listeners to the "Buy Now" buttons
  document.querySelectorAll('.buy-now').forEach(function(button) {
    button.addEventListener('click', function(event) {
      const instrumentName = event.target.getAttribute('data-name');
      const instrumentPrice = event.target.getAttribute('data-price');
      addToCart(instrumentName, instrumentPrice);
    });
  });


 updateCart();
});


const templateElement = document.getElementById("templateHB");
const templateSource = templateElement.innerHTML;

let template = Handlebars.compile(templateSource);

let compiledHtml = template(context);

const informationElement = document.getElementById("information");

informationElement.innerHTML = compiledHtml;

