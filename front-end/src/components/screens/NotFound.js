import React from 'react';

import Header from '../parts/Header';
import Footer from '../parts/Footer';

const NotFound = () => {
  return(
    <>
      <Header />
      <section class="page-banner-section">
        <div class="container">
          <h1>Page Could Not Be Found</h1>
        </div>
      </section>
      <section class="error-section">
        <div class="container">
          <div class="error-box">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>We are sorry. But the page you are looking for cannot be found. </p>
            <a class="button-one" href="index.html">Go To HomePage</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NotFound;