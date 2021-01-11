import React from "react";
import "./Sidebar.css";
import Logo from "./spotify.png";
import SidebarOption from "../SidebarOption/SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import {useDataLayerValue} from "../DataLayer/DataLayer";

function Sidebar() {
    const [{playlists}, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img src={Logo} alt="spotify logo" className="sidebar-logo"></img>
    

    <SidebarOption title="Home" Icon = {HomeIcon}/>
    <SidebarOption title="Search" Icon = {SearchIcon}/>
    <SidebarOption title="My Library" Icon = {LibraryMusicIcon}/>
    <br></br>
    <strong className = "sidebar-title">PLAYLISTS</strong>
    <hr></hr>

   {playlists?.items?.map(playlist => (
    <SidebarOption title = {playlist.name}/>
   ))}
    
    </div>
  );
}

export default Sidebar;
