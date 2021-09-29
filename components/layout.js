import Head from 'next/head'
import styles from './layout.module.css'

export default function Layout({ siteTitle, children }) {
    return (
        <div>
            <Head>
                <title>{siteTitle}</title>
                <link rel='icon' href='/compass.png' />
            </Head>

            <header>
                <h2 className={styles.header}>{siteTitle}</h2>
                <hr></hr>
            </header>

            <main>{children}</main>

            <footer>
                <h3 className={styles.autorship}>by: Cristian Barni</h3>
            </footer>
        </div>
    )
}