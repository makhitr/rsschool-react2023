import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

class NavBar extends React.Component {
  render() {
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
          to="/*"
          data-testid="error-link"
          className={({ isActive }) => (isActive ? styles.navLinkActive : '')}
        >
          Error
        </NavLink>
      </nav>
    );
  }
}
export default NavBar;
