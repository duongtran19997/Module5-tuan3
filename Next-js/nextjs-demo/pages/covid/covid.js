import styles from '../../styles/student.module.css'


function Covid({data}) {
   return( <div className={styles.container}>
        <main className={styles.main}>
            <table className={styles.table}>
                <thead>
                <tr className={styles.tr}>
                    <th className={styles.th}>Date</th>
                    <th className={styles.th}>Confirmed</th>
                    <th className={styles.th}>Active</th>
                    <th className={styles.th}>Recorvered</th>
                    <th className={styles.th}>Deadth</th>
                </tr>
                </thead>
                <tbody>
                {data.map((data,index) => (
                   <tr className={styles.tr} key={index}>
                        <td>{new Date(data.Date).toLocaleDateString()}</td>
                       <td>{data.Confirmed}</td>
                       <td>{data.Active}</td>
                       <td>{data.Recorvered}</td>
                       <td>{data.Deaths}</td>
                   </tr>
                ))}
                </tbody>
            </table>
        </main>
    </div>)

}

export default Covid

export async function getStaticProps() {
    const res = await fetch("https://api.covid19api.com/total/country/vietnam")
    let data = await res.json();
    return {
        props: {data}
    }
}
