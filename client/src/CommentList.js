import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState({});

  const fetchComments = useCallback(async () => {
    const res = await axios.get(`http://localhost:5000/posts/${postId}/comments`);
    setComments(res.data);
  }, [postId]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  const renderedComments = Object.values(comments).map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
