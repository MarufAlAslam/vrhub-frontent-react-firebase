import React from "react";
import blog1 from "../../../assets/img/blog1.jpg";
import blog2 from "../../../assets/img/blog2.jpg";
import blog3 from "../../../assets/img/blog3.jpg";
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
  ];
  return (
    <div className="blogs py-[50px]">
      <div className="container">
        <div className="text-center">
          <h2 className="ops text-3xl mb-[50px]">Recent Blogs</h2>
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
