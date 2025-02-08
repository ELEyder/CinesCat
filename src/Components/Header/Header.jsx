import React from "react";
import { Link } from "react-router-dom";
import styles from './Header.module.css';
import Logo from "../Logo";
import Button from "../Button/Button";
import { useAuth } from "../../context/authContext";

function Header () {
    const { user, logout } = useAuth();
    return(<>
        <nav className={styles.header}>
            <div className={styles.title}>
                <Logo width={40} height={40}/>
                <h1>CinesCat</h1>
            </div>
            <div className={styles.buttons}>
                <Button text={'Home'} to={'/'}/>
                <Button text={'Movies'} to={'/peliculas'}/>
                <Button text={'Cinemas'} to={'/cines'}/>
                <Button text={'concessions'} to={'/películas'}/>
                <Button text={'About'} to={'/about'}/>
            </div>
            {user ? (
                <div className={styles.buttons}>
                    <Button text={user.username || 'Profile'} to={'/profile'} />
                    <Button text={'Logout'} onClick={logout} />
                </div>
            ) : (
                <Button text={'Login'} to={'/login'}/>
            )}
        </nav>
    </>)
}

export default Header