import React, { useState } from 'react'
import css from './Productiteam.module.css'
import { ProductsData } from '../data/product'

const Productiteam = () => {

    const [MenuProducts, setMenuProducts]=useState(ProductsData);

    const filter =(type)=>{
        setMenuProducts(ProductsData.filter((product)=>product.type===type))
    }
  return (
    <div className={css.container}>
        <span>➰</span>
        <h1>Our Featured Products</h1>
        <div className={css.products}>
            <ul className={css.menu}>
               
                <li onClick={()=> setMenuProducts(ProductsData)}>All</li>
                <li onClick={()=> filter("skin care ")}>Skin Care</li>
                <li onClick={()=> filter("conditioners ")}>Conditioners</li> 
                <li onClick={()=> filter("foundations ")}>Foundations</li>
            </ul>
            <div className={css.list}> 
                {
                    MenuProducts.map((product,i)=>(
                        <div className={css.product}>
                            <div className='left-s'>
                                <div className='name'>
                                    <span>{product.name}</span>
                                    <span>{product.detail}</span>
                                </div>
                                <span>{product.price}$</span>
                                <div>Show Now</div>
                            </div>
                            <img src={product.img}  alt=""/>

                        </div>
                        
                ))               
                    
                }
            </div>
        </div>
    </div>
  ) 
}

export default Productiteam;