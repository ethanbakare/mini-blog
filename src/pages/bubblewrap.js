// src/pages/essays/bubblewrap.js
import Head from 'next/head'
import Link from 'next/link'

export default function Essay() {
    return (
        <>
            <Head>
                <title>Bubblewrap</title>
            </Head>
            <div className="content">
                <h1 className="article-title">Bubblewrap</h1>
                <p className="article-content">Right now, you're wondering why this post is called Bubblewrap. Good. That curiosity, that raised eyebrow – that's exactly what we're going to explore.</p>
                <p className="article-content">You know that satisfying feeling when you pop bubble wrap? That moment of connection between your action and the result. That's what we're all looking for online. A connection. A response. A pop.</p>
                <p className="article-content">Your words, your art, your code – they're all little bubbles waiting to be discovered. And somewhere out there is someone whose day will be made better by popping one.</p>
                <p className="article-content">Start small. Share something. See who gets it. They're out there, waiting to hear from someone who thinks like you.</p>
                <div className="article-line"></div>
                <div className="navigation">
                    <Link href="/essays/now-is-the-time" className="nav-link">
                        Prev<br />
                        <span>Now is the time</span>
                    </Link>
                    <Link href="/essays/create-your-own-gravity" className="nav-link" style={{textAlign: 'right'}}>
                        Next<br />
                        <span>Create your own gravity</span>
                    </Link>
                </div>
                <div className="frosted-footer"></div>
            </div>
        </>
    )
}