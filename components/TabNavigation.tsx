'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './TabNavigation.module.css'

export default function TabNavigation() {
  const pathname = usePathname()
  const isProjects = pathname === '/'
  const isHobbies = pathname === '/hobbies'

  return (
    <div className={styles.tabs}>
      <Link 
        href="/" 
        className={`${styles.tab} ${isProjects ? styles.active : ''}`}
      >
        Projects
      </Link>
      <Link 
        href="/hobbies" 
        className={`${styles.tab} ${isHobbies ? styles.active : ''}`}
      >
        Hobbies and Extra-Curriculars
      </Link>
    </div>
  )
}

