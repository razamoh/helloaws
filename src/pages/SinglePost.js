import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SinglePost = ({ match }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`/api/posts/${match.params.id}`)  // Adjust the URL based on your actual API endpoint
      .then(response => setPost(response.data))
      .catch(error => console.error('Error fetching post:', error));
  }, [match.params.id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default SinglePost;
