import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

// export const StyledNav = styled.nav`
//   display: flex;
//   align-items: flex-start;
//   padding: 40px;
//   flex-direction: column;
//   background-color: floralwhite;
//   max-width: 300px;
// `;
// export const StyledDiv = styled.div`
//   display: inline-block;
//   padding: 40px;
//   font-size: 16px;
//   font-weight: bolder;
//   color: brown;
// `;

export default function Fcomponents(props) {
  return (
    <nav className={s.nav}>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/profile" activeclassname={s.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/dialogs" activeclassname={s.activeLink}>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users" activeclassname={s.activeLink}>
          Users
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeclassname={s.activeLink}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeclassname={s.activeLink}>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" activeclassname={s.activeLink}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
}
