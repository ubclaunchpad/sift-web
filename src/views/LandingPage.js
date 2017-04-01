import React from 'react';
import LoginPage from './../components/LoginPage';

const LandingPage = () => (
  <div>
    <h1> Sift </h1>
    <h2> A simple review <span> aggregator</span> app. </h2>
    <LoginPage />
  </div>
);

LandingPage.displayName = 'LandingPage';

export default LandingPage;