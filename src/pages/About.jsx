// ye meri janam kundali hai...ab me apni ra*** rona chalu karta hu...XD

import React from "react";
function About() {
  return (
    <section className="mt-10 min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-6 py-12">
      
      

      {/* About Title & Description */}
      <div className="max-w-3xl text-center mt-6">
        <h1 className="text-5xl font-extrabold text-purple-400 mb-4">
          About Me
        </h1>
        <p className="text-gray-300 text-lg">
          Hey there! 👋 I'm <span className="text-purple-300 font-semibold">Jitendra Suthar</span>, a passionate <b>developer and AI enthusiast</b>.  
          I love <b>building projects</b>, experimenting with <b>new technologies</b>, and sharing my <b>knowledge</b>.  
          This project was an exciting journey, and I'd love to hear your feedback!
        </p>
      </div>

      {/* Description Section */}
      <div className="mt-10 w-full max-w-3xl bg-gray-900 p-6 rounded-lg shadow-lg border border-purple-500">
        <h2 className="text-2xl font-semibold text-purple-400 mb-3">💡 Description ?</h2>
        <p className="text-gray-300">
          This is small project of <b>E-commerece</b> sites where you can buy products and add to cart and checkout the products.
          Basically this is only front end part of the project. There is <b>Fake API from Platzi</b> which serve data to this site.
          <br /><br />
          <b>Note:</b> As API is public so there are some <b>invalid</b> product uploaded by some users. Main purpose of this project is to showcase the my <b>frontend</b> skills (which are not that great) .
        </p>
      </div>

      {/* Education Section */}
      <div className="mt-6 w-full max-w-3xl bg-gray-900 p-6 rounded-lg shadow-lg border border-purple-500">
        <h2 className="text-2xl font-semibold text-purple-400 mb-3">🎓 Education</h2>
        <p className="text-gray-300">📍 Pursuing PG in <b>AI/ML</b> at <b>IIIT Bangalore</b></p>
        <p className="text-gray-300">📍 Bachelor's in <b>Computer Science</b> from <b>Pune University</b></p>
      </div>

      {/* Skills Section */}
      <div className="mt-6 w-full max-w-3xl bg-gray-900 p-6 rounded-lg shadow-lg border border-purple-500">
        <h2 className="text-2xl font-semibold text-purple-400 mb-3">🛠 Skills</h2>
        <ul className="text-gray-300 grid grid-cols-2 gap-2">
          <li> Web Development</li>
          <li> AI & Machine Learning</li>
          <li> Data Analytics</li>
          <li> Full-Stack Development</li>
          <li> Linux & System Optimization</li>
          <li> Robotics & Electronics</li>
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="mt-6 w-full max-w-3xl bg-gray-900 p-6 rounded-lg shadow-lg border border-purple-500">
        <h2 className="text-2xl font-semibold text-purple-400 mb-3">🚀 Tech Stack Used</h2>
        <p className="text-gray-300">
          This project is built using:
        </p>
        <div className="flex flex-wrap gap-3 mt-3">
          <span className="px-3 py-1 bg-purple-600 rounded-full">React.js</span>
          <span className="px-3 py-1 bg-purple-600 rounded-full">Tailwind CSS</span>
          <span className="px-3 py-1 bg-purple-600 rounded-full">Node.js</span>
          <span className="px-3 py-1 bg-purple-600 rounded-full">Fake API</span>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-6 w-full max-w-3xl bg-gray-900 p-6 rounded-lg shadow-lg border border-purple-500 text-center">
        <h2 className="text-2xl font-semibold text-purple-400 mb-3">📩 Contact Me</h2>
        <p className="text-gray-300">Email: <a href="mailto:jitendrasutharwork@gmail.com" className="text-purple-300 hover:underline">jitendrasutharwork@gmail.com</a></p>
      </div>
    </section>
  );
}

export default About;
