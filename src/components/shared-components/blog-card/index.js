import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="grid-item">
      <img src={blog.img} className="w-full" alt="" />
      <div className="content py-6">
        <h3 className="text-2xl font-bold mb-[10px] ops text-[#164B60]">{blog.title}</h3>
        <p className="text-[#666] lato">{blog.desc}</p>

        <div className="text-cente mt-8">
          <Link
            to={"/main/blog"}
            className="bg-[#164B60] text-[#fff] px-[20px] py-[10px] ops rounded-[5px]"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
