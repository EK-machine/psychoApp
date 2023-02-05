import styles from './Footer.module.css'

export interface FooterProps {
  className: string;
}

const Footer:React.FC<FooterProps> = ({className}) => {
  return (
    <footer className={`${styles.footerWrapper} ${!!className === true && className}`}>Footer</footer>
  )
}

export default Footer