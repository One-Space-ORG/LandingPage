import React from 'react';
import { 
  Layout, 
  Boxes, 
  Clock, 
  Music, 
  Youtube, 
  MessageSquare, 
  Github,
  ArrowRight,
  Construction
} from 'lucide-react';
import { TypeAnimation } from 'react-type-animation'
import { LampContainer, LampDemo } from './lamp';
import OneSpace from '../OneSpace.png'
import { PulseBeams } from './PulseBeam';
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-warm-50 to-white">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          
          <PulseBeams />
          
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-64">
          <div className="inline-block bg-[#1e1e1e] backdrop-blur-sm p-8 rounded-lg shadow-2xl mb-8 w-[800px]">
            {/* Terminal Header */}
            <div className="flex items-center justify-between mb-4 border-b border-gray-700 pb-3">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#1e1e1e] border-2 border-gray-500 mr-2"></div>
                <span className="text-gray-400 text-sm font-medium">OneSpace Terminal</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-4 bg-green-400/20"></div>
                <div className="w-1.5 h-4 bg-green-400/40"></div>
                <div className="w-1.5 h-4 bg-green-400/60"></div>
              </div>
            </div>
            {/* Terminal Content */}
            <div className="text-left">
              <span className="text-green-400 mr-2">$</span>
              <span className="text-xl md:text-2xl text-gray-100 font-mono">
                <TypeAnimation
                  sequence={[
                    'Create your perfect productivity zone...',
                    1000,
                    'Create your perfect productivity zone with drag-and-drop components',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  cursor={true}
                />
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <a 
              href="https://github.com/One-Space-ORG" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-warm-600 text-white rounded-lg hover:bg-warm-700 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </a>
            <button 
              onClick={() => {
                document.querySelector('#features')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
              className="inline-flex items-center px-6 py-3 bg-warm-400 text-white rounded-lg hover:bg-warm-500 hover:scale-105 hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 ease-in-out cursor-pointer"
            >
              <Construction className="w-5 h-5 mr-2" />
              Project is Under Construction, Want to know more about it!
            </button>
          </div>
        </div>

      </header>

      {/* Features Section */}
      <section id="features" className="py-32 px-4 bg-gradient-to-b from-black to-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white">
              Your Workspace, Your Rules
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Customize and optimize your workspace with our powerful features designed for maximum productivity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard 
              icon={<Boxes className="w-8 h-8" />}
              title="Drag & Drop"
              description="Customize your workspace layout with intuitive drag and drop functionality. Arrange components exactly how you want them."
            />
            <FeatureCard 
              icon={<Clock className="w-8 h-8" />}
              title="Productivity Tools"
              description="From Pomodoro timers to task lists, access all the tools you need to stay focused and productive in one place."
            />
            <FeatureCard 
              icon={<Layout className="w-8 h-8" />}
              title="Flexible Layout"
              description="Create the perfect arrangement with our flexible grid system. Adapt your workspace to match your unique workflow."
            />
          </div>
        </div>
      </section>

      {/* Example Layout */}
      <LampDemo />
      <section className="py-20 px-4">
       
          
        
       
        
      </section>
   
      {/* Components Preview 
      <section className="py-20 bg-warm-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-warm-900">Available Components</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ComponentCard icon={<Clock />} name="Pomodoro Clock" />
            <ComponentCard icon={<Music />} name="Playlist Integration" />
            <ComponentCard icon={<Youtube />} name="YouTube Player" />
            <ComponentCard icon={<MessageSquare />} name="Chat Integration" />
          </div>
        </div>
      </section>
      
*/}


      {/* Tech Stack */}
      <section className="py-20 bg-warm-50 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 text-warm-900">Built With Modern Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
              <img src="/src/assets/tech-logos.svg" alt="Technology Stack" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-warm-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-warm-100">
            © 2025 OneSpace. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="group bg-white p-8 rounded-2xl shadow-lg border border-warm-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <div className="text-warm-600 w-16 h-16 mb-6 p-3 bg-warm-50/50 rounded-xl group-hover:bg-warm-100/50 transition-colors">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-warm-900">{title}</h3>
      <p className="text-warm-700 leading-relaxed">{description}</p>
    </div>
  );
}

function ComponentCard({ icon, name }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
      <div className="text-warm-600 w-8 h-8 mx-auto mb-4">
        {icon}
      </div>
      <p className="font-medium text-warm-900">{name}</p>
    </div>
  );
}



export default App;