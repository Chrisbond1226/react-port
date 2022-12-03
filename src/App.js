import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  const [projectSelected, setProjectSelected] = useState(false);

  return (
    <div>
      <Header
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Header>

      <main>
        {" "}
        {!contactSelected ? (
          <>
            <Projects
              projectSelected={projectSelected}
              setProjectSelected={setProjectSelected}
            ></Projects>
            <About></About>
          </>
        ) : (
          <Contact></Contact>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
