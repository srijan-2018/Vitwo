import React from 'react';
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import BlogLatestItem from '../components/blog/BlogLatestItem'
import BreadcamProps from '../components/master/BreadcamProps'
import blogDetails1 from '../assets/images/blogdetails1.jpg'
import b1 from '../assets/images/b1.jpg'

const styles = {
    marginBottom: "0",
    backgroundAttachment: "fixed",
    backgroundPosition: "center"
}

const BlogDetails = () => {
    return (
        <>
            <Header />
            <BreadcamProps heading="BLOG" subheading="OUR CORE VALUES" breadcrumbItems={[{'title':'Home','link':'../'},{'title':'Blog','link':'../blog'},{'title':'Blog Details','link':'../blogdetails'}]} styles={styles} />
            <div className="section-base">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <img src={blogDetails1} alt="" />
                            <div className="my-4">
                                <ul className="icon-list icon-list-horizontal">
                                    <li><i className="far fa-calendar"></i><Link to="/blogDetails">01 / 15 / 2020</Link></li>
                                    <li><i className="far fa-bookmark"></i><Link to="/blogDetails">Finance</Link></li>
                                    <li><i className="far fa-user"></i><Link to="/blogDetails">Admin</Link></li>
                                </ul>
                            </div>
                            <div className="blog_para">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat qui aspernatur deleniti, ab sint ullam in distinctio iste veritatis.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quaerat molestias excepturi? Nesciunt animi laudantium labore illo. Eos, eligendi perspiciatis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor delectus eum labore velit vero at incidunt repudiandae, perferendis sed autem animi dolore blanditiis, fugiat aut modi culpa error pariatur.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat qui aspernatur deleniti, ab sint ullam in distinctio iste veritatis.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quaerat molestias excepturi? Nesciunt animi laudantium labore illo. Eos, eligendi perspiciatis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor delectus eum labore velit vero at incidunt repudiandae, perferendis sed autem animi dolore blanditiis, fugiat aut modi culpa error pariatur.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quaerat molestias excepturi? Nesciunt animi laudantium labore illo. Eos, eligendi perspiciatis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor delectus eum labore velit vero at incidunt repudiandae, perferendis sed autem animi dolore blanditiis, fugiat aut modi culpa error pariatur.
                                </p>
                            </div>
                            <hr className="space" />
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-5">
                                    <div className="icon-links icon-links-grid icon-social social-colors">
                                        <a data-social="share-facebook" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                        <a data-social="share-twitter" className="twitter"><i className="fab fa-twitter"></i></a>
                                        <a data-social="share-instagram" className="instagram"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-6 col-sm-7">
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
                                        <a href="#">
                                            Finance and money
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Software
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Technology
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Business
                                        </a>
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
                                <a>Software</a><a>Finance</a><a>Tips</a><a>Breaking</a><a>Tech</a><a>Economy</a><a>Data</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default BlogDetails