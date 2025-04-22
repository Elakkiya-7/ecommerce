let cartCount = 0;
    const cartCountEl = document.getElementById('cart-count');
    const Cart = document.querySelectorAll('.add-to-cart');
Cart.forEach(button => {
      button.addEventListener('click', () => {
        cartCount++;
        cartCountEl.textContent = cartCount;
      });
    });
