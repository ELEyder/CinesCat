import React from "react";
import styles from './Login.module.css';
import Logo from "../../Components/Logo";
function Login () {
    return(<>
    <div className={styles.content}>
        <form className={styles.formLogin} action="">
            <div className={styles.header}>
                <h1 className={styles.title}>CinesCat</h1>
                <Logo width={60} height={60} fill={"#201e1e"}/>
            </div>
            <input className={styles.input} type="text" placeholder="Usuario" autoComplete="username"/>
            <input className={styles.input} type="password" placeholder="Password" autoComplete="current-password"/>
            <input className={styles.button} type="submit" value="Entrar"/>
        </form>
    </div>
    </>)
}

export default Login