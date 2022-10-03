import React, { useState } from "react";
import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Header = ({handleToggleSidebar}) => {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${input}`)
    console.log(e)
  }
  const [input, setInput] = useState('')
  return (
    <div className="header">
      <FaBars className="header__menu" size={26} onClick={() => handleToggleSidebar()} />
      <img  
        src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
        alt=""
        className="header__logo"
      />
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={e=> setInput(e.target.value)} type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img
          src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png"
          alt=""
        />
      </div>
    </div>
  );
};
export default Header;
