import React, { useEffect, useState } from "react";
import styles from './index.module.css';
import { Link } from "react-router-dom";
function Login () {
    useEffect(()=>{
      document.title = "Error 404 - ¿?";
    },[])
    const [urls, setUrls] = useState(['1', '2', '3', '4', '5'])
    return(<>
    <div className={styles.content}>
        <div className={styles.list}>
            <img className={styles.img} src={`src/assets/img/error/${urls[Math.floor(Math.random() * urls.length)]}.jpg`} alt="" />
            <h1 className={styles.title}>ERROR 404</h1>
            <p className={styles.details}>No se encontró la página. <Link to={'/'} className={styles.inicio}>Ir al inicio</Link></p>
        </div>
    </div>
    </>)
}

export default Login