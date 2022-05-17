import React from 'react';
import { Link } from 'react-router-dom'

const BlogItem = ({ blogImg }) => {
    return (
        <div>
            <div className="cnt-box-blog-side">
                <Link to="/blogDetails" className="image-box img-box">
                    <div className="blog-date">
                        <span>01</span>
                        <span>JAN 2020</span>
                    </div>
                    <img src={blogImg} alt="" />
                </Link>
                <div className="caption">
                    <h2>Shipping family turned money managers are now billionaires</h2>
                    <ul className="icon-list icon-list-horizontal">
                        <li><i className="far fa-calendar"></i><Link to="/blogDetails">01 / 15 / 2020</Link></li>
                        <li><i className="far fa-bookmark"></i><Link to="/blogDetails">Finance</Link></li>
                        <li><i className="far fa-user"></i><Link to="/blogDetails">Admin</Link></li>
                    </ul>
                    <p>
                        Lorem ipsum dolor sitamet consectetur adipisicing elito sed do eiusmod tempore.amet consectetur adipisicing elito sed do eiusmod tempore.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BlogItem