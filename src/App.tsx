import React from 'react';
import AppRouter from './router/AppRouters';
import NavBar from './components/navBar/NavBar';
import styles from './App.module.css';

class App extends React.Component {
  render() {
    return (
      <div data-testid="app" className={styles.app}>
        <NavBar />
        <AppRouter />
      </div>
    );
  }
}

export default App;
