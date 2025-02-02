import Head from 'next/head'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/global.css'

export default function Layout({ children, title = 'Mini Blog' }) {
    // const currentYear = new Date().getFullYear()
    
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className="logo-wrapper">
                <Link href="/" className="logo-container">
                    <div className="logo"></div>
                </Link>
            </div>
            <AnimatePresence mode='wait'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
            {/* <div className="footer-text">
            Made by humans 🤞🏽 Copyright {currentYear}©
            </div> */}
        </>
    )
} 