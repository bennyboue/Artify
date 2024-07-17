// src/App.js
import React from 'react';
import Header from './Header';
import HomePage from './HomePage';
import GalleryPage from './GalleryPage';
import AboutSection from './AboutSection';
import ServicesPage from './ServicesPage';
import TeamSection from './TeamSection';
import ValuesSection from './ValuesSection';
import ContactPage from './ContactPage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import SubscribePage from './SubscribePage';
import BuyArtworks from './BuyArtworks';
import ConnectWithArtists from './ConnectWithArtists';
import SellArtworks from './SellArtworks';
import Footer from './Footer';
import BackToTopButton from './BackToTopButton';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutSection />
      <TeamSection />
      <ValuesSection />
      <Footer />
      <BackToTopButton />
      <HomePage />
      <ContactPage />
      <GalleryPage />
      <LoginPage />
      <ServicesPage />
      <SignUpPage />
      <SubscribePage />
      <BuyArtworks />
      <ConnectWithArtists />
      <SellArtworks />
    </div>
  );
}

export default App;

