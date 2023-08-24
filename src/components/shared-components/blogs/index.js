import React from "react";
import blog1 from "../../../assets/img/blog1.jpg";
import blog2 from "../../../assets/img/blog2.jpg";
import blog3 from "../../../assets/img/blog3.jpg";
import blog4 from "../../../assets/img/blog4.jpg";
import blog5 from "../../../assets/img/blog5.jpg";
import blog6 from "../../../assets/img/blog6.jpg";
import BlogCard from "../blog-card";

const Blogs = () => {
  const data = [
    {
      id: 1,
      img: blog1,
      title: "Lorem ipsum dolor sit",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      id: 2,
      img: blog2,
      title: "Lorem ipsum dolor sit",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      id: 3,
      img: blog3,
      title: "Lorem ipsum dolor sit",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      id: 4,
      img: blog4,
      title: "Lorem ipsum dolor sit",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      id: 5,
      img: blog5,
      title: "Lorem ipsum dolor sit",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      id: 6,
      img: blog6,
      title: "Lorem ipsum dolor sit",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
  ];
  return (
    <div className="blogs py-[50px]">
      <div className="container">
        <div className="text-center">
          <h2 className="ops text-5xl text-[#164B60]">Recent Blogs</h2>
          <p className="ops mb-[50px] text-xl text-[#164B60]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {data.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
