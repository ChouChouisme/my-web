import { Calendar, MapPin, Presentation, GraduationCap } from 'lucide-react'
import { activities } from '../../data/activities'
import { SectionHeader } from '../ui/Section'
import Card from '../ui/Card'
import styles from './Activities.module.css'

export default function Activities() {
  return (
    <section id="activities" className={styles.activities}>
      <div className="container">
        <SectionHeader
          title="学术活动"
          subtitle="学术会议、讲座与教学经历"
        />

        <div className={styles.sections}>
          {/* Conferences */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <Presentation size={20} />
              学术会议
            </h3>
            <div className={styles.list}>
              {activities.conferences.map((item) => (
                <Card key={item.id} className={styles.card}>
                  <div className={styles.itemHeader}>
                    <h4 className={styles.itemTitle}>{item.title}</h4>
                    <span className={styles.role}>{item.role}</span>
                  </div>
                  <div className={styles.itemMeta}>
                    <span><MapPin size={14} /> {item.location}</span>
                    <span><Calendar size={14} /> {item.date}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Talks */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <Presentation size={20} />
              邀请讲座
            </h3>
            <div className={styles.list}>
              {activities.talks.map((item) => (
                <Card key={item.id} className={styles.card}>
                  <div className={styles.itemHeader}>
                    <h4 className={styles.itemTitle}>{item.title}</h4>
                  </div>
                  <div className={styles.itemMeta}>
                    <span>{item.venue}</span>
                    <span><MapPin size={14} /> {item.location}</span>
                    <span><Calendar size={14} /> {item.date}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Teaching */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <GraduationCap size={20} />
              教学经历
            </h3>
            <div className={styles.list}>
              {activities.teaching.map((item) => (
                <Card key={item.id} className={styles.card}>
                  <div className={styles.itemHeader}>
                    <h4 className={styles.itemTitle}>{item.course}</h4>
                    <span className={styles.level}>{item.level}</span>
                  </div>
                  <div className={styles.itemMeta}>
                    <span>{item.institution}</span>
                    <span><Calendar size={14} /> {item.period}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
