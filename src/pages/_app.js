// src/pages/_app.js
import '@/styles/global.css'
import '@/styles/homepage.css'
import '@/styles/essay.css'

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp