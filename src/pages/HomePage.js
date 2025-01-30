// src/pages/essays/bubblewrap.js
import Head from 'next/head'
import Link from 'next/link'
import '../styles/global.css'
import '../styles/homepage.css'

export default function HomePage() {
    return (
        <div className="content">

        <div className="intro-text">
            <p>Welcome to my corner of the internet.</p>
            <p>For those who consume tirelessly but hesitate to create.</p>
            <p>These essays explore how small acts of self-expression online can help you find like-minded people and develop your voice.</p>
        </div>
        <Link href="/bubblewrap" className="essay-wrapper-link">
            <div className="essay-wrapper">
                <div className="essay-header">
                    <h2 className="home-title">Bubblewrap</h2>
                    <span className="home-description">Someone who gets it.</span>
                </div>
                <div className="home-line"></div>
                <div className="home-date">Jan 2024</div>
            </div>
        </Link>
        <Link href="/essays/create-your-own-gravity" className="essay-wrapper-link">
            <div className="essay-wrapper">
                <div className="essay-header">
                    <h2 className="home-title">Create your own gravity</h2>
                    <span className="home-description">Authenticity attracts.</span>
                </div>
                <div className="home-line"></div>
                <div className="home-date">Jan 2024</div>
            </div>
        </Link>
        <Link href="/essays/now-is-the-time" className="essay-wrapper-link">
            <div className="essay-wrapper">
                <div className="essay-header">
                    <h2 className="home-title">Now is the time</h2>
                    <span className="home-description">Seize your moment.</span>
                </div>
                <div className="home-line"></div>
                <div className="home-date">Jan 2024</div>
            </div>
        </Link>
        <Link href="/essays/the-moment-that-is-you" className="essay-wrapper-link">
            <div className="essay-wrapper">
                <div className="essay-header">
                    <h2 className="home-title">The moment that is you</h2>
                    <span className="home-description">Shaped by everything.</span>
                </div>
                <div className="home-line"></div>
                <div className="home-date">Jan 2024</div>
            </div>
        </Link>
        <Link href="/essays/a-simple-truth" className="essay-wrapper-link">
            <div className="essay-wrapper">
                <div className="essay-header">
                    <h2 className="home-title">A simple truth</h2>
                    <span className="home-description">After debates.</span>
                </div>
                <div className="home-line"></div>
                <div className="home-date">Jan 2024</div>
            </div>
        </Link>
        <div className="frosted-footer"></div>
    </div>
    )
}