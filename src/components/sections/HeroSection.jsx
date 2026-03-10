import { ArrowDown } from 'lucide-react'
import { profile } from '../../data/profile'
import Button from '../ui/Button'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  const handleScrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <p className={styles.greeting}>您好，我是</p>
          <h1 className={styles.name}>{profile.name}</h1>
          <p className={styles.title}>{profile.title}</p>
          <p className={styles.institution}>{profile.institution}</p>
          <p className={styles.bio}>{profile.bio}</p>

          <div className={styles.actions}>
            <Button variant="primary" onClick={handleScrollToAbout}>
              了解更多
            </Button>
            <Button variant="outline" href="#publications">
              查看论文
            </Button>
          </div>
        </div>
      </div>

      <button className={styles.scrollIndicator} onClick={handleScrollToAbout} aria-label="Scroll to about">
        <ArrowDown size={24} />
      </button>
    </section>
  )
}
