import React,{useState,useRef,useEffect} from 'react'
import {FaBars} from "react-icons/fa"
import Logo from "../src/images/logom2.png"
import  {links} from "./dataNav";

const Navbar = () => {
 const [showNav,setShowNav]= useState(false);
 const navContainerRef = useRef(null) ;
 const navRef = useRef(null);
 const toggleNav = () =>{
  setShowNav(!showNav);
 }
 useEffect(() =>{
  const linksHeight = navRef.current.getBoundingClientRect().height;
  if(showNav){
   navContainerRef.current.style.height = `${linksHeight}px`
  }else{
   navContainerRef.current.style.height = `0px`;
  }
 },[showNav])
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={Logo} className='logo' alt='' />
          <button className='btn-toggle' onClick={toggleNav}>
            <FaBars />
          </button>
        </div>
        <div className="nav-container" ref={navContainerRef}>
         <ul className="links" ref={navRef}>
{links.map((link) =>{
 const{id,url,text} = link;
 return(
  <li key={id}>
   <a href={url}>{text}</a>
  </li>
 )
})}
         </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
