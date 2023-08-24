import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="grid-item">
      <img src={blog.img} className="w-full" alt="" />
      <div className="content py-6">
        <h3 className="text-xl font-bold mb-[10px]">{blog.title}</h3>
        <p className="text-[#666]">{blog.desc}</p>

        <div className="text-cente mt-6">
          <Link
            to={"/main/blog"}
            className="bg-[#164B60] text-[#fff] p-[10px] rounded-[5px] mt-[10px]"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
