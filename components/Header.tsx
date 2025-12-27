'use client'

import { useEffect, useState } from 'react'
import styles from './Header.module.css'
import { encodedLinks, decodeLink } from '@/utils/linkEncoder'

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [links, setLinks] = useState({
    github: '',
    linkedin: '',
    resume: '',
  })

  // Decode links only on client-side after mount
  useEffect(() => {
    setMounted(true)
    setLinks({
      github: decodeLink(encodedLinks.github),
      linkedin: decodeLink(encodedLinks.linkedin),
      resume: encodedLinks.resume,
    })
  }, [])

  // Handle navigation without exposing URLs in HTML
  const handleClick = (url: string) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.name}>Delaney M</h1>
        <nav className={styles.nav}>
          <button
            onClick={() => handleClick(links.github)}
            className={styles.link}
            type="button"
            disabled={!mounted}
          >
            GitHub
          </button>
          <button
            onClick={() => handleClick(links.linkedin)}
            className={styles.link}
            type="button"
            disabled={!mounted}
          >
            LinkedIn
          </button>
          <button
            onClick={() => handleClick(links.resume)}
            className={styles.link}
            type="button"
            disabled={!mounted}
          >
            Resume
          </button>
        </nav>
      </div>
    </header>
  )
}

