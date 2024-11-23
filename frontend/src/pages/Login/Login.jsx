import React, { useEffect, useState } from "react";
import { postData } from "../../api/api";
import styles from './Login.module.css';
import Logo from "../../Components/Logo";

function Login() {
    const [error, setError] = useState(null);

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    // Manejo del formulario de login
    const login = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('username', formData.username);
        data.append('password', formData.password);

        try {
            const result = await postData('login', data);
            console.log(result);

            // Aquí podrías verificar de forma más precisa si el login fue exitoso
            if (result.status === 200) {
                alert("Login realizado");
                // Aquí podrías redirigir o hacer alguna acción adicional
            }
        } catch (error) {
            console.error(error);
            setError('Error al realizar el login.');
        }
    };

    // Cambiar el título de la página cuando se cargue el componente
    useEffect(() => {
        document.title = "Login - Register";
    }, []);

    return (
        <>
            <div className={styles.content}>
                <form className={styles.formLogin} onSubmit={login}>
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
