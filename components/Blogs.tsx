import React, { useState } from "react";
import Blog from "./Blog";
import { BlogProps } from "types";
import { useBlogs } from "hooks";
import { EMPTY_ARRAY, BLOG_INITIAL_LIMIT } from "constant";
const Blogs = (): JSX.Element => {
  const [limit,setLimit] = useState(BLOG_INITIAL_LIMIT)
  const { blogs, isLoading, error } = useBlogs();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  return (
    <div className="row">
      {blogs.slice(EMPTY_ARRAY,limit).map((blog: BlogProps) => (
        <Blog blog={blog} key={blog?.id} />
      ))}
      {(blogs?.length === EMPTY_ARRAY || blogs?.length >= limit) &&(
        <div className="col-sm-12 justify-content-center d-flex">
          <button className="btn btn-primary" onClick={() => setLimit(limit + BLOG_INITIAL_LIMIT)}>Show more</button>
        </div>
      )}
    </div>
  );
};
export default Blogs;
