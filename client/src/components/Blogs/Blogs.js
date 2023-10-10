import React, { useEffect, useState } from "react";
import "./blogs.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";

export default function Blogs() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  //   Get ALl Blogs
  const getBlog = async () => {
    try {
      const { data } = await axios.get(`/api/v1/blog/get-blog`);
      setData(data?.blog);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlog();
    //   eslint-disable-next-line
  }, []);

  return (
    <div className="blogs-wrapper1">
      {data?.map((blog) => (
        <>
          <div className="blog-container" data-aos="fade-up" key={blog?._id}>
            <div className="blog-left">
              <span>{moment(blog?.createdAt).format("MMMM D, YYYY")}</span>
              <div className="blog-auth">
                <img
                  src={`http://localhost:8080/api/v1/blog/auth-image/${blog?._id}`}
                  alt="auth"
                  style={{
                    width: "3.5rem",
                    height: "3.5rem",
                    borderRadius: ".4rem",
                  }}
                />
                <div className="auth-name">
                  <h3>{blog?.name}</h3>
                  <span>{blog?.designation}</span>
                </div>
              </div>
            </div>
            <div className="blog-right">
              <div className="blog-right-content">
                <h2>{blog?.title}</h2>

                <div className="blog-right-auth">
                  <span>{moment(blog?.createdAt).format("MMMM D, YYYY")}</span>
                  <div className="blog-auth">
                    <img
                      src={`http://localhost:8080/api/v1/blog/auth-image/${blog?._id}`}
                      alt="auth"
                      style={{
                        width: "3.5rem",
                        height: "3.5rem",
                        borderRadius: ".4rem",
                      }}
                    />
                    <div className="auth-name">
                      <h3>{blog?.name}</h3>
                      <span>{blog?.designation}</span>
                    </div>
                  </div>
                </div>

                <p>{blog?.shortDesc}</p>
                <button onClick={() => navigate(`/blogs/detail/${blog?._id}`)}>
                  Read More
                </button>
              </div>
            </div>
          </div>
          {/* ------------Lines------------ */}
          <div className="lines ml-[2rem]" data-aos="fade-up">
            <span></span>
            <span></span>
          </div>
        </>
      ))}
    </div>
  );
}
