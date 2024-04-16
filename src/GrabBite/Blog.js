import React, { useState } from 'react'
import BlogData from BlogData
const Blog = () => {
  const [data, setData] = useState(BlogData)
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              {data.map((curElm) => {
                return (
                  <>
                    <div className="grid-container">
                      <div className="grid-item">
                        <img src={curElm.blogimg} alt="" />
                      </div>
                      <div className="grid-item">
                        <div className="content">
                          <div className="span">{curElm.date.month}<span>{curElm.date.date}</span>{curElm.date.year}</div>
                          <span>{curElm.time}</span>
                          <h3>{curElm.title}</h3>
                          <p>{curElm.description}</p>
                          <span>by{curElm.admin}</span>
                          <button className="btn btn-primary">Read More</button>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })}

            </div>
            <div className="col-md-4">
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
