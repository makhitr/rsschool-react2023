import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from '../pages/AboutPage/AboutPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import MainPage from '../pages/MainPage/MainPage';
import FormPage from '../pages/FormPage/FormPage';

class AppRouter extends React.Component {
  render(): React.ReactNode {
    return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    );
  }
}

export default AppRouter;
