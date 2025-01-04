import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postData } from "../../api/api";
import styles from './Login.module.css';
import Logo from "../../Components/Logo";
import { useAuth } from "../../context/authContext";

function Login() {
    const { login } = useAuth();
    const [ error, setError ] = useState(null);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const loginFetch = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('username', formData.username);
        data.append('password', formData.password);

        try {
            const result = await postData('login', data);
            if (result.username) {
                alert(result.username);
                login(result)
                localStorage.setItem('user', JSON.stringify(result));
                navigate('/')
            }
        } catch (error) {
            console.error(error);
            setError('Error al realizar el login.');
        }
    };

    useEffect(() => {
        document.title = "Login - Register";
    }, []);

    return (
        <>
            <div className={styles.content}>
                <form className={styles.formLogin} onSubmit={loginFetch}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>CinesCat</h1>
                        <Logo width={60} height={60} fill={"#201e1e"} />
                    </div>
                    <input
                        className={styles.input}
                        name="username"
                        type="text"
                        placeholder="Usuario"
                        autoComplete="username"
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    />
                    <input
                        className={styles.input}
                        name="password"
                        type="password"
                        placeholder="Contraseña"
                        autoComplete="current-password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                    <input className={styles.button} type="submit" value="Entrar" />
                    {error && <p className={styles.error}>{error}</p>}
                </form>
            </div>
        </>
    );
}

export default Login;
