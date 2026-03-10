import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import styles from './Header.module.css'

const navItems = [
  { id: 'about', label: '关于' },
  { id: 'publications', label: '论文发表' },
  { id: 'projects', label: '研究项目' },
  { id: 'activities', label: '学术活动' }
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <a href="#" className={styles.logo}>
          个人主页
        </a>

        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={styles.navLink}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
