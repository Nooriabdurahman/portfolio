import './App.css';
import Hero from './component/hero/hero';
import Protfolio from './component/portfolio/protfolio';
import Services from './component/services/services';
import Contect from './component/content.tsx/Contect';
import SignIn from './component/content.tsx/signIn';
import SignUp from './component/content.tsx/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page route */}
        <Route
          path="/"
          element={
            <div className="max-w-[1538px] ml-auto mr-auto">
              <section className="h-screen" id="hero">
                <Hero />
              </section>
              <section className="h-screen" id="services">
                <Services />
              </section>
              <Contect />
              <Protfolio />
            </div>
          }
        />
        {/* Sign-in and sign-up routes with lowercase paths */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;