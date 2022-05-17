import React from 'react';
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import BreadcamProps from '../components/master/BreadcamProps'
import BlogItem from '../components/blog/BlogItem'
import BlogLatestItem from '../components/blog/BlogLatestItem'

import blog1 from '../assets/images/blog1.jpg'
import b1 from '../assets/images/b1.jpg'

const styles = {
    marginBottom: "0",
    backgroundAttachment: "fixed",
    backgroundPosition: "center"
}
const Blog = () => {
    return (
        <>
            <Header />
            <BreadcamProps heading="BLOG" subheading="OUR CORE VALUES" breadcrumbItems={[{ 'title': 'Home', 'link': '../' }, { 'title': 'Blog', 'link': '../blog' }]} styles={styles} />

            <div className="section-base">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">

                            <BlogItem blogImg={blog1} />
                            <BlogItem blogImg={blog1} />
                            <BlogItem blogImg={blog1} />
                            

                            <div className='d-flex justify-content-around'>
                                <div>
                                    <a href="/contact" className="btn_style" style={{marginRight:'20px', display:'flex', alignItems:'center', backgroundColor:'#003060'}}><i class="fa-solid fa-chevron-left"></i> &nbsp; Previous</a>
                                </div>

                                <div>
                                    <a href="/contact" className="btn_style" style={{marginRight:'20px', display:'flex', alignItems:'center', backgroundColor:'#003060'}}>Next &nbsp; <i class="fa-solid fa-chevron-right"></i></a>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 col-12 widget">
                            <form className="form-box">
                                <div className="input-text-btn">
                                    <input className="input-text" type="text" placeholder="Search ..." />
                                    <input type="submit" value="Search" className="btn" />
                                </div>
                            </form>
                            <hr className="space-sm" />
                            <h3>Categories</h3>
                            <hr className="space-xs" />
                            <div className="menu-inner menu-inner-vertical">
                                <ul>
                                    <li>
                                        <Link to="/">
                                            Finance and money
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            Software
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            Technology
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            Business
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                            <hr className="space-sm" />
                            <h3>Latest Posts</h3>
                            <hr className="space-xs" />
                            <div className="menu-inner menu-inner-vertical menu-inner-image">
                                <ul>
                                    <BlogLatestItem blogLatestImg={b1} />
                                    <BlogLatestItem blogLatestImg={b1} />
                                    <BlogLatestItem blogLatestImg={b1} />
                                    <BlogLatestItem blogLatestImg={b1} />
                                </ul>
                            </div>
                            <hr className="space-sm" />
                            <h3>Tags</h3>
                            <hr className="space-xs" />
                            <div className="list-tags">
                                <Link to="/">Software</Link><Link to="/">Finance</Link><Link to="/">Tips</Link><Link to="/">Breaking</Link><Link to="/">Tech</Link><Link to="/">Economy</Link><Link to="/">Data</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Blog