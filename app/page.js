'use client';

import React, { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';

export default function StorePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('/api/printful/products');
      const data = await res.json();
      setProducts(data.products);
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <header style={{ padding: '20px', background: '#fff', display: 'flex', justifyContent: 'space-between' }}>
        <h1>CHRIST FOLKS</h1>
        <button style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#000', color: '#fff', padding: '10px 20px' }}>
          <ShoppingCart size={20} /> Cart
        </button>
      </header>

      <section style={{ background: 'linear-gradient(135deg, #1a2332 0%, #2c3e50 100%)', color: 'white', padding: '80px 40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '48px', fontWeight: '700' }}>Faith Meets Fashion</h2>
        <p>Premium faith-inspired collections crafted with love and delivered worldwide.</p>
      </section>

      <section style={{ padding: '40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {products.map((p) => (
            <div key={p.id} style={{ border: '1px solid #ddd', padding: '20px', background: 'white' }}>
              <img src={p.thumbnail_url} alt={p.name} style={{ width: '100%' }} />
              <h3>{p.name}</h3>
              <p>${p.price.toFixed(2)}</p>
              <button style={{ background: '#000', color: 'white', padding: '10px 20px' }}>Select Options</button>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ background: '#111', color: 'white', padding: '40px', textAlign: 'center' }}>
        <h3>Contact Us</h3>
        <p>Email: support@christfolks.com</p>
        <p>Phone: +260 97 123 4567</p>
        <p>Address: Lusaka, Zambia</p>
      </footer>
    </div>
  );
}
