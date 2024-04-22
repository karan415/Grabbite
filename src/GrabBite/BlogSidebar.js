import React from 'react'
const BlogSidebar = () => {
    return (
        <>
            <div className="blogsidebar bg-secondary p-4">
                <div className="blogsidebar_inner">
                    <div className="searchblog d-flex justify-content-between">
                        <input type="search" name="" id="" className='py-2 w-100' placeholder='Search Here' /><input type="submit" className='py-2 bg-success border-0 text-white ' value="Submit" />
                    </div>
                    <ul className=''>
                        <li>Lorem ipsum dolor sit </li>
                        <li>A Practical Guide </li>
                        <li>How to Azure Automation</li>
                        <li>Azure Application</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default BlogSidebar