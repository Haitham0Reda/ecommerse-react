import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
    return (
            <div className="blog-card">
                <div className="card-image">
                    <img className='img-fluid w-100' src="/images/blog-1.jpg" alt="blog" />
                </div>
                <div className="card-content">
                    <p className='date'>27 Feb, 2023</p>
                    <h6 className="title">A beautiful sunday morning renaissance</h6>
                    <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, repudiandae! Alias perspiciatis</p>
                    <Link to='/' className='button'>Read More</Link>
                </div>
            </div>
    )
}

export default BlogCard