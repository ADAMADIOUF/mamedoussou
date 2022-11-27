import React,{useState} from 'react'
import product from '../dataBoutique'
import Bimg1 from "../../src/images/b1.jpeg"
import Footer from '../Footer'
import Slider from '../Slider'
const Boutique = () => {
 const [products, setProducts] = useState(product)
  return (
    <div>
      <div className='boutique'>
        {/* <img src={Bimg1} alt='' /> */}
        <Slider/>
        <div className='section-center boutique-content'>
          <div className='boutique-products'>
            {products.map((product) => {
              const { id, title, img, price } = product
              return (
                <article key={id} className='product-details'>
                  <img src={img} alt='' className='product-img' />
                  <div className='footer-products'>
                    <h3>{title}</h3>
                    <p>{price}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Boutique
