import React, { useEffect, useState } from 'react'
import '../App.css'
import Template from './Template'
import ShowProduct from './ShowProduct'
import Cookies from 'js-cookie'

function Product() {

  const [result, setResult] = useState(null)

  function fetchProduct() {

    if(localStorage.getItem("cache")){
      console.log("from cache", localStorage.getItem("cache"))
      setResult(JSON.parse(localStorage.getItem("cache")))
      return;
    }

    fetch("https://fakestoreapi.com/products")
      .then(res=>res.json())
      .then(json=>{
        setResult(json)
        localStorage.setItem("cache", JSON.stringify(json));
        console.log(json)
      })
  }

  useEffect(()=>{
    fetchProduct();
  }, [])
   

  if(!result)
  return (
    <div className="main-content common">
      <p>
        Welcome! {JSON.parse(Cookies.get('user') || "{}")?.email || "Guest"}
      </p>
      <Template />
    </div>
  )
  else
  return (
    <div className="main-content common">
      {/* ✅ Added Welcome here */}
      <p>
        Welcome! {JSON.parse(Cookies.get('user') || "{}")?.email || "Guest"}
      </p>
      <ShowProduct result={result} />
    </div>
  )
}

export default Product