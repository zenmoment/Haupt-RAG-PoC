import { Outlet, NavLink, Link } from "react-router-dom";

import logo from "../../assets/Logo.png";

import styles from "./Layout.module.css";

import { useLogin } from "../../authConfig";

import { LoginButton } from "../../components/LoginButton";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <Link to="/" className={styles.headerTitleContainer}>
                    <h3 className={styles.headerTitle}>Frag dis Buech</h3>
                        <img
                            src={logo}
                            alt="Logo"
                            aria-label="Logo"
                            width="73px"
                            height="50px"
                            className={styles.chatbotLogo}
                        />
                    </Link>
                    <h4 className={styles.headerRightText}>Haupt Chatbot RAG PoC</h4>
                    {useLogin && <LoginButton />}
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;
