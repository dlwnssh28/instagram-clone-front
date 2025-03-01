import React from "react"
import "./Sidenav.css"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from "@mui/icons-material/Search";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import TelegramIcon from "@mui/icons-material/Telegram";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import MenuIcon from "@mui/icons-material/Menu";

function Sidenav() {
  return (
    <div className="sidenav">
      <img
        className="sidenav__logo"
        src="https://i.namu.wiki/i/vC4EDlF-2rZRn7tEK6ooc6_Y5rOacL0uwUhUctMlvngdEqca4mc4vlHv8NJ5iloXDsZodFP4451tARC7YCDi0JJdbWvW3Y1bjwQFMULRHi06kYDuxCN0Nbf2O1wnrpuOClrohpI_ZtQGrcbV-xizEw.svg"
        alt="Instagram Logo"
      />
      <div className="sidenav__buttons">
        <button className="sidenav__button">
            <HomeOutlinedIcon />
            <span className="sidenav__text">홈</span>
        </button>
        
        <button className="sidenav__button">
            <SearchIcon />
            <span className="sidenav__text">검색</span>
        </button>
        
        <button className="sidenav__button">
            <ExploreOutlinedIcon />
            <span className="sidenav__text">탐색 탭</span>
        </button>
        
        <button className="sidenav__button">
            <SlideshowIcon />
            <span className="sidenav__text">릴스</span>
        </button>
        
        <button className="sidenav__button">
            <TelegramIcon />
            <span className="sidenav__text">메세지</span>
        </button>
        
        <button className="sidenav__button">
            <FavoriteBorderIcon />
            <span className="sidenav__text">알림</span>
        </button>
        
        <button className="sidenav__button">
            <AddBoxOutlinedIcon />
            <span className="sidenav__text">만들기</span>
        </button>
      </div>
      <div className="sidenav__more">
        <button className="sidenav__button">
            <MenuIcon />
            <span className="sidenav__text">더 보기</span>
        </button>
      </div>
    </div>
  )
}

export default Sidenav