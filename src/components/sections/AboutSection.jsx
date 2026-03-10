import { GraduationCap, MapPin, Mail } from 'lucide-react'
import { profile } from '../../data/profile'
import { SectionHeader } from '../ui/Section'
import Tag from '../ui/Tag'
import styles from './AboutSection.module.css'

export default function AboutSection() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <SectionHeader
          title="关于我"
          subtitle="致力于人工智能领域的前沿研究"
        />

        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.contact}>
              <div className={styles.contactItem}>
                <Mail size={18} />
                <span>{profile.email}</span>
              </div>
              <div className={styles.contactItem}>
                <MapPin size={18} />
                <span>{profile.location}</span>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>
                <GraduationCap size={20} />
                教育背景
              </h3>
              <ul className={styles.educationList}>
                {profile.education.map((edu, index) => (
                  <li key={index} className={styles.educationItem}>
                    <span className={styles.degree}>{edu.degree}</span>
                    <span className={styles.field}>{edu.field}</span>
                    <span className={styles.school}>{edu.institution}</span>
                    <span className={styles.year}>{edu.year}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>研究方向</h3>
              <div className={styles.tags}>
                {profile.researchInterests.map((interest, index) => (
                  <Tag key={index} color="primary">{interest}</Tag>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
