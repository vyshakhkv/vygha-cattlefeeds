import React from 'react';
import './Blog.css';
import BlogImage from '../../assets/blog/blog.jpeg';

export default function Blog() {
    return (
        <>
            <section id="blog">
                <div className="container">
                    <div className="blog_wrapper">
                        <div className="blog_col">
                            <p>At Vygha, we are committed to elevating the standards of dairy farming in Kerala. Our mission is to provide cost-effective, high-quality feed and supplements to local farmers, ultimately fostering increased productivity and profitability in the region.
                                For inquiries, partnerships, or any assistance, please feel free to get in touch with us.</p>
                            <div className="btn_wrapper">
                                <a className="btn" href={`tel:${9567192388}`}>Call us</a>
                            </div>
                        </div>
                        <div className="blog_col">
                            <div className="blog_image">
                                <img src={BlogImage} alt="Blog" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
