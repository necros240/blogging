
import React from 'react';
import PropTypes from 'prop-types';
import './Comments.css';


const Comments = ({ postId, comments, onAddComment }) => {
  const [comment, setComment] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddComment(postId, comment);
    setComment('');
  };

  return (
    <div className='comments-section'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment"
          required
        />
        <button type="submit">Comment</button>
      </form>
      <div className='comments-list'>
        {comments.map((comment, index) => (
          <div key={index} className='comment-item'>
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

Comments.propTypes = {
    postId: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(PropTypes.string).isRequired,
    onAddComment: PropTypes.func.isRequired,
  };

export default Comments;
