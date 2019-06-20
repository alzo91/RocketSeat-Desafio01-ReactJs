import React, { Fragment } from "react";
import "./styles.scss";

const Posts = props => (
  <div className="posts">
    {props.posts.map((item, index) => (
      <div className="post" key={index}>
        <div className="postHeader">
          <img src={item.imagem} />
          <div className="postTitle">
            <strong>{item.title}</strong>
            <span>{item.date}</span>
          </div>
        </div>
        <div className="postBody">
          <p>{item.describe}</p>
        </div>
      </div>
    ))}
  </div>
);

export default Posts;
