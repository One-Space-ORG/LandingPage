import React, { useEffect } from 'react';
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
    <div className="min-h-screen bg-gradient-to-b from-warm-50 to-white dark:from-black dark:to-black">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          
          <PulseBeams />
          
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-80">
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
                    'A place where you can create your own productivity zone',
                    1000,
                    'Create your perfect productivity zone with multiple usefull components',
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
      <section className="py-20 bg-black px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 text-white">Built With Modern Tech Stack</h2>
          
          <div className="relative bg-[#0c0c0c] rounded-2xl p-10 shadow-2xl border border-gray-800">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 rounded-2xl"></div>
            
            <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
              {/* Tech logos in curved arrangement */}
              <div className="relative w-full md:w-1/2 h-[400px] mb-10 md:mb-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <TechCard name="React" imgSrc="/src/assets/react-logo.svg" className="absolute -top-32 -left-20" />
                  <TechCard name="TypeScript" imgSrc="/src/assets/typescript-logo.svg" className="absolute -top-20 left-20" />
                  <TechCard name="Tailwind CSS" imgSrc="/src/assets/tailwind-logo.svg" className="absolute top-0 left-32" />
                  <TechCard name="Framer Motion" imgSrc="/src/assets/framer-logo.svg" className="absolute top-20 left-20" />
                  <TechCard name="Node.js" imgSrc="/src/assets/nodejs-logo.svg" className="absolute top-32 -left-20" />
                  <TechCard name="Express" imgSrc="/src/assets/express-logo.svg" className="absolute top-20 -left-60" />
                  <TechCard name="MongoDB" imgSrc="/src/assets/mongodb-logo.svg" className="absolute top-0 -left-72" />
                  <TechCard name="Socket.io" imgSrc="/src/assets/socketio-logo.svg" className="absolute -top-20 -left-60" />
                </div>
              </div>
              
              {/* Description text */}
              <div className="w-full md:w-1/2 text-left pl-0 md:pl-10">
                <h3 className="text-2xl font-bold text-white mb-6">Cutting-Edge Technologies</h3>
                <p className="text-lg text-gray-300 mb-4">
                  Our tech stack is carefully selected to provide the best performance, 
                  developer experience, and user experience.
                </p>
                <p className="text-lg text-gray-300 mb-4">
                  We use modern web technologies to ensure OneSpace is fast, reliable, 
                  and easy to extend.
                </p>
                <p className="text-lg text-gray-300">
                  The combination of React, TypeScript, and Tailwind CSS allows us to 
                  build a responsive and type-safe frontend, while Node.js and MongoDB 
                  provide a scalable backend solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-warm-900 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute -inset-[10%] bg-gradient-radial from-cyan-500/10 via-transparent to-transparent blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold mb-4 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Meet Our Team</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-warm-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-16 leading-relaxed">
            Passionate developers working together to create the ultimate productivity workspace
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <TeamMember 
              name="Alex Chen" 
              role="Frontend Developer" 
              imgSrc="/src/assets/team/alex.jpg" 
              github="https://github.com/alexchen"
            />
            <TeamMember 
              name="Sarah Johnson" 
              role="UX Designer" 
              imgSrc="/src/assets/team/sarah.jpg" 
              github="https://github.com/sarahjohnson"
            />
            <TeamMember 
              name="Michael Lee" 
              role="Backend Developer" 
              imgSrc="/src/assets/team/michael.jpg" 
              github="https://github.com/michaellee"
            />
            <TeamMember 
              name="Emma Wilson" 
              role="Project Manager" 
              imgSrc="/src/assets/team/emma.jpg" 
              github="https://github.com/emmawilson"
            />
          </div>
          
          <div className="flex justify-center">
            <a 
              href="https://github.com/One-Space-ORG/contribute" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center px-8 py-4 bg-black/30 text-white rounded-xl hover:bg-black/40 transition-all duration-300 ease-in-out text-lg font-medium overflow-hidden border border-gray-800"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-warm-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></span>
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-warm-500 transform translate-y-[2px] group-hover:translate-y-0 transition-transform duration-300"></span>
              <Github className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
              <span className="relative z-10">Wanna Contribute to the Project!</span>
            </a>
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

function TechCard({ imgSrc, name, className = "" }) {
  return (
    <div className={`flex flex-col items-center justify-center group ${className}`}>
      <div className="w-20 h-20 mb-2 flex items-center justify-center bg-[#1a1a1a] rounded-xl p-4 shadow-lg border border-gray-800 group-hover:border-gray-700 transition-all duration-300 group-hover:shadow-cyan-900/20 group-hover:shadow-lg hover:scale-110 hover:-translate-y-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
        <img src={imgSrc} alt={`${name} logo`} className="w-12 h-12 object-contain relative z-10 transition-transform duration-300" />
      </div>
      <p className="font-medium text-gray-300 group-hover:text-white transition-colors text-sm">{name}</p>
    </div>
  );
}

function TeamMember({ name, role, imgSrc, github }) {
  return (
    <div className="group relative bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-warm-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
      <div className="absolute -inset-0.5 bg-gradient-to-br from-cyan-500/30 via-purple-500/30 to-warm-500/30 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 rounded-xl"></div>
      
      <div className="relative">
        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 group-hover:scale-105 transition-transform duration-500">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 via-purple-500 to-warm-500 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
          <div className="absolute inset-1 rounded-full bg-black"></div>
          <img 
            src={imgSrc} 
            alt={name} 
            className="w-full h-full object-cover rounded-full relative p-1"
            onError={(e) => {
              e.target.src = `https://ui-avatars.com/api/?name=${name.replace(' ', '+')}&background=0D8ABC&color=fff`;
            }}
          />
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-1">{name}</h3>
        <p className="text-gray-400 mb-4">{role}</p>
        
        <a 
          href={github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-1.5 rounded-full bg-black/30 text-gray-300 hover:text-white border border-gray-800 hover:border-gray-700 transition-all duration-300"
        >
          <Github className="w-4 h-4 mr-1.5" />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  );
}

export default App;