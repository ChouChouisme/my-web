import styles from './Card.module.css'

export default function Card({
  children,
  className = '',
  hover = false,
  padding = 'md',
  ...props
}) {
  const classNames = [
    styles.card,
    hover && styles.hover,
    styles[`padding-${padding}`],
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  )
}
