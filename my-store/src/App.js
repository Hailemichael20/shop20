import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs, addDoc } from "firebase/firestore";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [customer, setCustomer] = useState('');
  const [address, setAddress] = useState('');
  const [orderSuccess, setOrderSuccess] = useState(false);

  useEffect(() => {
    getDocs(collection(db, "products")).then(snapshot => {
      setProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  async function handleOrder() {
    await addDoc(collection(db, "orders"), {
      items: cart.map(p => p.id),
      customer,
      address,
      createdAt: new Date()
    });
    setOrderSuccess(true);
    setCart([]);
  }

  return (
    <div>
      <h1>My Store (Firebase Edition)</h1>
      <h2>Products</h2>
      <div style={{ display: 'flex', gap: '2rem' }}>
        {products.map(product => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} width={100} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <b>${product.price}</b>
            <button onClick={() => addToCart(product)}>Add to cart</button>
          </div>
        ))}
      </div>
      <hr />
      <h2>Cart</h2>
      {cart.map((product, i) => (
        <div key={i}>{product.name} - ${product.price}</div>
      ))}
      <hr />
      <h2>Order</h2>
      <input
        value={customer}
        onChange={e => setCustomer(e.target.value)}
        placeholder="Your Name"
      />
      <input
        value={address}
        onChange={e => setAddress(e.target.value)}
        placeholder="Address"
      />
      <button onClick={handleOrder} disabled={cart.length === 0}>Place Order</button>
      {orderSuccess && <p>Order placed successfully!</p>}
    </div>
  );
}

export default App;