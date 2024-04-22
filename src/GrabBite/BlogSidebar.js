import React from 'react'
import img from '../Img/blogimage.jpg'
const BlogSidebar = () => {
    return (
        <>
            <div className="blogsidebar bg-secondary p-4">
                <div className="blogsidebar_inner">
                    <div className="searchblog d-flex justify-content-between">
                        <input type="search" name="" id="" className='py-2 w-100' placeholder='Search Here' /><input type="submit" className='py-2 bg-success border-0 text-white ' value="Submit" />
                    </div>
                    <ul>
                        <li><img src={img} alt="" />Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quis?</li>
                        <li><img src={img} alt="" />A Practical Guide to Azure Security?</li>
                        <li><img src={img} alt="" />How to Azure Automation Provisioning Work and Performance Fine-Tuning?</li>
                        <li><img src={img} alt="" />Azure Application Deployment-Magento Best Guide</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default BlogSidebar