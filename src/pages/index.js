// src/pages/index.js
import Link from 'next/link'
import Head from 'next/head'
import '../styles/global.css'
import HomePage from './HomePage'
import MasterNavHeader from './master-nav-header'
export default function Home() {
    return (
        <>
            <Head>
                <title>Homepage</title>
            </Head>
                <MasterNavHeader />
                <HomePage />
                
        </>
    )
}