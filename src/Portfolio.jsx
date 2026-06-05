import React, { useState } from "react";

// Simple UI components
const Card = ({ children, className }) => (
  <div className={`bg-white ${className}`}>{children}</div>
);

const Button = ({ children, onClick, active }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1 rounded-xl border transition 
    ${active ? "bg-black text-white" : "bg-white hover:bg-gray-200"}`}
  >
    {children}
  </button>
);

export default function Portfolio() {
  const [tab, setTab] = useState("education");

  const tabs = [
    { id: "education", label: "Education" },
    { id: "jobs", label: "Jobs" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
  ];

  const content = {
    education: (
      <div>
        <h2 className="text-xl font-semibold mb-2">University</h2>
        <p>B.S. in Computer Engineering</p>
      </div>
    ),

    jobs: (
      <div>
        <h2 className="text-xl font-semibold mb-2">Firmware Intern</h2>
        <p>Working on embedded systems and low-level development</p>
      </div>
    ),

    experience: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Developed firmware using C/C++</li>
        <li>Worked with embedded systems and debugging tools</li>
        <li>Built web apps with React</li>
      </ul>
    ),

    projects: (
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Embedded System Project</strong> – Built a microcontroller-based system using C
        </li>
        <li>
          <strong>Portfolio Website</strong> – This React portfolio site
        </li>
      </ul>
    ),

    skills: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Languages: C, C++, Python, JavaScript</li>
        <li>Tools: Git, Linux, Debugging</li>
        <li>Frameworks: React</li>
      </ul>
    ),
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Darlina Phan</h1>
        <p className="text-gray-600">Firmware Developer | Embedded Systems</p>

        {/* Contact */}
        <div className="mt-3 space-x-4">
          <a href="#" className="text-blue-500">GitHub</a>
          <a href="#" className="text-blue-500">LinkedIn</a>
          <a href="#" className="text-blue-500">Email</a>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-2 mb-6 flex-wrap">
        {tabs.map((t) => (
          <Button
            key={t.id}
            onClick={() => setTab(t.id)}
            active={tab === t.id}
          >
            {t.label}
          </Button>
        ))}
      </div>

      {/* Content */}
      <div className="flex justify-center">
        <Card className="w-full max-w-3xl rounded-2xl shadow-xl p-6">
          {content[tab]}
        </Card>
      </div>

    </div>
  );
}