import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.css'

export const siteTitle = 'Chatuba Compass v2.0'

// Defines the default layout for all pages
export default function Layout({ children, home }) {
    return (

        <div>
            <Head>
                <title>{siteTitle}</title>
                <link rel='icon' href='/compass.png' />
            </Head>

            <header>
                <h2 className={styles.header}>
                    <Link href='/'>{siteTitle}</Link>
                </h2>
            </header>

            <main>{children}</main>
        </div>
    )
}

