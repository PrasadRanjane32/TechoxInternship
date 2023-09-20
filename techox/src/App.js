import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Loading from './Component/Pages/LoadingPage/Loading'
import './App.css';
import Home from './Component/Pages/Home/Home';
import AboutUs from './Component/Pages/About/AboutUs';
import Nav from './Component/Pages/Nav/Nav';
import Footer from './Component/Pages/Footer/Footer';
import ContactUs from './Component/Pages/ContactUs/ContactUs';
import PageNotFound from './Component/Pages/404/PageNotFound';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate app loading with a delay of 4.4 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 8990);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
  <div className="App">
      {isLoading ? ( // Showing Loading component while isLoading is true
        <Loading />
        
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/contactus" element={<ContactUs/>} />
            <Route path="*" element={<PageNotFound/>} />
          </Routes>
          {/* NavigationBar */}
          <Nav/>

          {/* Footer */}
          <Footer/>
        </Router>
      )}
    </div>
  );
}

export default App;
