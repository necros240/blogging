
import React from 'react';
import CreatePost from './CreatePost';
import Posts from './Posts';
import Search from './Search';
import './Dashboard.css'
import Chatbot from './Chatbot';

const Dashboard = () => {
  const [isSignedIn, setIsSignedIn] = React.useState(false);
  const [posts, setPosts] = React.useState([]);
  const [filteredPosts, setFilteredPosts] = React.useState([]);
  const [showDashboard, setShowDashboard] = React.useState(true);

  /* const addPost = (post) => {
    setPosts([...posts, { ...post, comments: [], likes: 0, liked: false }]);
  }; */

  /* const addComment = (postId, comment) => {
    setPosts(posts.map((post) => (post.id === postId ? { ...post, comments: [...post.comments, comment] } : post)));
  };

  const toggleLike = (postId) => {
    setPosts(posts.map((post) => (post.id === postId ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 } : post)));
  }; */

  const handleSignIn = () => {
    setIsSignedIn(true);
    setShowDashboard(true);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    setShowDashboard(false);
  };






  const addPost = async(post) => {

    const response = await fetch('https://source.unsplash.com/random');
    const imageUrl = response.url;


    const newPost = { ...post, id: Date.now(), comments: [], likes: 0, liked: false, imageUrl };
    const newPosts = [...posts, newPost];
    setPosts(newPosts);
    setFilteredPosts(newPosts);
  };

  const addComment2 = (postId, comment) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, comments: [...post.comments, comment] } : post
    );
    setPosts(updatedPosts);
    setFilteredPosts(updatedPosts);
  };

  const toggleLike2 = (postId) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId
        ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
        : post
    );
    setPosts(updatedPosts);
    setFilteredPosts(updatedPosts);
  };

  const handleSearch = (query) => {
    const lowercasedQuery = query.toLowerCase();
    const searchResults = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(lowercasedQuery) ||
        post.content.toLowerCase().includes(lowercasedQuery) ||
        post.categories.some((category) => category.toLowerCase().includes(lowercasedQuery)) ||
        post.tags.some((tag) => tag.toLowerCase().includes(lowercasedQuery))
    );
    setFilteredPosts(searchResults);
  };

  return (
    
    <div className='dashboard-container'>
        {!isSignedIn ? (
          <button className="sign-in-button" onClick={handleSignIn}>
            Sign In
          </button>
        ) : (
          <div>
            <nav className="navbar">
              <button onClick={() => setShowDashboard(!showDashboard)}>
                {showDashboard ? 'Hide' : 'Show'} Dashboard
              </button>
              <button onClick={handleSignOut}>Sign Out</button>
            </nav>
            {showDashboard && (
              <div className='dashboard-content'>
                <Search onSearch={handleSearch}/>
                <CreatePost onAddPost={addPost} />
              </div>
            )}
          </div>
        )}
        <Chatbot />
        <Posts Posts={filteredPosts} posts={posts} onAddComment2={addComment2} onToggleLike2={toggleLike2}/>
    </div>
  );
};

export default Dashboard;
