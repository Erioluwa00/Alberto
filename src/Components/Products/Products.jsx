import React from 'react'
import './Products.css'
const Products = () => {
    
  return (
    <div>
      <div className='products-hero_section'>
        <p> PRODUCTS</p>
      </div>

      <div class="product-section" id="product_id">
      <div class="product-section-header">
        <p class="header1">#PRODUCTS</p>
        <p class="header2">Shop By Brand</p>
      </div>
     <div class="product-section-cards">
      <div class="product-section-card1-image"><img src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/09/banner-9.png"/>
      <button class="product-section-card1-button rolex-button"><a href="#rolex_id">ROLEX</a></button></div>

      <div class="product-section-card1-image"><img src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/08/banner-10-1.jpg"/>
        <button class="product-section-card1-button bulova-button">BULOVA</button></div>

        <div class="product-section-card1-image"><img src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/08/cat-4.png"/>
          <button class="product-section-card1-button micheal_kors-button">MICHEAL KORS</button></div>
          <div class="product-section-card1-image"><img src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/08/cat-1.png"/>
            <button class="product-section-card1-button citizen-button">CITIZEN ECO-DRIVE</button></div>
     </div>
      
    </div>

    </div>
  )
}

export default Products;
