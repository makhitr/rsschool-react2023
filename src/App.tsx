import React from 'react';
import AppRouter from './router/AppRouters';
import NavBar from './components/navBar/NavBar';

class App extends React.Component {
  render() {
    return (
      <div data-testid="app">
        <NavBar />
        <AppRouter />
      </div>
    );
  }
}

export default App;
