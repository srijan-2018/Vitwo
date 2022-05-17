import React from 'react'

const BlogLatestItem = ({ blogLatestImg }) => {
    return (
        <li>
            <a href="#">
                <img src={blogLatestImg} alt="" />
                <span>February 12, 2020</span>
                Shipping family turned money become billionare
            </a>
        </li>
    )
}

export default BlogLatestItem