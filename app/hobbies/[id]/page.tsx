import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './page.module.css'

// Hobby details - update this when you add new hobbies
// Make sure the id matches the id in data/hobbies.ts
const hobbyDetails: Record<string, {
  title: string
  techStack: string[]
  image: string
  description: string
  longDescription: string
}> = {
  'hobby-1': {
    title: 'Film Photography',
    techStack: ['Photography', 'Film Development', 'Analog Photography'],
    image: '/film.png',
    description: 'Hobbyist film photography enthusiast',
    longDescription: 'Hobbyist film photography enthusiast. Passionate about capturing moments through analog photography, exploring the unique aesthetic and process of film development.'
  },
  'hobby-2': {
    title: 'Women in Engineering - VP of Mentorship',
    techStack: ['Leadership', 'Mentorship', 'Event Planning', 'Community Building'],
    image: '/WiE.jpg',
    description: 'Vice President of Mentorship at Western University Women in Engineering',
    longDescription: 'Served as Vice President of Mentorship for Western University\'s Women in Engineering club from April 2022 to April 2023. Led the "Big Sister Little Sister" mentorship program, pairing 150 first-year female students with upper-year mentors to create a supportive community for academic and personal growth. Enhanced the program by introducing comprehensive compatibility surveys that improved mentor-mentee pairings and increased retention rates. Successfully increased Kick-Off event attendance by 43% through strategic email and social media promotion. Learn more at https://news.westernu.ca/2023/03/meet-the-changemakers-of-westerns-women-in-engineering-club%E2%80%AF/'
  },
  'hobby-3': {
    title: 'Hobby/Activity Title 3',
    techStack: ['Skill1', 'Skill2', 'Skill3'],
    image: 'https://via.placeholder.com/1200x600/0066cc/ffffff?text=Hobby+3',
    description: 'Short description',
    longDescription: 'This is a detailed description of Hobby/Activity 3. You can add more information about the hobby or extra-curricular activity here, including what you do, why you enjoy it, and any achievements or skills gained.'
  },
}

export default async function HobbyDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const hobby = hobbyDetails[id]

  if (!hobby) {
    return (
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <div className={styles.notFound}>
            <h1>Hobby Not Found</h1>
            <Link href="/hobbies" className={styles.backLink}>← Back to Hobbies</Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.projectDetail}>
          <Link href="/hobbies" className={styles.backLink}>← Back to Hobbies</Link>
          
          <div className={styles.imageContainer}>
            <Image
              src={hobby.image}
              alt={hobby.title}
              fill
              className={styles.image}
              sizes="100vw"
            />
          </div>

          <div className={styles.content}>
            <h1 className={styles.title}>{hobby.title}</h1>
            
            <div className={styles.techStack}>
              {hobby.techStack.map((tech, index) => (
                <span key={index} className={styles.tech}>
                  {tech}
                </span>
              ))}
            </div>

            <div className={styles.description}>
              <p dangerouslySetInnerHTML={{ __html: hobby.longDescription.replace(
                /(https?:\/\/[^\s]+)/g,
                '<a href="$1" target="_blank" rel="noopener noreferrer" style="color: #0066cc; text-decoration: underline;">$1</a>'
              ) }} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

