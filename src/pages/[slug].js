// src/pages/essays/[slug].js
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { client } from '../sanity/lib/client'
import { getEssayBySlug } from '../sanity/lib/queries'
import { PortableText } from '@portabletext/react'
import '../styles/global.css'
import '../styles/essay.css'

export default function Essay() {
    const [essay, setEssay] = useState(null)
    const router = useRouter()
    const { slug } = router.query

    useEffect(() => {
        const fetchEssay = async () => {
            if (!slug) return  // Don't fetch if slug isn't available yet
            const data = await client.fetch(getEssayBySlug, { slug })
            setEssay(data)
        }
        fetchEssay()
    }, [slug])  // Re-fetch when slug changes

    if (!essay) return (
        <Layout>
            <motion.div 
                className="content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                Loading...
            </motion.div>
        </Layout>
    )

    return (
        <Layout title={essay.title}>
            <motion.div 
                className="content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.h1 
                    className="article-title"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    {essay.title}
                </motion.h1>
                
                <motion.div 
                    className="article-content"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <PortableText value={essay.content} />
                </motion.div>

                <motion.div 
                    className="article-line"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: .5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                />
                
                <motion.div 
                    className="navigation"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    {essay.prevEssay && (
                        <Link 
                            href={`/${essay.prevEssay.slug}`} 
                            className="nav-link nav-prev"
                            scroll={false}
                        >
                            Prev<br />
                            <span className="nav-title">{essay.prevEssay.title}</span>
                        </Link>
                    )}
                    {essay.nextEssay && (
                        <Link 
                            href={`/${essay.nextEssay.slug}`} 
                            className="nav-link nav-next"
                            scroll={false}
                        >
                            Next<br />
                            <span className="nav-title">{essay.nextEssay.title}</span>
                        </Link>
                    )}
                </motion.div>
                <div className="frosted-footer"></div>
            </motion.div>
        </Layout>
    )
}