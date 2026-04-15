import axios from "axios";
import { useEffect, useState } from "react"

export const Ecom=()=>{
    const [Ecomp,setEcom]=useState([]);
    useEffect(()=>{
        axios.get("https://api.escuelajs.co/api/v1/products")
        .then((ren)=>{setEcom(ren.data)})
        .catch((err)=>{console.log(err)});
    },[])
    return(
 <>
      <h2>Products</h2>

      {Ecomp.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <img src={item.images[0]} alt={item.title} width="150" />
          <p>₹{item.price}</p>
        </div>
      ))}
    </>                                                                                                     


    )
}