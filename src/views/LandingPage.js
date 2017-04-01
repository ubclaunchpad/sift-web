import React from 'react';
import LoginForm from './../components/LoginForm';

const LandingPage = () => (
  <div>
    <h1> Sift </h1>
    <h2> A simple review <span> aggregator</span> app. </h2>
    <LoginForm />
  </div>
);

LandingPage.displayName = 'LandingPage';

export default LandingPage;