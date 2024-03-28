import styles from './Header.module.css';

import todoLogotipo from '../assets/logo.svg';

export function Header() {
  return(
    <div className={styles.header}>
      <img className={styles.logotipo} src={todoLogotipo} />
    </div>
  );
}