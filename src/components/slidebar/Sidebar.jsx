import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img
          src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg"
          alt=""
        />
        <p>
        You only live once in your life, why not live it to the fullest and share it all for everyone to know. 
        If it's hard to express those moments or emotions, bring it to MTPlog 🤟
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <a href="https://www.facebook.com/phonelitefromUIT/"><i  className="sidebarIcon fab fa-facebook-square"></i></a>
        <a href="https://twitter.com/TmTrngBlog1"><i className="sidebarIcon fab fa-twitter-square"></i></a>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <a href="https://www.instagram.com/blog.tam.trang/" ><i className="sidebarIcon fab fa-instagram-square"></i></a>
        </div>
      </div>
    </div>
  );
}
