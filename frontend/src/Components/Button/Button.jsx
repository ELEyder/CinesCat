import React from "react";
import styles from './Button.module.css';
import { Link } from "react-router-dom";
function Button ({text ="Insertar texto", to = "/", onClick = null}) {
    return(<>
        <Link className={styles.Button} to={to} onClick={onClick}>{text}</Link>
    </>)
}

export default Button