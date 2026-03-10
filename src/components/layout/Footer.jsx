import { Mail, Github, BookOpen } from 'lucide-react'
import { profile } from '../../data/profile'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.info}>
          <p className={styles.name}>{profile.name}</p>
          <p className={styles.title}>{profile.title} | {profile.institution}</p>
        </div>

        <div className={styles.links}>
          <a href={`mailto:${profile.email}`} className={styles.link} aria-label="Email">
            <Mail size={20} />
          </a>
          {profile.social.github && (
            <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className={styles.link} aria-label="GitHub">
              <Github size={20} />
            </a>
          )}
          {profile.social.scholar && (
            <a href={profile.social.scholar} target="_blank" rel="noopener noreferrer" className={styles.link} aria-label="Google Scholar">
              <BookOpen size={20} />
            </a>
          )}
        </div>

        <p className={styles.copyright}>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
