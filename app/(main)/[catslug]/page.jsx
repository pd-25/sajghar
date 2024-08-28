"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import Loader from "@/component/main/Loader";

const Page = () => {
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { catslug } = useParams();

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await axios.get(`/api/frontend/product-category/${catslug}`);
        setCategory(response.data);
      } catch (err) {
        setError("Failed to load category data");
      } finally {
        setLoading(false);
      }
    };

    if (catslug) {
      fetchCategoryData();
    }
  }, [catslug]);

  if (loading) {
    return (
      <>
        <section id="innerPG-banner">
          <div className="container-fluid">
            <div className="row">
              <div className="banner-item col-lg-12">
                <img src="/images/inn-banner.jpg" className="img-fluid" alt="Banner" />
              </div>
            </div>
          </div>
        </section>
        <Loader />
      </>
    );
  }

  if (error) {
    return (
      <>
        <section id="innerPG-banner">
          <div className="container-fluid">
            <div className="row">
              <div className="banner-item col-lg-12">
                <img src="/images/inn-banner.jpg" className="img-fluid" alt="Banner" />
              </div>
            </div>
          </div>
        </section>
        <section id="error-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center">
                <h2>Error</h2>
                <p>{error}</p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  if (!category) {
    router.push("/404");
    return null;
  }

  return (
    <>
      <section id="innerPG-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="banner-item col-lg-12">
              <img src="/images/inn-banner.jpg" className="img-fluid" alt="Banner" />
            </div>
          </div>
        </div>
      </section>

      <section id="inn-pro-section">
        <div className="container">
          <div className="row mb-4 justify-content-center">
            <div className="col-lg-10 text-center">
              <h2>{category.category_name}</h2>
              <p>{category.category_description}</p>
            </div>
          </div>
          <div className="row">
            {category.products.map((product) => (
              <div className="col-lg-3 mb-4" key={product.id}>
                <div className="product-box text-center">
                  <div className="product-box-img hover01">
                    <div>
                      <figure>
                        <img src={product.image} className="mr-3" alt={product.name} />
                      </figure>
                    </div>
                  </div>
                  <div className="product-box-ctn">
                    <h4>{product.name}</h4>
                    <p className="star">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                    </p>
                    <ul className="pro-cart-list">
                      <li>
                        <a href={`single-product/${product.slug}`} className="cart-btn">
                          Add To Cart
                        </a>
                      </li>
                      <li>
                        <p className="pro-price">₹ 2499.00</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
