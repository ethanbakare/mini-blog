// src/pages/_app.js
import '@/styles/global.css'
import '@/styles/homepage.css'
import '@/styles/essay.css'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Component {...pageProps} key={router.asPath} />
    </AnimatePresence>
  )
}

export default MyApp