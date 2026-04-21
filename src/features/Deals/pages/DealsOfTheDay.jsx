import { useState, useEffect } from "react";
import axios from "axios";
import "./DealsOfTheDay.css";

import { Loader } from "../../shared/components/Loader";
import {DealCard} from "../DealCard";
import { SectionHeader } from "../../../shared/ui/SectionHeader";

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
// 
  // useEffect(() => {

  //   async function fetchData() {
  //     try {
  //       // Call first API
  //       const response1 = await axios.get("https://dummyjson.com/products/1");

  //       // Call second API
  //       const response2 = await axios.get("https://dummyjson.com/products/2");

  //       // Store both results
  //       setProducts([response1.data, response2.data]);

  //     } catch (err) {
  //       setError(err.message);
  //     }

  //     setLoading(false);
  //   }

  //   fetchData();

  // }, []);

  return (
    <section className="deals-section">
      <SectionHeader
        title="Deals Of The Day"
        subtitle="Handpicked savings, gone by midnight"
      />

    
      {loading && <Loader />}
      {error && <p className="deals-error">Error: {error}</p>}
<DealCard />
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