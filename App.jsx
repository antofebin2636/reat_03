import { useState } from "react";

import "./App.css";
import BasicProps from "./components/BasicProps";
import ChildrenProps from "./components/ChildrenProps";
import ComplexProps from "./components/ComplexProps";
import RefProp from "./components/RefProp";
import ThemeToggler from "./components/ThemeToggler";

function Navigation() {
  const isDark = true;

  const sections = [
    {
      id: "basic",
      label: "Basic",
      icon: "📦",
    },
    {
      id: "ref",
      label: "ref Props",
      icon: "🔗",
    },
    {
      id: "children",
      label: "Children Props",
      icon: "👶",
    },
    {
      id: "complex",
      label: "complex",
      icon: "🧩",
    },
    {
      id: "theme",
      label: "theme Props",
      icon: "🎨",
    },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 shadow-md transition-colors ${isDark ? "bg-gray-800" : "bg-white"}`}
    >
      <div className="container mx-auto px-5 py-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`px-4 py-2 rounded-lg font-medium bg-blue-500 text-white mx-2 mt-2 hover:bg-sky-900`}
            >
              <span>{section.icon}</span>
              <span className="capitalize cursor-pointer">{section.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function AppContent() {
  const isDark = true;
  return (
    <div className={`min-h-screen bg-gray-800 `}>
      <Navigation />
      <div className={`container mx-auto px-4 py-8`}>
        <header
          className={`text-center mb-12  transition-colors ${isDark ? "text-white" : "bg-gray-800"}`}
        >
          <h1 className="text-5xl font-bold mb-4">React Props</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            pariatur, quisquam nam inventore ex impedit.
          </p>
        </header>
        <div id="basic" className="scroll-mt-200">
          <BasicProps />
        </div>
        <div id="basic" className="scroll-mt-200">
          <ChildrenProps />
        </div>
        <div id="basic" className="scroll-mt-200">
          <ComplexProps />
        </div>
        <div id="basic" className="scroll-mt-200">
          <RefProp />
        </div>
        <div id="basic" className="scroll-mt-200">
          <ThemeToggler />
        </div>
        <footer
          className={`mt-12 text-center pb-8 transition-colors ${isDark ? "text-gray-400" : " text-gray-600"}`}
        >
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
            facilis quasi vitae in amet, distinctio tenetur maxime quisquam!
            Officia, aperiam?
          </p>
        </footer>
      </div>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return <AppContent />;
}

export default App;
