import React from "react";
import { Article } from "../../component";
import "./blog.css";
import blogImage from "./import"
function Blog() {
  return (
    <div className="gpt3__blog section_padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container-groupA">
          <Article imageUrl={ blogImage.blog01} date="may 16 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className="gpt3__blog-container-groupB">
        <Article imageUrl={blogImage.blog02} date="may 16 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imageUrl={blogImage.blog03} date="may 16 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imageUrl={blogImage.blog04} date="may 16 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imageUrl={blogImage.blog05} date="may 16 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
      </div>
    </div>
  );
}

export default Blog;
