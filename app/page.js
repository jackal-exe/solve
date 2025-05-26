'use client';
import React, { useEffect, useState } from 'react';
import { Navbar } from './components/navbar';
import { LoadingScreen } from './components/loading';
import { HeroBanner } from './components/hero-banner';
import { IntroductionOne } from './components/introduction-one';
import { IntroductionTwo } from './components/introduction-two';
import { IntroductionThree } from './components/introduction-three';
import { IntroductionFour } from './components/introduction-four';

export default function App() {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setTimeout(() => setMount(true), 2000);
  }, []);

  if (!mount) {
    return <LoadingScreen />;
  }

  return (
    <React.Fragment>
      <Navbar />
      <HeroBanner />
      <IntroductionOne />
      <IntroductionTwo />
      <IntroductionThree />
      <IntroductionTwo />
      <IntroductionFour />
    </React.Fragment>
  );
}
