import React from 'react';

import Header from '../parts/Header';
import Comment from '../parts/Comment';
import PostDesc from '../parts/PostDesc';
import Footer from '../parts/Footer';

const Single = () => {
  return(
    <>
      <Header />
      <section className="blog-section">
        <div className="container">
          <div className="single-post no-sidebar">
            <PostDesc />
            <Comment />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Single;