import { BrowserRouter, Routes, Route}
from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Education from "./Pages/Education";
import Skills from "./Pages/Skills";
import Weather from "./Pages/Weather";

function App() {
  return (
   <BrowserRouter>
       <Navbar/>
        
          <Routes>
               <Route path="/" element={<Home />}/>
               <Route path="/contact" element={<Contact />}/>
               <Route path="/education" element={<Education />}/>
               <Route path="/skills" element={<Skills />}/>
               <Route path="/weather" element={<Weather />}/>

          </Routes>
      
       <Footer/>
   </BrowserRouter>
  );
}

export default App;
