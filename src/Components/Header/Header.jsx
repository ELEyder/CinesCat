import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../Logo";
import Button from "../Button/Button";
import { useAuth } from "../../context/authContext";

function Header() {
  const { user, logout } = useAuth();
  return (
    <>
      <nav className={styles.header}>
        <div className={styles.title}>
          <Logo width={40} height={40} />
          <h1>CinesCat</h1>
        </div>
        <div className={styles.buttons}>
          <Button type={"header"} to={"/"} > Home </Button>
          <Button type={"header"} to={"/peliculas"} > Movies </Button>
          <Button type={"header"} to={"/cines"} > Cinemas </Button> 
          <Button type={"header"} to={"/películas"} > Concessions </Button>
          <Button type={"header"} to={"/about"} > About </Button>
        </div>
        {user ? (
          <div className={styles.buttons}>
            <Button text={user.username || "Profile"} to={"/profile"} />
            <Button text={"Logout"} onClick={logout} />
          </div>
        ) : (
          <Button to={"/login"}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 16.5V19C15 20.1046 14.1046 21 13 21H6C4.89543 21 4 20.1046 4 19V5C4 3.89543 4.89543 3 6 3H13C14.1046 3 15 3.89543 15 5V8.0625M11 12H21M21 12L18.5 9.5M21 12L18.5 14.5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        )}
      </nav>
    </>
  );
}

export default Header;
