import './styles.css';
import { useEffect, useState } from "react";

export default function LoadMore() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count * 5}`);
      const result = await response.json();
      console.log("😎", result);

      if (result && result.products && result.products.length) {
        // Append new products instead of replacing
        setProducts(prev => [...prev, ...result.products]);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts(); // Fetch products on component mount
  }, [count]); // Re-fetch products when `count` changes

  if (loading) {
    return <div className="load-more">Loading Data please wait 😎</div>;
  }

  return (
    <div className="load-more">
      <h1>Product Display</h1>
      <div className="product-container">
        {products && products.length ? (
          products.map(item => (
            <div key={item.id} className="product">
              <img src={item.thumbnail} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
      <div className="button-container">
        <button onClick={() => setCount(prev => prev + 1)}>Load more products</button>
      </div>
    </div>
  );
}
