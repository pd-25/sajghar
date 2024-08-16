"use client"
import React, { useEffect } from 'react'

const NewCollectionProducts = () => {
    useEffect(() => {
        // This runs when the component mounts
        const loadScript = () => {
          const script = document.createElement('script');
          script.src = '/js/custom.js';
          script.async = true;
          document.body.appendChild(script);
        };
    
        loadScript();
    
        // Optional: clean up script when the component unmounts
        return () => {
          const existingScript = document.querySelector('script[src="/js/custom.js"]');
          if (existingScript) {
            existingScript.remove();
          }
        };
      }, []); 
  return (
    <section id="new-collection-section">
    <div className="container">
      <div className="row justify-content-center mb-3">
        <div className="col-lg-12">
          <h1>New Collection</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div id="demo-pranab">
            <div id="owl-new-collection" className="owl-carousel owl-theme">
              <div className="item">
                <div className="product-box text-center">
                  <div className="product-box-img hover01">
                    <div>
                      <figure>
                        <img src="images/s-pro2.jpg" className="mr-3" alt="..." />
                      </figure>
                    </div>
                  </div>
                  <div className="product-box-ctn">
                    <h4>Product Name Here</h4>
                    <p className="star">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                    </p>
                    <p className="pro-price">₹ 2499.00</p>
                    <a href="" className="cart-btn">
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product-box text-center">
                  <div className="product-box-img hover01">
                    <div>
                      <figure>
                        <img src="images/s-pro2.jpg" className="mr-3" alt="..." />
                      </figure>
                    </div>
                  </div>
                  <div className="product-box-ctn">
                    <h4>Product Name Here</h4>
                    <p className="star">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                    </p>
                    <p className="pro-price">₹ 2499.00</p>
                    <a href="" className="cart-btn">
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product-box text-center">
                  <div className="product-box-img hover01">
                    <div>
                      <figure>
                        <img src="images/s-pro2.jpg" className="mr-3" alt="..." />
                      </figure>
                    </div>
                  </div>
                  <div className="product-box-ctn">
                    <h4>Product Name Here</h4>
                    <p className="star">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                    </p>
                    <p className="pro-price">₹ 2499.00</p>
                    <a href="" className="cart-btn">
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product-box text-center">
                  <div className="product-box-img hover01">
                    <div>
                      <figure>
                        <img src="images/s-pro2.jpg" className="mr-3" alt="..." />
                      </figure>
                    </div>
                  </div>
                  <div className="product-box-ctn">
                    <h4>Product Name Here</h4>
                    <p className="star">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                    </p>
                    <p className="pro-price">₹ 2499.00</p>
                    <a href="" className="cart-btn">
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product-box text-center">
                  <div className="product-box-img hover01">
                    <div>
                      <figure>
                        <img src="images/s-pro2.jpg" className="mr-3" alt="..." />
                      </figure>
                    </div>
                  </div>
                  <div className="product-box-ctn">
                    <h4>Product Name Here</h4>
                    <p className="star">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                    </p>
                    <p className="pro-price">₹ 2499.00</p>
                    <a href="" className="cart-btn">
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product-box text-center">
                  <div className="product-box-img hover01">
                    <div>
                      <figure>
                        <img src="images/s-pro2.jpg" className="mr-3" alt="..." />
                      </figure>
                    </div>
                  </div>
                  <div className="product-box-ctn">
                    <h4>Product Name Here</h4>
                    <p className="star">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                    </p>
                    <p className="pro-price">₹ 2499.00</p>
                    <a href="" className="cart-btn">
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product-box text-center">
                  <div className="product-box-img hover01">
                    <div>
                      <figure>
                        <img src="images/s-pro2.jpg" className="mr-3" alt="..." />
                      </figure>
                    </div>
                  </div>
                  <div className="product-box-ctn">
                    <h4>Product Name Here</h4>
                    <p className="star">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                    </p>
                    <p className="pro-price">₹ 2499.00</p>
                    <a href="" className="cart-btn">
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product-box text-center">
                  <div className="product-box-img hover01">
                    <div>
                      <figure>
                        <img src="images/s-pro2.jpg" className="mr-3" alt="..." />
                      </figure>
                    </div>
                  </div>
                  <div className="product-box-ctn">
                    <h4>Product Name Here</h4>
                    <p className="star">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                    </p>
                    <p className="pro-price">₹ 2499.00</p>
                    <a href="" className="cart-btn">
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product-box text-center">
                  <div className="product-box-img hover01">
                    <div>
                      <figure>
                        <img src="images/s-pro2.jpg" className="mr-3" alt="..." />
                      </figure>
                    </div>
                  </div>
                  <div className="product-box-ctn">
                    <h4>Product Name Here</h4>
                    <p className="star">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                    </p>
                    <p className="pro-price">₹ 2499.00</p>
                    <a href="" className="cart-btn">
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product-box text-center">
                  <div className="product-box-img hover01">
                    <div>
                      <figure>
                        <img src="images/s-pro2.jpg" className="mr-3" alt="..." />
                      </figure>
                    </div>
                  </div>
                  <div className="product-box-ctn">
                    <h4>Product Name Here</h4>
                    <p className="star">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                    </p>
                    <p className="pro-price">₹ 2499.00</p>
                    <a href="" className="cart-btn">
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default NewCollectionProducts