import DarkModeProvider from "./components/DarkModeProvider";
import Layout from "./components/Layout";
import Intro from "./pages/Intro/Intro";
import IntroDetail from "./pages/Intro/IntroDetail";
import Skills from "./pages/Skills/Skills";
import Experience from "./pages/Experience/Experience";
import Feedback from "./pages/Feedback/Feedback";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";
import { useReveal } from "./hooks/useReveal";

function App() {
  useReveal();

  return (
    <>
      <DarkModeProvider />
      <Layout>
        <Intro />
        <IntroDetail />
        <Skills />
        <Experience />
        <Projects />
        <Feedback />
        <Contact />
      </Layout>
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
