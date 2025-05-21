import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SupabaseProvider from "./context/SupabaseProvider";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Expertise from "./pages/Expertise";
import Contact from "./pages/Contact";
import IndustriesPage from "./pages/industries";
import IndustryDetailPage from "./pages/industries/[slug]";
import People from "./pages/People";
function App() {
  return (
    <SupabaseProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/expertise" element={<Expertise />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route
                path="/industries/:slug"
                element={<IndustryDetailPage />}
              />
              <Route path="/people" element={<People />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </SupabaseProvider>
  );
}

export default App;
