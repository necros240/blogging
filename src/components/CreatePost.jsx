
import React from 'react';
import PropTypes from 'prop-types';
import './CreatePost.css';

const CreatePost = ({onAddPost}) => {
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const [categories, setCategories] = React.useState('');
  const [tags, setTags] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPost({ title, content, categories: categories.split(','), tags: tags.split(','), id: Date.now() });
    setTitle('');
    setContent('');
    setCategories('');
    setTags('');
  };

  return (
    <form className='create-post-form' onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        required
      />
      <input
        type="text"
        value={categories}
        onChange={(e) => setCategories(e.target.value)}
        placeholder="Categories (comma-separated)"
      />
      <input
        type="text"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        placeholder="Tags (comma-separated)"
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

CreatePost.propTypes = {
  onAddPost: PropTypes.func.isRequired,
};

export default CreatePost;
