import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>   
    <header id="main-header">
    <div id="top-header">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-12">
            <p>
              <i className="fa fa-truck" aria-hidden="true" /> Free shipping
              within India | Free international shipping on orders over Rs.
              25,000 | Checkout in your home currency.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div id="mobile-logo">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-12" style={{ display: "none" }}>
            <img src="images/logo.png" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
    <div id="mid-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="left-hd">
              <ul className="header-social-list">
                <li>
                  <a href="">
                    <i className="fa fa-twitter social" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-instagram social" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-facebook social" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right-hd">
              <ul className="cart-list">
                <li>
                  <form id="pro-search" action="#">
                    <input type="search" placeholder="Seach..." />
                  </form>
                </li>
                <li className="th-btn tbtn2">
                  <Link href="/contact">
                    My Cart{" "}
                    <i className="fa fa-shopping-cart" aria-hidden="true" />
                    <span className="cart-ds">(0)</span>
                  </Link>
                </li>
                <li className="th-btn tbtn1">
                  <a href="">
                    Login <i className="fa fa-user" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="snd-head">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 header-menu">
            <nav className="navbar navbar-expand-lg navbar-light py-1">
              {" "}
              <a
                href="#"
                className="navbar-brand font-weight-bold d-block d-lg-none"
              />{" "}
              <button
                type="button"
                data-toggle="collapse"
                data-target="#navbarContent"
                aria-controls="navbars"
                aria-expanded="false"
                aria-label="Toggle navigation"
                className="navbar-toggler"
              >
                {" "}
                <span className="navbar-toggler-icon" />{" "}
              </button>
              <div id="navbarContent" className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto mr-auto">
                  <li className="nav-item m-menu">
                    <Link
                      href="/"
                      className="nav-link font-weight-bold text-uppercase mu-item"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item m-menu dropdown megamenu">
                    <a
                      id="megamneu"
                      href=""
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      className="nav-link dropdown-toggle font-weight-bold text-uppercase mu-item"
                    >
                      Collections
                    </a>
                    <div
                      aria-labelledby="megamneu"
                      className="dropdown-menu border-0 p-0 m-0"
                    >
                      <div className="container">
                        <div className="row bg-white rounded-0 m-0 shadow-sm">
                          <div
                            className="col-lg-3 col-xl-3 px-0 d-none d-lg-block menu-bg"
                            style={{
                              background:
                                "center center url(images/menu-img1.jpg)no-repeat",
                              backgroundSize: "cover"
                            }}
                          />
                          <div className="col-lg-8 col-xl-8">
                            <div className="pl-4">
                              <div className="row">
                                <div className="col-lg-4 my-4">
                                  {/* <h6 class="font-weight-bold text-uppercase menu-head">saree</h6>>*/}
                                  <ul className="list-unstyled">
                                    <li className="nav-item">
                                      <a
                                        href="product.html"
                                        className="nav-link text-small pb-0"
                                      >
                                        Menu One
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        href="product.html"
                                        className="nav-link text-small pb-0"
                                      >
                                        Menu Two
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        href="product.html"
                                        className="nav-link text-small pb-0"
                                      >
                                        Menu Three
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        href="product.html"
                                        className="nav-link text-small pb-0"
                                      >
                                        Menu Four
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        href="product.html"
                                        className="nav-link text-small pb-0"
                                      >
                                        Menu Five
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        href="product.html"
                                        className="nav-link text-small pb-0"
                                      >
                                        Menu Six
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        href="product.html"
                                        className="nav-link text-small pb-0"
                                      >
                                        Menu Seven
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-lg-4 my-4">
                                  {/* <h6 class="font-weight-bold text-uppercase menu-head">saree</h6>>*/}
                                  <ul className="list-unstyled">
                                    <li className="nav-item">
                                      <a
                                        href="product.html"
                                        className="nav-link text-small pb-0"
                                      >
                                        Menu One
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        href="product.html"
                                        className="nav-link text-small pb-0"
                                      >
                                        Menu Two
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        href="product.html"
                                        className="nav-link text-small pb-0"
                                      >
                                        Menu Three
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        href="product.html"
                                        className="nav-link text-small pb-0"
                                      >
                                        Menu Four
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        href="product.html"
                                        className="nav-link text-small pb-0"
                                      >
                                        Menu Five
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        href="product.html"
                                        className="nav-link text-small pb-0"
                                      >
                                        Menu Six
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        href="product.html"
                                        className="nav-link text-small pb-0"
                                      >
                                        Menu Seven
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-lg-4 my-4">
                                  {/*<h6 class="font-weight-bold text-uppercase menu-head">saree</h6>*/}
                                  <ul className="list-unstyled">
                                    <li className="nav-item">
                                      <a
                                        href="product.html"
                                        className="nav-link text-small pb-0"
                                      >
                                        Menu One
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        href="product.html"
                                        className="nav-link text-small pb-0"
                                      >
                                        Menu Two
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        href="product.html"
                                        className="nav-link text-small pb-0"
                                      >
                                        Menu Three
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        href="product.html"
                                        className="nav-link text-small pb-0"
                                      >
                                        Menu Four
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        href="product.html"
                                        className="nav-link text-small pb-0"
                                      >
                                        Menu Five
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        href="product.html"
                                        className="nav-link text-small pb-0"
                                      >
                                        Menu Six
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        href="product.html"
                                        className="nav-link text-small pb-0"
                                      >
                                        Menu Seven
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item m-menu desk-logo">
                    <a href="index.html" className="nav-link">
                      <img
                        src="images/logo.png"
                        className="img-fluid desktop-logo"
                      />
                    </a>
                  </li>
                  <li className="nav-item m-menu dropdown megamenu">
                    <a
                      id="megamneu"
                      href=""
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      className="nav-link dropdown-toggle font-weight-bold text-uppercase mu-item"
                    >
                      Offer Zone
                    </a>
                    <div
                      aria-labelledby="megamneu"
                      className="dropdown-menu border-0 p-0 m-0"
                    >
                      <div className="container">
                        <div className="row bg-white rounded-0 m-0 shadow-sm">
                          <div
                            className="col-lg-3 col-xl-3 px-0 d-none d-lg-block menu-bg"
                            style={{
                              background:
                                "center center url(images/menu-img2.jpg)no-repeat",
                              backgroundSize: "cover"
                            }}
                          />
                          <div className="col-lg-8 col-xl-8">
                            <div className="pl-4">
                              <div className="row">
                                <div className="col-lg-6 my-4">
                                  <h6 className="font-weight-bold text-uppercase menu-head">
                                    Flat 30% Off
                                  </h6>
                                  <ul className="list-unstyled">
                                    <li className="nav-item">
                                      <a
                                        href="product.html"
                                        className="nav-link text-small pb-0"
                                      >
                                        Item Name Here
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        href="product.html"
                                        className="nav-link text-small pb-0"
                                      >
                                        Item Name Here
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        href="product.html"
                                        className="nav-link text-small pb-0"
                                      >
                                        Item Name Here
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        href="product.html"
                                        className="nav-link text-small pb-0"
                                      >
                                        Item Name Here
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        href="product.html"
                                        className="nav-link text-small pb-0"
                                      >
                                        Item Name Here
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        href="product.html"
                                        className="nav-link text-small pb-0"
                                      >
                                        Item Name Here
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        href="product.html"
                                        className="nav-link text-small pb-0"
                                      >
                                        Item Name Here
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-lg-6 my-4">
                                  <h6 className="font-weight-bold text-uppercase menu-head">
                                    Get Upto 50% Off
                                  </h6>
                                  <ul className="list-unstyled">
                                    <li className="nav-item">
                                      <a
                                        href="product.html"
                                        className="nav-link text-small pb-0"
                                      >
                                        Item Name Here
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        href="product.html"
                                        className="nav-link text-small pb-0"
                                      >
                                        Item Name Here
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        href="product.html"
                                        className="nav-link text-small pb-0"
                                      >
                                        Item Name Here
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        href="product.html"
                                        className="nav-link text-small pb-0"
                                      >
                                        Item Name Here
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        href="product.html"
                                        className="nav-link text-small pb-0"
                                      >
                                        Item Name Here
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        href="product.html"
                                        className="nav-link text-small pb-0"
                                      >
                                        Item Name Here
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        href="product.html"
                                        className="nav-link text-small pb-0"
                                      >
                                        Item Name Here
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item m-menu">
                    <a
                      href=""
                      className="nav-link font-weight-bold text-uppercase mu-item"
                    >
                      <sup className="blink_me">New</sup>New Collection
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
  
  </>
  )
}

export default Header