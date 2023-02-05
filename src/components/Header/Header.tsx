import Link from 'next/link'
import styles from './Header.module.css'

export interface HeaderProps {
  className: string;
}

const Header: React.FC<HeaderProps> = ({className}) => {
  return (
    <header className={`${styles.headerWrapper} ${!!className === true && className}`}>
      <nav className={styles.navigation}>
        <Link className={styles.link} href='/'>Главная</Link>
        <Link className={styles.link} href='/about'>Обо мне</Link>
        <div className={styles.dropdownWrapper}>
          <div className={styles.likelinkWrapper}>Полезное</div>
          <div className={styles.dropdown}>
            <Link className={styles.link} href='/faq'>Вопросы</Link>
            <Link className={styles.link} href='/articles'>Статьи</Link>
            <div className={styles.recommendationsBlock}>
              <div className={styles.sideDropdownWrapper}>
                <div className={styles.likelinkWrapperSecond}>Рекомендации</div>
                <div className={styles.sideDropdown}>
                  <Link className={styles.link} href='/tests'>Тесты</Link>
                  <Link className={styles.link} href='/techniques'>Техники</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link className={styles.link} href='/announcements'>Анонсы мероприятий</Link>
      </nav>
    </header>
  )
}

export default Header;