import Link from "next/link";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about/about">
                        <a>About Us</a>
                    </Link>

                </li>
                <li>
                    <Link href="/blog/blog">
                        <a>Blog</a>
                    </Link>
                </li>
                <li>
                    <Link href="/login">
                        <a>Logout</a>
                    </Link>
                </li>
                <li>
                    <Link href="/student/student">
                        <a>Student</a>
                    </Link>
                </li>
                <li>
                    <Link href='/covid/covid'>
                        <a>Covid</a>
                    </Link>
                </li>
            </ul>
            <div className={styles.container}>{children}</div>
        </div>
    );
}