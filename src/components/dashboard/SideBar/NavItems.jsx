import React from "react";
import { NavItemsStyle } from "./style";
import { Dashboard, Star, Settings } from "@mui/icons-material/";
import { Link } from "react-router-dom";
export default function NavItems() {
  return (
    <NavItemsStyle>
      <li>
        <Link to="profile"><Dashboard style={{ marginRight: 10 }}/>Dashboard</Link>
      </li>
      <li>
        
        <Link to="favorites"><Star style={{ marginRight: 10 }}/>Favorites</Link>
      </li>
      <li>
        
        <Link to="settings"><Settings style={{ marginRight: 10 }} />Settings</Link>
      </li>
    </NavItemsStyle>
  );
}
