import styles from './Tag.module.css'

export default function Tag({ children, color = 'default', className = '' }) {
  const classNames = [
    styles.tag,
    styles[color],
    className
  ].filter(Boolean).join(' ')

  return (
    <span className={classNames}>
      {children}
    </span>
  )
}
