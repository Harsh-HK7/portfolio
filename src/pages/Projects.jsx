import React from 'react';
import CloudCue from '../assets/CloudCue.png';
import MoodMad from '../assets/MoodMad.png';

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>
        <div className="flex flex-col gap-6">
          {/* CloudCue Project */}
          <div className="flex flex-col md:flex-row bg-gray-800 rounded shadow hover:shadow-lg transition overflow-hidden">
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
              <h3 className="text-xl text-white font-semibold mb-2">CloudCue</h3>
              <p className="text-gray-400 mb-3">
                A dynamic Weather App designed to provide real-time weather updates with a user-friendly interface. This project allowed me to deepen my skills in React, JavaScript, and API integration while tackling challenges like data fetching and responsive design.
                <br /><br />
                <strong>Key Features:</strong><br />
                Real-time weather data, intuitive UI, hourly/daily forecasts, and search functionality.
              </p>
              <p>
                <span className="text-white">Take a look: </span>
                <a href="https://weather-app-xi-opal-40.vercel.app/" className="text-blue-400 hover:underline">
                  https://weather-app-xi-opal-40.vercel.app/
                </a>
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img src={CloudCue} alt="CloudCue App Screenshot" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Music Streaming Project */}
          <div className="flex flex-col md:flex-row bg-gray-800 rounded shadow hover:shadow-lg transition overflow-hidden">
            
            <div className="w-full md:w-1/2">
              <img src={MoodMad} alt="Music Platform Screenshot" className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
              <h3 className="text-xl text-white font-semibold mb-2">Music Streaming Platform</h3>
              <p className="text-gray-400 mb-3">
                A full-stack music streaming web app where users explore and play tracks through a clean, responsive UI. Built with React, Tailwind CSS, and Node.js. Admins can manage content, while users enjoy smooth playback. Emphasizes backend security and real-time interactivity.
              </p>
              <p>
                <span className="text-white">Take a look: </span>
                <a href="https://music-player1-six.vercel.app/" className="text-blue-400 hover:underline">
                  https://music-player1-six.vercel.app/
                </a> 
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
