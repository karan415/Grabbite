import React from 'react';
import BlogData from './BlogData';
import Footer from './Footer';
import Header from './Header';

const Blog = () => {
  return (
    <>
      <Header />
      <section className='py-5'>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              {BlogData.map((curElm, index) => {
                return (
                  <div className="row mt-4 align-items-center" key={index}>
                    <div className="col-md-7">
                      <img src={curElm.blogimg} alt="" />
                    </div>
                    <div className="col-md-5">
                      <div className="contentblog">
                      <div className="d-flex justify-content-between mb-4">
                        <div className="span fw-bold">{curElm.date[0].month} /<span className='fw-bold'>{curElm.date[0].date} /</span>{curElm.date[0].year}</div>
                        <span className='text-capitalize '>{curElm.time}</span>
                        </div>
                        <h4>{curElm.title}</h4>
                        <p>{curElm.description}</p>
                        <span className='fw-bold fs-5'>By {curElm.admin}</span>
                        <button className="btn btn-primary">Read More</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col-md-3">
              {/* This is where you might add a sidebar or other content */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;
