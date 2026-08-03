import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SupabaseProvider from "./context/SupabaseProvider";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Expertise from "./pages/Expertise";
import Contact from "./pages/Contact";
import IndustriesPage from "./pages/industries";
import IndustryDetailPage from "./pages/industries/[slug]";
import People from "./pages/People";
import LeadershipDetail from "./pages/about/LeadershipDetail";
import ClientDetail from "./pages/about/ClientDetail";
import ScrollToHandler from "./utils/ScrollToHandler";
import ExpertiseDetailPage from "./pages/expertise/[slug]";
import { Button } from "./components/shared";
import CommunityPage from "./pages/community";
import IssueOnePage from "./pages/community/IssueOnePage";
import IssueTwoPage from "./pages/community/IssueTwoPage";
import BlogPage from "./pages/blog";
import BlogDetailPage from "./pages/blog/[slug]";
import BulletinPage from "./pages/bulletin";
function App() {
  return (
    <SupabaseProvider>
      <Router>
        <ScrollToHandler />
        <div className="flex flex-col min-h-screen">
          <Header />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/expertise" element={<Expertise />} />
              <Route
                path="/expertise/:slug"
                element={<ExpertiseDetailPage />}
              />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogDetailPage />} />
              <Route path="/bulletin" element={<BulletinPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route
                path="/industries/:slug"
                element={<IndustryDetailPage />}
              />
              <Route path="/people" element={<People />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/about/leadership/:id"
                element={<LeadershipDetail />}
              />
              <Route path="/about/client/:id" element={<ClientDetail />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/community/issue-01" element={<IssueOnePage />} />
              <Route path="/community/issue-02" element={<IssueTwoPage />} />

            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </SupabaseProvider>
  );
}

export default App;
