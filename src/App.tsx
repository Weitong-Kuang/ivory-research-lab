import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Research from "./pages/Research";
import Systems from "./pages/Systems";
import Experiments from "./pages/Experiments";
import ArticleDetail from "./pages/ArticleDetail";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="research" element={<Research />} />
            <Route path="research/:id" element={<ArticleDetail />} />
            <Route path="systems" element={<Systems />} />
            <Route path="experiments" element={<Experiments />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
