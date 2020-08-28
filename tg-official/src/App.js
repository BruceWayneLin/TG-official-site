import React from 'react';
import './App.css';
import './scss/app.scss';
import './components/fontAwesome/index';
import Nav from './components/nav/index'
import Banner from './components/banner/index'
import FirstDiv from './components/firstDiv/index'
import SecDiv from './components/secDiv/index'
import Rules from './components/rules/index'
import Games from './components/games/index'
import Profile from './components/profile/index'
import Level from './components/level/index'
import About from './components/about/index'
import Footer from './components/footer/index'

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner/>
      <FirstDiv/>
      <SecDiv/>
      <Rules/>
      <Games/>
      <Profile/>
      <Level/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
