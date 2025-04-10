const favFoods = [
    { name: 'Ramen', image: 'ramen.webp' },
    { name: 'Milk', image: 'milk.jpg' },
    { name: 'Steak', image: 'steak.webp' }
  ];
  
  const container = document.getElementById("array");

for (let i = 0; i < favFoods.length; i++) {
  const foodDiv = document.createElement('div');
  foodDiv.className = 'food-item';

  const foodHTML = `
    <img src="${favFoods[i].image}" alt="${favFoods[i].name}">
    <p>${favFoods[i].name}</p>
  `;
  foodDiv.innerHTML = foodHTML;


  const botton = document.createElement('button');
  botton.textContent = `Buy ${favFoods[i].name}`;


  const message = document.createElement('p');
  message.className = 'buy-message';
  message.textContent = ''; 

  
  botton.addEventListener('click', function () {
    message.textContent = `You have bought ${favFoods[i].name}!`;
  });

  foodDiv.appendChild(botton);
  foodDiv.appendChild(message);
  container.appendChild(foodDiv);
  }
  