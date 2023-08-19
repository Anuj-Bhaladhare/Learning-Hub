 // Retrieve cart items from local storage
 const cart = JSON.parse(localStorage.getItem('anuj')) || [];
 const cartItemsList = document.getElementById('cartItems');

 // Display cart items
 cart.forEach(item => {
     const p1 = document.createElement('p');
     const p2 = document.createElement('p');
     const p3 = document.createElement('p');
     const button = document.createElement('button');
     const div = document.createElement('div')

     p1.textContent = `${item.id}`;
     p2.textContent = `${item.name}`;
     p3.textContent = `${item.price}`;
     button.textContent = `Thanks`;

     div.appendChild(p1);
     div.appendChild(p2);
     div.appendChild(p3);
     div.appendChild(button);

     cartItemsList.appendChild(div);
 });