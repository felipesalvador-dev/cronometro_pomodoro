import styles from './style.module.css';
import { Home, History, Settings, Sun, Moon } from 'lucide-react';
import { useState } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }

  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} href="#" aria-label="Home">
        <Home />
      </a>

      <a className={styles.menuLink} href="#" aria-label="History">
        <History />
      </a>

      <a className={styles.menuLink} href="#" aria-label="Settings">
        <Settings />
      </a>

      <a
        className={styles.menuLink}
        href="#"
        onClick={handleThemeChange}
        aria-label="Mudar Tema"
      >
        {theme === 'dark' ? <Sun /> : <Moon />}
      </a>
    </nav>
  );
}