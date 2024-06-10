import { useEffect, useState } from "react"
import NavBar from "./components/NavBar"
import axios from "axios"
import ProductCard from "./components/ProductCard"
import Footer from "./components/Footer"

function App() {

  const [products,setProducts] = useState([])
  useEffect(()=>{
    axios("http://localhost:8080/api/products")
    //.then(res=>console.log(res))
    .then(res=>setProducts(res.data.response))
    .catch(err=>console.log(err))
  },[])
  console.log(products);

  return (
    <main className="min-h-screen flex flex-col">
      <NavBar />
      <section className="flex-grow flex flex-wrap justify-evenly">
        {products.map(each=> <ProductCard title={each.title} image={each.images[0]} price={each.price} />)}
      </section>
      <Footer />
    </main>
  )
}

export default App
