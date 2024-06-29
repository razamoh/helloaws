import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import SinglePost from './pages/SinglePost';
import './styles/theme.css';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/"  element={<Home/>} />
        <Route path="/blog"  element={<Blog/>} />
        <Route path="/blog/:id" component={<SinglePost/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
