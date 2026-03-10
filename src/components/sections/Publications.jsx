import { ExternalLink, Quote } from 'lucide-react'
import { publications } from '../../data/publications'
import { SectionHeader } from '../ui/Section'
import Card from '../ui/Card'
import Tag from '../ui/Tag'
import styles from './Publications.module.css'

export default function Publications() {
  return (
    <section id="publications" className={styles.publications}>
      <div className="container">
        <SectionHeader
          title="论文发表"
          subtitle="近年的研究成果"
        />

        <div className={styles.list}>
          {publications.map((pub) => (
            <Card key={pub.id} hover className={styles.card}>
              <div className={styles.year}>{pub.year}</div>
              <h3 className={styles.title}>
                <a
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {pub.title}
                </a>
              </h3>
              <p className={styles.authors}>{pub.authors.join(', ')}</p>
              <p className={styles.venue}>{pub.venue}</p>
              <div className={styles.meta}>
                <div className={styles.tags}>
                  {pub.tags.map((tag, index) => (
                    <Tag key={index} size="sm">{tag}</Tag>
                  ))}
                </div>
                <div className={styles.stats}>
                  <span className={styles.citations}>
                    <Quote size={14} />
                    {pub.citations} 次引用
                  </span>
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.doi}
                  >
                    DOI <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
