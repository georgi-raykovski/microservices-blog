import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");
  const postsServiceUrl = "http://localhost:4000/posts";

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    await axios.post(postsServiceUrl, {
      title,
    });

    setTitle("");
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div className="form-group">
          <label>Title</label>
          <input
            className="form-control"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
