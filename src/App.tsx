import DarkModeProvider from "./components/DarkModeProvider";
import Layout from "./components/Layout";
import Intro from "./pages/Intro/Intro";
import IntroDetail from "./pages/Intro/IntroDetail";
import Skills from "./pages/Skills/Skills";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <DarkModeProvider />
      <Layout>
        <Intro />
        <IntroDetail />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
}

export default App;
