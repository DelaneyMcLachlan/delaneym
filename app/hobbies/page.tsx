import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProjectCard from '@/components/ProjectCard'
import { hobbies } from '@/data/hobbies'
import styles from './page.module.css'
import TabNavigation from '@/components/TabNavigation'

export default function Hobbies() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.projectsSection}>
          <TabNavigation />
          <div className={styles.projectsGrid}>
            {hobbies.length > 0 ? (
              hobbies.map((hobby) => (
                <ProjectCard key={hobby.id} {...hobby} basePath="/hobbies" />
              ))
            ) : (
              <p className={styles.emptyMessage}>Hobbies and extra-curriculars will appear here</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

