import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
//import Router from 'router'
//import Router from 'router'
//import SignUp from './components/SignUp.jsx'
//import App2 from './App2'
//import LogIn from './components/LogIn.jsx'
//import Posts from './components/Posts'
//import Comments from './components/Comments.jsx'
import Dashboard from './components/Dashboard.jsx'
//import Search from './components/Search.jsx'
//import CreatePost from './components/CreatePost.jsx'
//import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
//import ProtectedRoute from './components/ProtectedRoute';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
      {/* <SignUp /> */}
      
      {/* <LogIn /> */}
    <Dashboard />
      {/* <Search />
      <CreatePost />
      <Comments/>
      <Posts /> */}
  </React.StrictMode>,
)
