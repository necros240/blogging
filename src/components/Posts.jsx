
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Comments from './Comments';
import PropTypes from 'prop-types';
import './Posts.css'


const Posts = ({ posts, onAddComment, onToggleLike }) => {
  return (
    <div  className='posts-container'>
      {posts.map((post) => (
        <div key={post.id} className='post-card'>
          <h2>{post.title}</h2>
          <img src={post.imageUrl} alt="Random from Unsplash" className="post-image" />
          <p>{post.content}</p>
          <p>Categories: {post.categories.join(', ')}</p>
          <p>Tags: {post.tags.join(', ')}</p>
          <button onClick={() => onToggleLike(post.id)}>
            {post.liked ? 'Unlike' : 'Like'} ({post.likes})
          </button>
          <div className='comments-container'>
            <Comments postId={post.id} comments={post.comments} onAddComment={onAddComment} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;

Posts.propTypes = {
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        categories: PropTypes.arrayOf(PropTypes.string).isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        liked: PropTypes.bool.isRequired,
        likes: PropTypes.number.isRequired,
        comments: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
          })
        ).isRequired,
      })
    ).isRequired,
    onAddComment: PropTypes.func.isRequired,
    onToggleLike: PropTypes.func.isRequired,
  };
  
