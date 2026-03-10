import styles from './Section.module.css'

export default function Section({
  children,
  id,
  className = '',
  background = 'default',
  ...props
}) {
  const classNames = [
    styles.section,
    styles[background],
    className
  ].filter(Boolean).join(' ')

  return (
    <section id={id} className={classNames} {...props}>
      <div className="container">
        {children}
      </div>
    </section>
  )
}

export function SectionHeader({ title, subtitle, className = '' }) {
  return (
    <div className={`${styles.header} ${className}`}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  )
}
