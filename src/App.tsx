import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Research from "./pages/Research";
import Systems from "./pages/Systems";
import Experiments from "./pages/Experiments";
import ArticleDetail from "./pages/ArticleDetail";
import SystemDetail from "./pages/SystemDetail";
import ExperimentDetail from "./pages/ExperimentDetail";
import { LanguageProvider } from "./context/LanguageContext";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="research" element={<Research />} />
            <Route path="research/:id" element={<ArticleDetail />} />
            <Route path="systems" element={<Systems />} />
            <Route path="systems/:id" element={<SystemDetail />} />
            <Route path="experiments" element={<Experiments />} />
            <Route path="experiments/:id" element={<ExperimentDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
