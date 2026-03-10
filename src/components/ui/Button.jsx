import styles from './Button.module.css'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  ...props
}) {
  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
    className
  ].filter(Boolean).join(' ')

  if (href) {
    return (
      <a href={href} className={classNames} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classNames} {...props}>
      {children}
    </button>
  )
}
