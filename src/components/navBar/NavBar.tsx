import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar: React.FC = (): JSX.Element => {
  return (
    <nav className={styles.navBar} data-testid="navigation">
      <NavLink
        to="/"
        data-testid="main-link"
        className={({ isActive }) => (isActive ? styles.navLinkActive : '')}
      >
        Main
      </NavLink>
      <NavLink
        to="/about"
        data-testid="about-link"
        className={({ isActive }) => (isActive ? styles.navLinkActive : '')}
      >
        About us
      </NavLink>
      <NavLink
        to="/form"
        data-testid="form-link"
        className={({ isActive }) => (isActive ? styles.navLinkActive : '')}
      >
        Form
      </NavLink>
    </nav>
  );
};

export default NavBar;
