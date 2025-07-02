import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />

      <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl">
          <ProfileCard
            name="Immanuel Andre Tua Sinaga"
            title="Informatics Student | Future Web & App Developer"
            image="/assets/profile.jpg"
          />

          <div className="max-w-md">
            <h2 className="text-3xl font-bold mb-4">Profile</h2>
            <p className="text-gray-300">
             I am an Informatics student at ST Bhinneka with a strong interest in modern web and application development. I’m currently focusing on learning technologies such as React, Tailwind CSS, and 3D programming with React Three Fiber. I also have experience working with Java Swing for desktop applications and integrating them with MySQL databases. I am enthusiastic about continuously improving my programming skills and building creative, functional projects.
            </p>
          </div>
        </div>
      </div>

      <About />
      <Projects />
      <Experiences />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
