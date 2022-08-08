import {getStudents} from "../mock-data/data";
import styles from '../../styles/student.module.css'
import Link from "next/link";
export default function Student() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <table className={styles.table}>
                    <thead>
                    <tr className={styles.tr}>
                        <th className={styles.th}>ID</th>
                        <th className={styles.th}>Name</th>
                        <th className={styles.th}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {getStudents().map(student => (
                        <tr className={styles.tr} key={student.id}>
                            <td className={styles.td}>{student.id}</td>
                            <td className={styles.td}>{student.name}</td>
                            <td className={styles.td}>
                                <Link href={`/info/${encodeURIComponent(student.id)}`}>
                                    <a>Show</a>
                                </Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
}