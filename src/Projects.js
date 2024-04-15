import React from 'react';
import logo from './pele.png';

function Projects() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Project 1 */}
        <div className="bg-black rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Pele - Car service</h2>
          <img src={logo} alt="Project 3" className="mb-4 rounded-lg" />
          <p className="text-gray-600 mb-4">This was my first web project, it involved working with 3 of my classmates to create a online booking system for delivery of car services.</p>
          <a href="https://github.com/MegaliOrexi/PELE--Online-Car-Servicing" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">Learn more</a>
        </div>

        {/* Project 2 */}
        <div className="bg-black rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Project 2</h2>
          <p className="text-gray-600 mb-4">Description of Project 2.</p>
          <a to="#" className="text-blue-500 hover:underline">Learn more</a>
        </div>

        {/* Project 3 */}
        <div className="bg-black rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Project 3</h2>
          <p className="text-gray-600 mb-4">Description of Project 3.</p>
          <a to="#" className="text-blue-500 hover:underline">Learn more</a>
        </div>

        {/* Add more projects as needed */}
      </div>
    </div>
  );
}

export default Projects;
