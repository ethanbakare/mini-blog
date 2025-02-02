// src/pages/HomePage.js
import { useState, useEffect } from 'react'
import Link from 'next/link'
import '../styles/global.css'
import '../styles/homepage.css'
import { client } from '../sanity/lib/client'
import { homePageQuery } from '../sanity/lib/queries'

export default function HomePage() {
    const [essays, setEssays] = useState([])

    useEffect(() => {
        const fetchEssays = async () => {
            const data = await client.fetch(homePageQuery)
            setEssays(data)
        }
        fetchEssays()
    }, [])

    // Format date to match our design (e.g., JAN 24)
    const formatDate = (dateString) => {
        if (!dateString) return ''
        const date = new Date(dateString)
        return `${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear().toString()}`
    }

    return (
        <div className="content">
            <div className="intro-text">
                <p>Welcome to my corner of the internet.</p>
                <p>For those who consume tirelessly but hesitate to create.</p>
                <p>These essays explore how small acts of self-expression online can help you find like-minded people and develop your voice.</p>
            </div>
            {essays.map((essay) => (
                <Link 
                    href={`/${essay.slug}`} 
                    className="essay-wrapper-link"
                    key={essay.slug}
                >
                    <div className="essay-wrapper">
                        <div className="essay-header">
                            <h2 className="home-title">{essay.title}</h2>
                            <span className="home-description">{essay.description}</span>
                        </div>
                        <div className="home-line"></div>
                        <div className="home-date">{formatDate(essay.publishedAt)}</div>
                    </div>
                </Link>
            ))}
            <div className="frosted-footer"></div>
        </div>
    )
}