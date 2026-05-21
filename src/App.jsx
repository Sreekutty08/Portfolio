import React from "react";
// import Data from "./components/Data";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Project from "./components/Project"; // FIXED: Kept as Project
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
// import Counter from "./components/Counter";
import "./App.css";

function App() {
  return (
    <div className="bg-blue-950 min-h-screen text-slate-100 antialiased">
      <Navbar />

      {/* FIXED: Elements now reference the exact component name imported above */}
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Project /></section> 
      <section id="education"><Education /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;