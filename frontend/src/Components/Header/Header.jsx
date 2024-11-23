import React from "react";
import styles from './Header.module.css';
import Logo from "../Logo";
import Button from "../Button/Button";
function Header () {
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
            <Button text={'Login'} to={'/login'}/>
        </nav>
    </>)
}

export default Header