import React,{useState} from 'react'
import product from "../dataProduct"
const Products = () => {
 const[products,setProducts] = useState(product)
 
  return (
    <div>
      <section className='products'>
        <div className='section-center'>
          <div className='product-container'>
            {products.map((product) => {
              const { id, title, img,price } = product
              return (
                <article key={id} className='product-details'>
                  <img src={img} alt='' className='product-img' />
                  <div className="footer-products">
                   <h3>{title}</h3>
                   <p>{price}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products