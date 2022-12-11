import React from "react";
import Auth from "./components/Auth";
import Header from "./components/Header";
import {Route,Routes} from "react-router-dom"
import Blogs from "./components/Blogs";
import BlogDetail from "./components/BlogDetail";
import AddBlogs from "./components/AddBlogs";
import UserBlog from "./components/UserBlog";
import { useSelector } from "react-redux";
function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  console.log(isLoggedIn)
  return (
    <React.Fragment>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        <Route path="/auth" element={<Auth />}/>
        <Route path="/blogs" element={<Blogs />}/>
        <Route path="/blogs/add" element={<AddBlogs />}/>
        <Route path="/myBlogs" element={<UserBlog />} />
        <Route path="/myBlogs/:id" element={<BlogDetail />}/>
      </Routes>
    </main>
  </React.Fragment>
)}

export default App;
