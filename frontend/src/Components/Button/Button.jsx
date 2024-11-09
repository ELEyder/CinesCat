import React from "react";
import styles from './Button.module.css';
import { Link } from "react-router-dom";
function Button ({text ="Insertar texto", to = "/"}) {
    return(<>
        <Link className={styles.Button} to={to}>{text}</Link>
    </>)
}

export default Button