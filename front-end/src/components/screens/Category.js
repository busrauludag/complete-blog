import React from 'react';
import Header from '../parts/Header';
import Breadcrumb from '../parts/Breadcrumb';
import Posts from '../parts/Posts';
import Sidebar from '../parts/Sidebar';
import Footer from '../parts/Footer';

const Category = () => {
  return(
    <>
      <Header />
      <Breadcrumb />
      <section className="blog-section">
        <div class="container">
          <div class="row">
            <Posts />
            <Sidebar />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Category;