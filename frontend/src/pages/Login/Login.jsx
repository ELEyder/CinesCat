import React, { useEffect } from "react";
import styles from './Login.module.css';
import Logo from "../../Components/Logo";
import { Link } from 'react-router-dom'
function Login () {
    useEffect(()=>{
      document.title = "Login - Register";
    },[])
    return(<>
    <div className={styles.content}>
        <form className={styles.formLogin} action="">
            <div className={styles.header}>
                <h1 className={styles.title}>CinesCat</h1>
                <Logo width={60} height={60} fill={"#201e1e"}/>
            </div>
            <input className={styles.input} name="username" type="text" placeholder="Usuario" autoComplete="username"/>
            <input className={styles.input} name="password" type="password" placeholder="Password" autoComplete="current-password"/>
            <Link to={"/"} className={styles.button}>
                <input className={styles.button} type="submit" value="Entrar"/>
            </Link>
        </form>
    </div>
    </>)
}

export default Login