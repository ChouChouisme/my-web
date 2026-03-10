import { Calendar, Users, DollarSign } from 'lucide-react'
import { projects } from '../../data/projects'
import { SectionHeader } from '../ui/Section'
import Card from '../ui/Card'
import Tag from '../ui/Tag'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <SectionHeader
          title="研究项目"
          subtitle="主持和参与的研究课题"
        />

        <div className={styles.grid}>
          {projects.map((project) => (
            <Card key={project.id} hover className={styles.card}>
              <div className={styles.header}>
                <h3 className={styles.title}>{project.title}</h3>
                <Tag color="primary">{project.role}</Tag>
              </div>

              <p className={styles.description}>{project.description}</p>

              <div className={styles.meta}>
                <div className={styles.metaItem}>
                  <Calendar size={16} />
                  <span>{project.period}</span>
                </div>
                <div className={styles.metaItem}>
                  <DollarSign size={16} />
                  <span>{project.funding}</span>
                </div>
                <div className={styles.metaItem}>
                  <Users size={16} />
                  <span>金额: {project.amount}</span>
                </div>
              </div>

              {project.collaborators.length > 0 && (
                <div className={styles.collaborators}>
                  <span className={styles.collabLabel}>合作者:</span>
                  {project.collaborators.map((person, index) => (
                    <span key={index} className={styles.person}>{person}</span>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
