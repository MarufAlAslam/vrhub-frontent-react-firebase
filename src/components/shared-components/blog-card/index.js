import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="grid-item">
      <img src={blog.image} className="w-full h-[300px] object-cover" alt="" />
      <div className="content py-6">
        <h3 className="text-2xl font-bold mb-[10px] ops text-[#164B60]">{blog.title}</h3>
        <p className="text-[#666] lato">{blog.description}</p>

        <hr className="my-4" />

        <div className="flex justify-between items-center">
          <p className="text-[#666] lato font-bold">{blog.author}</p>
          <p className="text-[#666] lato font-bold">{blog.publishedDate}</p>
        </div>

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
