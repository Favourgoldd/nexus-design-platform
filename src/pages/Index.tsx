
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { 
  BookOpen, 
  Palette, 
  Code, 
  Copy, 
  Check, 
  ChevronRight,
  Github,
  Figma,
  Play,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ComponentsPage from "@/components/ComponentsPage";
import TokensPage from "@/components/TokensPage";
import GettingStartedPage from "@/components/GettingStartedPage";

const DesignSystemApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/tokens" element={<TokensPage />} />
        <Route path="/getting-started" element={<GettingStartedPage />} />
      </Routes>
    </Router>
  );
};

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Palette className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  DesignHub
                </span>
              </Link>
              
              <div className="hidden md:flex space-x-6">
                <Link to="/components" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                  Components
                </Link>
                <Link to="/tokens" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                  Design Tokens
                </Link>
                <Link to="/getting-started" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                  Getting Started
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative hidden sm:block">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <Input
                  placeholder="Search components..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <a 
                href="https://github.com/Favourgoldd/nexus-design-platform.git" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            <Play className="w-3 h-3 mr-1" />
            Production Ready
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Build with
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}Confidence
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            A comprehensive design system for teams who want to build beautiful, 
            accessible, and consistent user experiences at scale.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/getting-started">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                Get Started
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/components">
              <Button variant="outline" size="lg">
                <Code className="w-4 h-4 mr-2" />
                Explore Components
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Everything you need to build
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From design tokens to production-ready components, we've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Palette className="w-6 h-6" />}
              title="Design Tokens"
              description="Consistent design decisions across all platforms with a single source of truth."
              link="/tokens"
            />
            
            <FeatureCard
              icon={<Code className="w-6 h-6" />}
              title="Components"
              description="Accessible, TypeScript-ready components built with Tailwind CSS."
              link="/components"
            />
            
            <FeatureCard
              icon={<BookOpen className="w-6 h-6" />}
              title="Documentation"
              description="Interactive examples with copy-to-clipboard code snippets."
              link="/getting-started"
            />
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Quick Start
            </h2>
            <p className="text-lg text-slate-600">
              Get up and running in minutes
            </p>
          </div>

          <Card className="p-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  1
                </div>
                <span>Install the package</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CodeBlock code="npm install @designhub/ui @designhub/tokens" />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-lg flex items-center justify-center">
                <Palette className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold">DesignHub</span>
            </div>
            <p className="text-slate-400 mb-6">
              Built with ❤️ for design and development teams
            </p>
          </div>
          
          {/* Contact Information */}
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-slate-300">
              <a 
                href="mailto:seyidagold@gmail.com" 
                className="hover:text-white transition-colors flex items-center space-x-2"
              >
                <span>📧</span>
                <span>seyidagold@gmail.com</span>
              </a>
              <a 
                href="tel:+2348038829689" 
                className="hover:text-white transition-colors flex items-center space-x-2"
              >
                <span>📞</span>
                <span>+234 803 882 9689</span>
              </a>
            </div>
          </div>

          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/Favourgoldd/nexus-design-platform.git" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </a>
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
              <Figma className="w-4 h-4 mr-2" />
              Figma
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, link }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}) => (
  <Link to={link}>
    <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer">
      <CardContent className="p-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center text-white mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </CardContent>
    </Card>
  </Link>
);

const CodeBlock = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
        <code>{code}</code>
      </pre>
      <Button
        variant="secondary"
        size="sm"
        className="absolute top-2 right-2"
        onClick={copyToClipboard}
      >
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      </Button>
    </div>
  );
};

export default DesignSystemApp;
