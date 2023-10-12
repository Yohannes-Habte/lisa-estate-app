import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Signin from './views/Signin';
import Profile from './views/Profile';
import Signout from './views/Signout';
import Notfound from './views/Notfound';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-out" element={<Signout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
