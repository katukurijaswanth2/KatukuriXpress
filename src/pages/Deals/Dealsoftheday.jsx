import { useState, useEffect } from "react";
import axios from "axios";
import "./DealsOfTheDay.css";
import { SectionHeader } from "../../components/SectionHeader";
import { Loader } from "../../components/Loader";
import DealCard from "./DealCard";

export default function DealsOfTheDay() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([
      axios.get("https://dummyjson.com/products/1"),
      axios.get("https://dummyjson.com/products/2"),
    ])
      .then(([res1, res2]) => {
        setProducts([res1.data, res2.data]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="deals-section">
      <SectionHeader
        title="Deals Of The Day"
        subtitle="Handpicked savings, gone by midnight"
      />

      {loading && <Loader />}
      {error && <p className="deals-error">Error: {error}</p>}

      {!loading && !error && (
        <div className="deals-grid">
          {products.map((product) => (
            <DealCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}